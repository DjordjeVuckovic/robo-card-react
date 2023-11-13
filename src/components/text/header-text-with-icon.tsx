import {HeaderProps} from "./headerProps.ts";

export const HeaderTextWithIcon = ({children,icon: Icon, iconColor} : HeaderProps) => {
    return (
        <div className={'flex-center-base mg-1'}>
            <h1 className={'primary-text text-center'}>
            {children}
            </h1>
            {Icon && <Icon color={iconColor} size={30}/>}
        </div>
    );
};
