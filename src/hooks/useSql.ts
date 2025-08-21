import initSqlJs, { Database } from "sql.js";
import { useEffect, useState, useCallback } from "react";
import { SQLDataset, SQLFlags } from "@/lib/types/sql";
import { HttpClient } from "@/lib/client";
import { ChatMessage } from "@/lib/types/chatbot";

export function useSQL(dataset: SQLDataset) {
    const [db, setDb] = useState<Database | null>(null);
    const [results, setResults] = useState<{ columns: string[]; values: any[][] }[]>([]);
    const [flags, setFlags] = useState<SQLFlags | null>(null);
    const [feedback, setFeedback] = useState<string | null>(null);
    const [correct, setCorrect] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [error, setError] = useState<string | null>(null);
    const [runLoading, setRunLoading] = useState(false);
    const [reviewLoading, setReviewLoading] = useState(false);

    const loading = runLoading || reviewLoading

    useEffect(() => {
        initSqlJs({ locateFile: () => "/sql-wasm.wasm" })
            .then(SQL => {
                const instance = new SQL.Database();
                for (const tbl of dataset.tables) {
                    const defs = tbl.fields.map(f => `${f.name} ${f.type}`).join(", ");
                    instance.run(`CREATE TABLE ${tbl.name} (${defs});`);
                    tbl.rows.forEach(row => {
                        const cols = Object.keys(row).join(", ");
                        const ph = Object.keys(row).map(() => "?").join(", ");
                        instance.run(
                            `INSERT INTO ${tbl.name} (${cols}) VALUES (${ph});`,
                            Object.values(row)
                        );
                    });
                }
                setDb(instance);
            })
            .catch(e => setError(e.message));
    }, [dataset]);

    const clean = useCallback((raw: string) => {
        return mysqlFunctions.reduce(
            (acc, fn) => acc.replace(fn.find, fn.replace),
            raw.trim()
        );
    }, []);

    const exec = useCallback((sql: string) => {
        if (!db) return [];
        try {
            return db.exec(sql);
        } catch (e: any) {
            setError(e.message);
            return [];
        }
    }, [db]);

    const run = useCallback((rawSql: string) => {
        if (!db || runLoading) return;
        const q = rawSql.trim();
        if (!/^SELECT\b/i.test(q)) {
            setError("Only SELECT statements are allowed.");
            setResults([]);
            return;
        }
        if (/--|\/\*/.test(q)) {
            setError("Comments are not allowed.");
            setResults([]);
            return;
        }

        setError(null);
        setRunLoading(true);
        setFeedback(null);

        setTimeout(() => {
            try {
                const out = db.exec(clean(q));
                if (out.length === 0) {
                    const stmt = db.prepare(clean(q));
                    const columns = stmt.getColumnNames();
                    stmt.free();
                    setResults([{ columns, values: [] }]);
                } else {
                    setResults(out);
                }
            } catch (e: any) {
                setError(e.message)
            } finally {
                setRunLoading(false);
            }
        }, 500);
    }, [db, clean, exec, runLoading]);

    const arraysEqual = (a: any[], b: any[]): boolean =>
        a.length === b.length && a.every((v, i) => JSON.stringify(v) === JSON.stringify(b[i]));

    const review = useCallback(
        async (userSql: string, answerSql: string) => {
            if (!db || reviewLoading) return;

            setReviewLoading(true);
            setError(null);

            const [ans = { columns: [], values: [] }] = exec(clean(answerSql));
            const [res = { columns: [], values: [] }] = exec(clean(userSql));

            const correctColCount = res.columns.length === ans.columns.length;
            const correctColValues = arraysEqual(res.columns, ans.columns);
            const correctRowCount = res.values.length === ans.values.length;
            const correctRowValues = JSON.stringify(res.values) === JSON.stringify(ans.values);

            setFlags({ correctColCount, correctColValues, correctRowCount, correctRowValues });
            const isCorrect = correctColCount && correctColValues && correctRowCount && correctRowValues;
            setCorrect(isCorrect);

            const q = userSql.trim();
            if (!q || q.length === 0) {
                await new Promise(resolve => setTimeout(resolve, 500));
                setFeedback("Please enter a SQL query before attempting to receive feedback.");
                setReviewLoading(false);
                return;
            }

            try {
                db.exec(clean(q));
            } catch (e: any) {
                await new Promise(resolve => setTimeout(resolve, 500));
                setFeedback("Invalid SQL query. Rewrite and run your query before attempting to receive feedback.");
                setReviewLoading(false);
                return;
            }

            setAttempts(a => a + 1);

            if (isCorrect) {
                await new Promise(resolve => setTimeout(resolve, 500));
                setFeedback("Your query is correct!");
                setReviewLoading(false);
                return;
            }


            const prompt = `
                    You will be giving feedback to a student based on their response to SQL practice questions using the ${dataset.metadata.name} Dataset. Students will write and run a SQL code, and you will compare their code to the suggested code and correct output. The student will be running their code using SQLite - this may help you correct any syntax errors. Here is the data you need to provide feedback: task, student's query, suggested solution query, and criteria they missed. ${dataset.metadata.name} dataset schema:

                    ${JSON.stringify(dataset, null, 2)}

                    Grading Criteria: The following five points are the only grading criteria we are concerned with. Do not correct students on aliasing or other issues unless it affects their performance on the following criteria. 

                    Correct number of output rows 

                    Correct number of columns 

                    Correct column names 

                    Correct column order (student must also have correct number of columns to get this point) 

                    Correct data area (students must also have correct number of output rows, correct number of columns, and correct column order to get this point) 

                    Note that "Correct data area" means that each of the output cells (excluding column names) is correct. For example, if the student sorts the data incorrectly using ORDER BY, then they lose this point, even if all of the other criteria are correct. 

                    The criteria will be graded before you receive this prompt. We will only send you the criteria that they missed. 

                    Here is the suggested answer code:
                    ${answerSql}

                    Here is the correct data output:
                    ${JSON.stringify(ans, null, 2)}

                    Feedback outline: 
                    Brief and straightforward feedback (1-3 sentences). Do NOT directly reveal the correct code in your feedback - rather, you should give a hint or two to help the student identify the problem of their query. 
                `

            const message = `
                    Student SQL:
                    ${userSql}
                    
                    Student output:
                    ${JSON.stringify(res, null, 2)}
                `.trim();

            try {
                const { data } = await HttpClient.post<ChatMessage>(
                    "/content/chatbots/chat",
                    {
                        model: "gpt-4o-mini",
                        prompt: prompt,
                        message: message,
                    }
                );

                setFeedback(data.content);
            } catch (err: any) {
                setError("An error occurred while generating feedback: " + err.message);
            } finally {
                setReviewLoading(false);
            }
        },
        [
            db,
            clean,
            exec,
            dataset,
            setReviewLoading,
            setError,
            setFeedback,
            HttpClient,
        ]
    );

    return {
        results,
        flags,
        feedback,
        correct,
        attempts,
        error,
        loading,
        run,
        review
    };
}


const mysqlFunctions = [
    { // YEAR() - Extract year from date
        find: /(?<!\w)\s*year\s*\(\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'CAST(SUBSTR($1,1,4) AS INTEGER)',
    },
    { // MONTH() - Extract month from date
        find: /(?<!\w)\s*month\s*\(\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'CAST(SUBSTR($1,6,2) AS INTEGER)',
    },
    { // DAY() - Extract day from date
        find: /(?<!\w)\s*day\s*\(\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'CAST(SUBSTR($1,9,2) AS INTEGER)',
    },
    { // WEEKDAY
        find: /(?<!\w)\s*weekday\s*\(\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'CAST(STRFTIME("%w", $1) AS INTEGER)',
    },
    {// AVG() - Round to two decimal places
        find: /(?<!\w)\s*avg\s*\(\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'ROUND(AVG($1), 2)',
    },
    { // HOUR() - Extract hour from date
        find: /(?<!\w)\s*hour\s*\(\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'CAST(SUBSTR($1,12,2) AS INTEGER)',
    },
    { // MINUTE() - Extract minute from date
        find: /(?<!\w)\s*minute\s*\(\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'CAST(SUBSTR($1,15,2) AS INTEGER)',
    },
    { // SECOND() - Extract second from date
        find: /(?<!\w)\s*second\s*\(\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'CAST(SUBSTR($1,18,2) AS INTEGER)',
    },
    { // TODAY() - Get current date
        find: /(?<!\w)\s*today\s*\(\s*\)/gi,
        replace: 'DATE()',
    },
    { // NOW() - Get current date and time
        find: /(?<!\w)\s*now\s*\(\s*\)/gi,
        replace: 'DATETIME()',
    },
    { // DATEDIFF() - Calculate number of days between two dates
        find: /(?<!\w)\s*datediff\s*\(\s*((?:.|\s)*?)\s*,\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'JULIANDAY($2) - JULIANDAY($1)',
    },
    { // DATEADD() - Add a specified number of days to a date
        find: /(?<!\w)\s*date_add\s*\(\s*(\w+)\s*,\s*interval\s+(-?\d+)\s+(\w+)\s*\)/gi,
        replace: 'DATE($1, $2 $3)',
    },
    { // UCASE() - Convert string to uppercase
        find: /(?<!\w)\s*ucase\s*\(\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'UPPER($1)',
    },
    { // LCASE() - Convert string to lowercase
        find: /(?<!\w)\s*lcase\s*\(\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'LOWER($1)',
    },
    { // LEFT() - Starting at the leftmost character, extract a substring of a specified length
        find: /(?<!\w)\s*left\s*\(\s*((?:.|\s)*?)\s*,\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'SUBSTR($1,1,$2)',
    },
    { // RIGHT() - Starting at the rightmost character, extract a substring of a specified length
        find: /(?<!\w)\s*right\s*\(\s*((?:.|\s)*?)\s*,\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'SUBSTR($1,LENGTH($1)-$2+1,$2)',
    },
    { // MID() - Extract a substring from the middle of a string
        find: /(?<!\w)\s*mid\s*\(\s*((?:.|\s)*?)\s*,\s*((?:.|\s)*?)\s*,\s*((?:.|\s)*?)\s*\)/gi,
        replace: 'SUBSTR($1,$2,$3)',
    }
];
