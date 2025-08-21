import Image from "next/image"
import clsx from 'clsx'

type TextLogoProps = {
    color: 'black' | 'blue' | 'orange'
    className?: string;
}

export function TextLogo({ color, className }: TextLogoProps) {
    const colors = {
        'black': '/images/logos/LogoTextBlack.svg',
        'blue': '/images/logos/LogoTextBlue.svg',
        'orange': '/images/logos/LogoTextOrange.svg'
    }
    const src = colors[color];

    return (
        <Image
            src={src}
            alt="Skillabyte Text Logo"
            height={0}
            width={0}
            className={className}
        />
    );
}

type StackedLogoProps = {
    className: string;
}

export function StackedLogo({ className }: StackedLogoProps) {
    return (
        <Image
            src='/images/logos/LogoStacked.svg'
            alt="Skillabyte Text Logo"
            height={0}
            width={0}
            className={className}
        />
    )
}

type IconLogoProps = {
    className: string;
}

export function IconLogo({ className }: IconLogoProps) {
    return (
        <Image
            src='/images/logos/LogoIcon.svg'
            alt="Skillabyte Text Logo"
            height={0}
            width={0}
            className={className}
        />
    )
}