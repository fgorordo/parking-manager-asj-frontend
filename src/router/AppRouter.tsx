import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout } from "../layouts";
import { BillingPage, CustomersPage, DashboardPage, FeedbackPage, HelpPage, ParkingPage, SettingsPage, SupportPage } from "../pages";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <DashboardLayout />,
        children: [
            {
                path:"/dashboard",
                element:<DashboardPage />
            },
            {
                path:"/billing",
                element:<BillingPage />
            },
            {
                path:"/customers",
                element:<CustomersPage />
            },
            {
                path:"/feedback",
                element:<FeedbackPage />
            },
            {
                path:"/help",
                element:<HelpPage />
            },
            {
                path:"/parking",
                element:<ParkingPage />
            },
            {
                path:"/settings",
                element:<SettingsPage />
            },
            {
                path:"/support",
                element:<SupportPage />
            }
        ]
    }
])
