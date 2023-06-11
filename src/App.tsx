import { useState } from "react"

export const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const test = `ml-[${isMenuOpen ? "316px": "0"}]`

    return (
        <>
            <div className="bg-red-500 absolute top-0 bottom-0 w-full p-4">
                <div className={`bg-blue-500 h-full p-4 lg:ml-[${isMenuOpen ? "316px" : "0"}] rounded-xl transition-all duration-200`}>
                    Main Screen
                    <button className="bg-red-300" onClick={() => setIsMenuOpen(true)}>Open</button>
                </div>
                <div className={`bg-purple-500 w-[300px] fixed top-0 bottom-0 p-4 my-4 rounded-xl ml-4 ${isMenuOpen ? "left-0" : "-left-96"} transition-all duration-200 `}>
                    <button className="bg-yellow-500" onClick={() => setIsMenuOpen(false)}>X</button>
                </div>
            </div>
        </>
    )
}