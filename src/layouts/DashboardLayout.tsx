import { DashboardShowcase, Sidenav } from "../components"

export const DashboardLayout = () => {
    return (
        <div className="bg-stone-100 absolute top-0 bottom-0 w-full p-4">
            <Sidenav />
            <DashboardShowcase />
        </div>
    )
}