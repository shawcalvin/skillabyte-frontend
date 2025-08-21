import clsx from "clsx";
import { PropsWithChildren } from "react";
import ReactMarkdown, { Components } from "react-markdown";

const markdownComponents: Components = {
    h1: ({ children }) => <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-xl font-semibold mt-8 mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-lg font-medium mt-8 mb-2">{children}</h3>,
    a: ({ href, children }) => <a href={href} className="text-primary-blue-500 underline hover:text-primary-blue-400" target="_blank">{children}</a>,
    p: ({ children }) => <p className="mb-4">{children}</p>,
    ul: ({ children }) => <ul className="list-disc mb-4 ml-4">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal mb-4 ml-4">{children}</ol>,
    li: ({ children }) => <li className="mb-2">{children}</li>,
};

type MarkdownProps = {
    className?: string;
};

export function Markdown({
    children,
    className,
}: PropsWithChildren<MarkdownProps>) {
    return (
        <div className={clsx(`text-zinc-600`, className)}>
            <ReactMarkdown components={markdownComponents}>{children as string}</ReactMarkdown>
        </div>
    )
}