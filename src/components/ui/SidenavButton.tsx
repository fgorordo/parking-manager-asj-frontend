import { ReactNode } from "react";
import { useUi } from "../../hooks/useUi"
import { NavLink } from "react-router-dom";

interface Props {
    text: string;
    icon?: ReactNode;
    url: string;
}

export const SidenavButton = ({ text, icon, url, ...rest }: Props) => {

    const { isMenuOpen } = useUi();
    const textDisplay = isMenuOpen ? "inline opacity-1" : "hidden opacity-0";

    return (
        <NavLink to={url}>
            <button className={`active:bg-stone-700 w-full items-center flex py-2 px-2 rounded-md hover:bg-stone-600 transition-all duration-100 gap-4 my-2 hover:shadow-md`} {...rest} >
                <div>
                    {icon}
                </div>
                <span className={`text-white text-md truncate ${textDisplay} duration-100`}>{text}</span>
            </button>
        </NavLink>
    )
}
