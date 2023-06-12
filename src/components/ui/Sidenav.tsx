import { HelpCircleIcon, HomeIcon, LayoutDashboardIcon, MailIcon, MessageCircleIcon, PanelLeftOpenIcon, ReceiptIcon, SettingsIcon, Users2Icon } from "lucide-react";
import { SidenavDivider } from "./SidenavDivider";
import { useUi } from "../../hooks/useUi";
import { SidenavButton } from "./SidenavButton";

//! REFACTOR
interface BuiltInProps {
  onClick: () => void;
  isMenuOpen: boolean;
}

const sideNavMainOptions = [
  {
    title: "Dashboard",
    icon: <LayoutDashboardIcon size={24} color="#fff"/>,
    url: "/dashboard"
  },
  {
    title: "Clientes",
    icon: <Users2Icon size={24} color="#fff"/>,
    url: "/customers"
  },
  {
    title: "Cocheras",
    icon: <HomeIcon size={24} color="#fff"/>,
    url: "/parking"
  },
  {
    title: "Facturación",
    icon: <ReceiptIcon size={24} color="#fff"/>,
    url: "/billing"
  },
  {
    title: "Configuraciones",
    icon: <SettingsIcon size={24} color="#fff"/>,
    url: "/settings"
  }
]

const sideNavSupportOptions = [
  {
    title: "Ayuda",
    icon: <HelpCircleIcon size={24} color="#fff" />,
    url: "/help"
  },
  {
    title: "Soporte",
    icon: <MailIcon size={24} color="#fff"/>,
    url: "/support"
  },
  {
    title: "Comentarios",
    icon: <MessageCircleIcon size={24} color="#fff"/>,
    url: "/feedback"
  }
]


const BuiltInShrinkButton = ({ onClick, isMenuOpen, ...rest }: BuiltInProps) => {
  return (
    <div className="flex justify-end">
      <button onClick={onClick} {...rest} className={`w-full max-w-[48px] justify-center items-center flex py-2 rounded-md hover:bg-stone-600 transition-all duration-200`} >
        <PanelLeftOpenIcon size={24} color="#fff"  className={`${isMenuOpen ? "rotate-180" : ""} transition-all duration-200`}/>
      </button>
    </div>
  )
}

export const Sidenav = ({...rest }) => {

  const { isMenuOpen, handleToggleDesktopMenu} = useUi()

  const mobileMenuPosition = isMenuOpen ? "left-4" : "-left-96";
  const desktopMenuWidth = isMenuOpen ? "lg:left-4 lg:w-[275px]" : "lg:left-4 lg:w-[72px]";
  const sideNavStyles = "overflow-auto bg-gradient-to-b from-stone-800 to-stone-900 fixed top-0 bottom-0 p-4 my-4 rounded-xl w-[275px] transition-all duration-200";

  return (
    <div className={`${sideNavStyles} ${mobileMenuPosition} ${desktopMenuWidth}`} {...rest}>
      <BuiltInShrinkButton onClick={() => handleToggleDesktopMenu() } isMenuOpen={isMenuOpen} />
      <SidenavDivider />
      {
        sideNavMainOptions.map(option => (
          <SidenavButton url={option.url} text={option.title} icon={option.icon} key={option.url} />
        ))
      }
      <SidenavDivider />
      {
        sideNavSupportOptions.map(option => (
          <SidenavButton url={option.url} text={option.title} icon={option.icon} key={option.url} />
        ))
      }
    </div>
  )
}
