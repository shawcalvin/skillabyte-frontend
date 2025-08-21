"use client"
import React, { useState, ReactNode, ReactElement, useEffect, useCallback } from 'react';

export interface TabProps {
    title: ReactNode;
    className?: string;
    disabled?: boolean;
    children: ReactNode;
}
export function Tab(_: TabProps) {
    return null;
}

export interface TabGroupProps {
    className?: string;
    activeIndex?: number;
    defaultActiveIndex?: number;
    onActiveIndexChange?: (idx: number) => void;
    children: ReactNode;
}

export function TabGroup({
    className,
    activeIndex,
    defaultActiveIndex = 0,
    onActiveIndexChange,
    children,
}: TabGroupProps) {
    const tabs = React.Children.toArray(children)
        .filter(React.isValidElement)
        .map(child => child as ReactElement<TabProps>);
    const [currentIndex, setCurrentIndex] = useState(defaultActiveIndex);
    useEffect(() => {
        if (activeIndex != null && activeIndex !== currentIndex) {
            setCurrentIndex(activeIndex);
        }
    }, [activeIndex, currentIndex]);

    const handleClick = useCallback((idx: number) => {
        setCurrentIndex(idx);
        onActiveIndexChange?.(idx);
    }, [onActiveIndexChange]);

    if (tabs.length === 0) return null;

    return (
        <div className={className}>
            <div role="tablist" className="flex space-x-4 border-b">
                {tabs.map((tab, idx) => {
                    const isActive = idx === currentIndex;
                    return (
                        <button
                            key={idx}
                            role="tab"
                            aria-selected={isActive}
                            onClick={() => handleClick(idx)}
                            disabled={tab.props.disabled}
                            className={
                                `px-4 py-2 -mb-px focus:outline-none ` +
                                (isActive
                                    ? 'border-b-2 border-gray-900 font-semibold text-gray-900'
                                    : 'border-b-2 border-transparent text-primary-gray-700 hover:text-gray-900')
                            }
                        >
                            {tab.props.title}
                        </button>
                    );
                })}
            </div>

            <div
                role="tabpanel"
                className={`p-4 text-gray-900 ${tabs[currentIndex].props.className ?? ''}`}
            >
                {tabs[currentIndex].props.children}
            </div>
        </div>
    );
}
