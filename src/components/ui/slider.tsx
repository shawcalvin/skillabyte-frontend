import React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

interface SliderProps {
    value: number[];
    onChange: (value: number[]) => void;
    max: number;
    step: number;
    className?: string;
}

export function Slider({ value, onChange, max, step, className }: SliderProps) {
    return (
        <SliderPrimitive.Root
            className={`relative flex items-center ${className}`}
            value={value}
            onValueChange={onChange}
            max={max}
            step={step}
            aria-label="Slider"
        >
            <SliderPrimitive.Track className="bg-gray-300 relative flex-grow rounded-full h-2">
                <SliderPrimitive.Range className="absolute bg-blue-500 h-full rounded-full" />
            </SliderPrimitive.Track>
            <SliderPrimitive.Thumb className="block w-4 h-4 bg-blue-500 rounded-full shadow" />
        </SliderPrimitive.Root>
    );
};
