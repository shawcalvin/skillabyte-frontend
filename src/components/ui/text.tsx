import React from 'react'

import clsx from 'clsx'
import { Link } from './link'

export function Text({ className, ...props }: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      data-slot="text"
      {...props}
      className={clsx(className, 'text-lg/6 text-zinc-600 sm:text-base/6')}
    />
  )
}

export function TextLink({ className, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      target='_blank'
      className={clsx(
        className,
        'text-primary-blue-600 underline decoration-primary-blue-600/50 data-[hover]:decoration-primary-blue-600'
      )}
    />
  )
}

export function Strong({ className, ...props }: React.ComponentPropsWithoutRef<'strong'>) {
  return <strong {...props} className={clsx(className, 'font-medium text-zinc-950')} />
}

export function Code({ className, ...props }: React.ComponentPropsWithoutRef<'code'>) {
  return (
    <code
      {...props}
      className={clsx(
        className,
        'rounded border border-zinc-950/15 bg-zinc-950/[2.4%] px-1 mx-0.5 font-medium text-primary-blue-500'
      )}
    />
  )
}

export function ListItem({ children }: { children: React.ReactNode }) {
  return <li className=''>{children}</li>;
}

export function OrderedList({ children }: { children: React.ReactNode }) {
  const filteredChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === ListItem) {
      return child;
    }
    console.warn('OrderedList can only contain ListItem components.');
    return null;
  });

  return (
    <ol className="list-decimal space-y-2 ml-6">
      {filteredChildren}
    </ol>
  );
}

export function UnorderedList({ children }: { children: React.ReactNode }) {
  const filteredChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type === ListItem) {
      return child;
    }
    console.warn('UnorderedList can only contain ListItem components.');
    return null;
  });

  return (
    <ul className="list-disc space-y-2 ml-6">
      {filteredChildren}
    </ul>
  );
}
