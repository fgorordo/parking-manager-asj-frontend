import { Appbar } from ".";
import { useUi } from "../../hooks/useUi";
import { Outlet } from "react-router-dom";


export const DashboardShowcase = ({ ...rest }) => {

    const { isMenuOpen, handleToggleDesktopMenu } = useUi();
    const showcaseWidth = isMenuOpen ? "lg:ml-[292px]" : "lg:ml-[96px]"
    return (
        <div className={`h-full rounded-xl transition-all duration-200 ${showcaseWidth} overflow-auto`} {...rest}>
            <Appbar />
            <div className="bg-white p-4 rounded-lg">
                <Outlet />
            </div>
        </div>
    )
}
