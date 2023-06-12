import { FormEvent, FormEventHandler } from "react";

interface Props {
  buttonText: string;
  onClick?: () => void;
  type: "button" | "submit" | "reset" | undefined;
  onSubmit?: () => void;
}

export const ConfirmFormButton = ({buttonText, onClick, type, onSubmit, ...rest}:Props) => {
  return (
    <button {...rest} onSubmit={onSubmit} type={type} className="bg-stone-800 text-white px-4 py-2 rounded-md text-xl hover:bg-stone-700 w-full" onClick={onClick} >{buttonText}</button>
  )
}
