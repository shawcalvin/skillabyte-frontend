import { QueryEditor } from "./editor";
import { LoadingIcon } from "@/components/ui/loading-icon";

type QueryExplanationProps = {
    title?: string;
    code?: string;
    explanation?: string | React.ReactNode;
    loading?: boolean;
};

export function QueryExplanation({
    title = "Potential Solution",
    code,
    explanation,
    loading,
}: QueryExplanationProps) {

    if (loading) {
        return <div className="w-full flex justify-center">
            <LoadingIcon />
        </div>
    }

    return (
        <div className="p-4 bg-white rounded-lg shadow">
            {code &&
                <>
                    <p className="font-bold mb-2 text-gray-900">{title}</p>
                    <pre className="mb-4">
                        <QueryEditor
                            value={code}
                        />
                    </pre>
                </>
            }
            {explanation &&
                <>
                    {code && <p className="font-bold mb-2 text-gray-900">Explanation</p>}
                    <div className="text-gray-700">{explanation}</div>
                </>
            }
        </div>
    );
}