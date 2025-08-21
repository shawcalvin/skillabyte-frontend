import clsx from 'clsx'

import { Badge, BadgeButton } from "./badge";

const colors = {
    red: '',
    orange: '',
    amber: '',
    yellow: '',
    lime: '',
    green: '',
    emerald: '',
    teal: '',
    cyan: '',
    sky: '',
    blue: '',
    indigo: '',
    violet: '',
    purple: '',
    fuchsia: '',
    pink: '',
    rose: '',
    zinc: '',
}

type LabelProps = {
    href?: string;
    color?: keyof typeof colors;
    className?: string;
    children: React.ReactNode;
}

export function TagLabel({ href, color = 'zinc', className, children }: LabelProps) {
    if (href) {
        return (
            <BadgeButton color={color} href={href} className={clsx(className, 'mr-1 mb-1')}>
                {children}
            </BadgeButton>
        )
    }

    return (
        <Badge color={color} className={clsx(className, 'mr-1 mb-1')}>
            {children}
        </Badge>
    )
}