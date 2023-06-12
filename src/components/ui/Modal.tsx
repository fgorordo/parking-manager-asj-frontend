import { ReactNode } from "react"
import { useUi } from "../../hooks/useUi"

interface Props {
    children: ReactNode
}


export const Modal = ({children}:Props) => {
    const { isModalOpen } = useUi()
    const appearingStyle = isModalOpen ? "scale-100" : "scale-0"
    return (
        <div className={`w-screen h-screen bg-transparent fixed flex justify-center items-center top-0 left-0 backdrop-blur-[5px] transition-all duration-200 ${appearingStyle}`}>
            <div className="bg-white drop-shadow-xl shadow-stone-800 p-10 rounded-lg border border-stone-300 max-w-[600px]">
                <div className="mb-10">
                    <h1 className="text-3xl font-semibold text-stone-600">Alta nuevo cliente</h1>
                    <p className="text-stone-400 text-sm mt-4">Por favor asegurese que los campos ingresados son correctos de los contrario algunas funciones automaticas podrian no funcionar.</p>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}
