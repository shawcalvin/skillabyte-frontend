interface TooltipProps {
    children: React.ReactNode;
    text: string;
}
export function Tooltip({ children, text }: TooltipProps) {
    return (
        <div
            className="z-30 group relative inline-block"
        >
            {children}
            {(
                <div className="min-w-32 w-fit absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-primary-blue-900 text-white text-sm rounded z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {text}
                    <svg className="absolute text-primary-blue-900 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0" /></svg>
                </div>

            )}
        </div>
    );
}