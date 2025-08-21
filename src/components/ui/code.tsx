'use client'

import { useState } from 'react'
import Editor from 'react-simple-code-editor'
import Prism from 'prismjs'


import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-javascript'

interface CodeEditorProps {
    language: 'sql' | 'javascript' | 'python'
    title?: string
    value?: string
    onChange?: (value: string) => void
    editable?: boolean
}

const defaultSnippets: Record<CodeEditorProps['language'], string> = {
    sql: 'SELECT * FROM users;',
    javascript: `console.log("Hello World");`,
    python: `print("Hello World")`,
}

const displayNames: Record<CodeEditorProps['language'], string> = {
    sql: 'SQL',
    javascript: `Javascript`,
    python: `Python`,
}

export function CodeEditor({
    language,
    title,
    value,
    onChange,
    editable = false,
}: CodeEditorProps) {
    const [localCode, setLocalCode] = useState(value ?? defaultSnippets[language]);

    const isControlled = typeof onChange === "function";
    const code = isControlled ? (value ?? "") : localCode;

    const handleChange = editable
        ? (newCode: string) => {
            if (isControlled) {
                onChange!(newCode);
            } else {
                setLocalCode(newCode);
            }
        }
        : () => { };

    const highlight = (text: string) => {
        const grammar = Prism.languages[language] || Prism.languages.markup;
        return Prism.highlight(text, grammar, language);
    }

    return (
        <div>
            <div className="text-gray-200 text-sm font-mono px-4 py-1 bg-gray-900/95 rounded-t-md mb-[1px]">
                {title || `${displayNames[language]} Editor`}
            </div>
            <div className="p-1 bg-gray-900/95 rounded-b-md font-mono text-sm">
                <Editor
                    value={code}
                    onValueChange={handleChange}
                    highlight={highlight}
                    padding={10}
                    className="focus:outline-none w-full text-gray-200 min-h-24"
                    style={{
                        caretColor: editable ? undefined : 'transparent',
                        pointerEvents: editable ? undefined : 'none',
                    }}
                    tabIndex={editable ? 0 : -1}
                />
            </div>
        </div>
    );
}

