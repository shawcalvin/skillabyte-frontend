import { Divider } from "@/components/ui/divider";
import { Title } from "@/components/ui/heading";
import { SetStateFunction } from "@/lib/types/modules";
import { useEffect } from "react";

type ModuleContainerProps = {
    title: string;
    isComplete?: boolean;
    setIsComplete: SetStateFunction;
    isFinished?: boolean;
    handleFinish: () => void;
    children: React.ReactNode
}
export function ModuleContainer({ title, isComplete = true, setIsComplete, isFinished = false, handleFinish, children }: ModuleContainerProps) {

    useEffect(() => {
        if (isComplete) {
            setIsComplete(true);
        }

        if (isFinished) {
            handleFinish();
        }
    }, []);

    return (
        <>
            <Title>{title}</Title>
            <Divider className='mt-2 mb-4' />
            <div className="flex flex-col items-center justify-start text-primary-blue-900">
                <div className="w-full space-y-5">
                    {children}
                </div>
            </div>
            <Divider className="mt-8 mb-2" />
        </>
    )
}