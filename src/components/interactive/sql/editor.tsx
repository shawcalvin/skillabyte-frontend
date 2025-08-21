// components/QueryEditor.tsx
"use client";

import { CodeEditor } from "@/components/ui/code";

export interface QueryEditorProps {
    title?: string;
    value: string;
    onChange?: (newValue: string) => void;
    editable?: boolean;
}

export function QueryEditor({
    title,
    value,
    onChange,
    editable = false,
}: QueryEditorProps) {
    return (
        <div className="mb-4">
            <CodeEditor
                language="sql"
                title={title}
                value={value}
                onChange={onChange}
                editable={editable}
            />
        </div>
    );
}
