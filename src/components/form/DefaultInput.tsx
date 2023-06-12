import { ChangeEvent, ChangeEventHandler, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

interface Props {
    htmlFor: string;
    type: HTMLInputTypeAttribute
    id: string;
    labelText: string;
    inputPlaceholder?: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>
    value: string | number | readonly string[] | undefined;

    //! REFACTOR THIS TYPES
    yupErrors: any;
    touchedInput: any;
}

export const DefaultInput = ({ htmlFor, type, id, labelText, inputPlaceholder, name, onChange, value, yupErrors, touchedInput,...rest}:Props) => {
    return (
        <div className="mb-3">
            <label htmlFor={htmlFor} className="block mb-2 text-lg font-medium text-stone-600">{labelText}</label>
            <input 
                name={name} 
                {...rest} 
                onChange={onChange} 
                type={type} 
                id={id} 
                className="border border-stone-600 rounded-md px-4 py-2 w-full focus:border-stone-800" 
                placeholder={inputPlaceholder}
                value={value}
                />
            { yupErrors && touchedInput ? (<span className="text-red-500">{yupErrors}</span>) : ""}
        </div>
    )
}
