import React from 'react';
import clsx from 'clsx';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/16/solid';

export interface AccordianGroupProps {
    className?: string;
    iconColor?: string;
    titleColor?: string;
    contentColor?: string;
    children: React.ReactNode;
}
export function AccordianGroup({
    className,
    iconColor,
    titleColor,
    contentColor,
    children
}: AccordianGroupProps) {
    return (
        <dl className={clsx('space-y-2', className)}>
            {React.Children.map(children, child => {
                if (!React.isValidElement(child)) return child;

                const inject: Partial<AccordianProps> = {};
                if (iconColor && child.props.iconColor == null) {
                    inject.iconColor = iconColor;
                }
                if (titleColor && child.props.titleColor == null) {
                    inject.titleColor = titleColor;
                }
                if (contentColor && child.props.contentColor == null) {
                    inject.contentColor = contentColor;
                }

                return React.cloneElement(child, inject);
            })}
        </dl>
    );
}

export interface AccordianProps {
    /** full class string, e.g. "text-red-500" */
    iconColor?: string;
    /** full class string, e.g. "bg-green-200" */
    titleColor?: string;
    /** full class string, e.g. "bg-gray-50" */
    contentColor?: string;
    className?: string;
    children: React.ReactNode;
}
export function Accordian({
    iconColor,
    titleColor,
    contentColor,
    className,
    children
}: AccordianProps) {
    const resolvedIcon = iconColor ?? 'text-gray-900';
    const resolvedTitleBg = titleColor ?? 'bg-gray-200';
    const resolvedContentBg = contentColor ?? 'bg-gray-50';

    const items = React.Children.toArray(children) as React.ReactElement[];
    const titleEl = items.find(c => React.isValidElement(c) && c.type === AccordianTitle);
    const contentEl = items.find(c => React.isValidElement(c) && c.type === AccordianContent);

    const titleProps = (titleEl?.props ?? {}) as AccordianTitleProps;
    const contentProps = (contentEl?.props ?? {}) as AccordianContentProps;

    return (
        <Disclosure as="div" className={className}>
            <dt>
                <DisclosureButton
                    className={clsx(
                        'group flex w-full items-start justify-between text-left text-gray-900 font-semibold py-6 px-2 sm:px-8 rounded-md border border-gray-300',
                        'aria-[expanded=true]:rounded-t-md aria-[expanded=true]:rounded-b-none',
                        resolvedTitleBg,
                        titleProps.className,
                    )}
                >
                    {titleProps.children}
                    <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                            aria-hidden="true"
                            className={clsx(
                                'h-6 w-6 group-data-[open]:hidden',
                                resolvedIcon
                            )}
                        />
                        <ChevronUpIcon
                            aria-hidden="true"
                            className={clsx(
                                'hidden h-6 w-6 group-data-[open]:block',
                                resolvedIcon
                            )}
                        />
                    </span>
                </DisclosureButton>
            </dt>
            <DisclosurePanel
                as="dd"
                className={clsx(
                    'pr-12 py-4 text-gray-700 px-2 sm:px-8 rounded-b-md border border-gray-300',
                    resolvedContentBg,
                    contentProps.className,
                )}
            >
                {contentProps.children}
            </DisclosurePanel>
        </Disclosure>
    );
}

export interface AccordianTitleProps {
    className?: string;
    children: React.ReactNode;
}
export function AccordianTitle({ className, children }: AccordianTitleProps) {
    return (
        <span className={clsx('text-base/7 font-semibold', className)}>
            {children}
        </span>
    );
}
AccordianTitle.displayName = 'AccordianTitle';

export interface AccordianContentProps {
    className?: string;
    children: React.ReactNode;
}
export function AccordianContent({ className, children }: AccordianContentProps) {
    return <div className={clsx(className)}>{children}</div>;
}
AccordianContent.displayName = 'AccordianContent';
