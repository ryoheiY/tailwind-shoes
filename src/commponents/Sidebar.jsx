import { Children } from "react";

function Sidebar({ children, isOpen, onClickClose }) {
    return(
    <div>
        <div
            className=
            {` dark:bg-night-default duration-300 transition transform overflow-y-auto fixed h-full 
        right-0 w-full bg-white top-0 z-50 
         md:w-[50%] lg:w-[35%] shadow-lg
        ${isOpen ? "translate-x-0" : " translate-x-full"}`}>
            <button onClick={onClickClose} className=" 
            absolute right-4 top-4 p-2 text-black font-bold dark:text-white">
                X
            </button>
            {children}

        </div>
        {isOpen && <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50 "></div>}
    </div>
    )
}

export default Sidebar;