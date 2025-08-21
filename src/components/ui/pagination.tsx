import clsx from 'clsx'
import type React from 'react'
import { Button } from './button'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/16/solid';

export function Pagination({
  'aria-label': ariaLabel = 'Page navigation',
  className,
  ...props
}: React.ComponentPropsWithoutRef<'nav'>) {
  return <nav aria-label={ariaLabel} {...props} className={clsx(className, 'flex gap-x-2')} />
}

export function PaginationPrevious({
  href = null,
  className,
  onClick,
  children = 'Previous',
}: React.PropsWithChildren<{
  href?: string | null;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>) {
  return (
    <span className={clsx(className, 'grow basis-0')}>
      <Button
        {...(href === null ? { disabled: true } : { href })}
        plain
        aria-label="Previous page"
        onClick={onClick}
      >
        <ArrowLeftIcon />
        {children}
      </Button>
    </span>
  );
}


export function PaginationNext({
  href = null,
  className,
  onClick,
  children = 'Next',
}: React.PropsWithChildren<{
  href?: string | null;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>) {
  return (
    <span className={clsx(className, 'flex grow basis-0 justify-end')}>
      <Button
        {...(href === null ? { disabled: true } : { href })}
        plain
        aria-label="Next page"
        onClick={onClick}
      >
        {children}
        <ArrowRightIcon />
      </Button>
    </span>
  );
}


export function PaginationList({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={clsx(className, 'hidden items-baseline gap-x-2 sm:flex')} />
}

export function PaginationPage({
  href,
  className,
  current = false,
  onClick,
  children,
}: React.PropsWithChildren<{
  href: string;
  className?: string;
  current?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}>) {
  return (
    <Button
      href={href}
      plain
      aria-label={`Page ${children}`}
      aria-current={current ? 'page' : undefined}
      onClick={onClick}
      className={clsx(
        className,
        'min-w-[2.25rem] before:absolute before:-inset-px before:rounded-lg',
        current && 'before:bg-zinc-950/5'
      )}
    >
      <span className="-mx-0.5">{children}</span>
    </Button>
  );
}

export function PaginationGap({
  className,
  children = <>&hellip;</>,
  ...props
}: React.ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      aria-hidden="true"
      {...props}
      className={clsx(
        className,
        'w-[2.25rem] select-none text-center text-sm/6 font-semibold text-zinc-950'
      )}
    >
      {children}
    </span>
  )
}
