import { Button } from "@/components/ui/button";

type QueryControlsProps = {
    onRun: () => void;
    onClear?: () => void;
    onCheck?: () => void;
    loading?: boolean;
}
export function QueryControls({
    onRun,
    onClear,
    onCheck,
    loading = false,
}: QueryControlsProps) {
    return (
        <div className="flex justify-between items-center mb-4">
            <div className="space-x-2">
                <Button
                    onClick={onRun}
                    disabled={loading}
                    color="blue"
                    className="w-24"
                >
                    Run
                </Button>

                {onClear && (
                    <Button
                        onClick={onClear}
                        disabled={loading}
                        color="light"
                        className="w-24"
                    >
                        Clear
                    </Button>
                )}
            </div>

            {onCheck && (
                <Button
                    onClick={onCheck}
                    disabled={loading}
                    color="blue"
                    className="w-24"
                >
                    Check
                </Button>
            )}
        </div>
    );
}