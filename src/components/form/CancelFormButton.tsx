interface Props {
  onClick: (e?:any) => void;
  type: "button" | "submit" | "reset" | undefined;
}

export const CancelFormButton = ({onClick, type}: Props) => {
  return (
    <button type={type} onClick={onClick} className="border border-red-600 text-red-500 px-4 py-2 rounded-md text-xl hover:bg-red-600 hover:text-white w-full">Cancelar</button>

  )
}
