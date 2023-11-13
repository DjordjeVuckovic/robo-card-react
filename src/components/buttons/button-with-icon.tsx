import {ButtonWithIconProps} from "./button-props.ts";
import './buttons.scss'
export const ButtonWithIcon = ({ color,bgColor,width,  icon: Icon, children, onClick,type = 'button' } : ButtonWithIconProps) => {
    return (
        <button
            className={'button-base-icon'}
            style={{ backgroundColor: bgColor, color: color, width: width}}
            onClick={onClick}
            type={type}
        >
            {Icon && <Icon color={color}/>}
            {children}
        </button>
    );
};