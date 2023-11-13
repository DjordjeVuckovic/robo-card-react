import {ElementType, ReactNode} from "react";

export interface ButtonWithIconProps {
    color: string,
    bgColor: string,
    icon: ElementType,
    children: ReactNode,
    width: string;
    onClick?: () => void;
    type?: "button" | "reset" | "submit";
}