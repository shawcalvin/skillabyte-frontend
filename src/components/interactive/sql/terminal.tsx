// components/SQLTerminal.tsx
"use client";

import { useEffect, useState } from "react";
import { TabGroup, Tab } from "@/components/ui/tab";
import { QueryEditor } from "./editor";
import { QueryControls } from "./controls";
import { QueryResults } from "./results";
import { QueryFeedback } from "./feedback";
import { SQLDataset } from "@/lib/types/sql";
import { useSQL } from "@/hooks/useSql";
import { QueryExplanation } from "./explanation";
import { Popup } from "@/components/ui/popup";

export interface SQLTerminalProps {
    dataset: SQLDataset;
    title?: string;
    initialQuery?: string;
    validQuery?: string;
    explanation?: string | React.ReactNode;
    editable?: boolean;
    schema?: string;
    handleFinish?: () => void;
}

export function SQLTerminal({
    dataset,
    title,
    initialQuery = "",
    validQuery,
    explanation,
    editable = false,
    schema = "",
    handleFinish,
}: SQLTerminalProps) {
    const { results, flags, feedback, correct, attempts, error, loading, run, review } = useSQL(dataset);

    const [sql, setSql] = useState(initialQuery);
    const [tab, setTab] = useState(0);
    const [hasRun, setHasRun] = useState(false);
    const [complete, setComplete] = useState(false);

    const runAndShow = (q: string) => {
        setHasRun(true);
        run(q);
        setTab(0);
    };

    const reviewAndShow = (q: string, aq: string) => {
        setHasRun(true);
        run(q);
        review(q, aq);
        setTab(1);
    };

    useEffect(() => {
        if ((correct || attempts >= 2) || (!editable && hasRun)) {
            setComplete(true);
        }
    }, [hasRun, correct, attempts])

    useEffect(() => {
        if (handleFinish && complete) {
            handleFinish();
        }
    }, [complete])


    return (
        <div className="space-y-4 my-2">
            <div className="w-full flex justify-end">
                <Popup
                    src={schema}
                    description="View Schema"
                />
            </div>
            <QueryEditor
                title={title}
                value={sql}
                onChange={setSql}
                editable={editable}
            />

            <QueryControls
                onRun={() => runAndShow(sql)}
                onClear={editable ? () => setSql(initialQuery) : undefined}
                onCheck={
                    editable && validQuery
                        ? () => reviewAndShow(sql, validQuery)
                        : undefined
                }
                loading={loading}
            />

            <TabGroup activeIndex={tab} onActiveIndexChange={setTab}>
                <Tab title="Results">
                    <QueryResults results={results} error={error} loading={loading} />
                </Tab>
                {validQuery && (
                    <Tab title="Feedback">
                        <QueryFeedback loading={loading} flags={flags} feedback={feedback} />
                    </Tab>
                )}
                {complete && (explanation || validQuery) && (
                    <Tab title="Explanation">
                        <QueryExplanation
                            loading={loading}
                            code={validQuery}
                            explanation={explanation}
                        />
                    </Tab>
                )}
            </TabGroup>
        </div>
    );
}
