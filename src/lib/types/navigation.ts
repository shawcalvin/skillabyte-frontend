import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export type NavItem = {
    label: string;
    url: string;
}

export type IconNavItem = {
    icon: React.ReactElement;
    url: string;
}