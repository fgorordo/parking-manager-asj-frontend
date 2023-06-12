import { ReactNode } from "react";

interface Props {
    onClick: () => void;
    icon: ReactNode;
}

export const IconButton = ({ onClick, icon, ...rest }: Props) => {
    return (
        <button className="bg-stone-600 rounded-full p-2 shadow-sm shadow-stone-600 hover:bg-stone-700 transition-all duration-200" onClick={onClick} {...rest} >{icon}</button>
    )
}
