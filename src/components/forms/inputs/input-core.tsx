import {InputProps} from "../form-props.ts";
import {FieldError} from "../../errors/FieldError.tsx";

export const InputCore = (
    {label,placeholder,type = 'text',register,error} : InputProps) => {
    return (
        <div className={'flex-col-start g-07'} style={{width: '90%'}}>
            <label className={'primary-text'}>{label}</label>
            <input
                style={{width: '100%'}}
                className={'input-base'}
                {...register}
                placeholder={placeholder}
                type = {type}
            />
            {error && (
                <FieldError error={error}/>
            )}
        </div>
    );
};
