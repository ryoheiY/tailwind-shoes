import { CgShoppingCart } from "react-icons/cg";
import NikeLogo from "../assets/nike-logo.svg?react"
import { RxHamburgerMenu } from "react-icons/rx"
import { useState } from "react";
const ROUTES = [
    "Home",
    "About",
    "Services",
    "Pricing",
    "Contact"
];

function Nav({onClickShoppingBtn}) {
    const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
    return (
        <nav className=" h-full relative z-10 flex flex-wrap items-center justify-between">
            <a href="#"> <NikeLogo className="h-20 w-20 dark:fill-white" /></a>
            <button 
            onClick={() => {setIsMobileMenuShown(!isMobileMenuShown)}}
            className="dark:text-gray-400 dark:hover:bg-gray-700 lg:hidden hover:bg-gray-100 rounded-lg focus:ring-2 focus:ring-gray-200 p-2">
                <RxHamburgerMenu size={25} />
            </button>
            <div className={`${ !isMobileMenuShown && "hidden"} lg:block w-full lg:w-auto `}>
                <ul className="lg:space-x-8 p-4 lg:bg-transparent flex flex-col lg:flex-row bg-gray-50 text-lg  rounded-lg">
                    {ROUTES.map((route, i) => {
                        return <li
                            className={` rounded cursor-pointer py-2 px-3 ${
                                i === 0 
                                ? "bg-blue-500 text-white lg:text-blue-500 lg:bg-transparent" 
                                : " hover:bg-gray-400 dark:hover:bg-blue-200"
                                } lg:dark:text-white`} key={route}>{route}</li>
                    })}
                </ul>
            </div>
            <div 
            onClick={onClickShoppingBtn}
            className="btn-press-anim fixed left-4 bottom-4 lg:static">
                <div className=" cursor-pointer  flex-center h-12 w-12 rounded-full bg-white shadow-md">
                    <CgShoppingCart />
                </div>
            </div>

        </nav>)

}

export default Nav;