import { useState } from "react";
import { navbarData } from "../navbarData.jsx";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    const showNav = () => {
        setToggle(!toggle);
    };

    return (
        <nav className="w-full items-center flex p-[30px]">
            <div className="flex justify-between items-center w-full flex-wrap z-1000 md:flex-nowrap">
                <h1 className="text-2xl font-bold cursor-pointer">Orng Lab</h1>

                <button
                    className="flex justify-end md:hidden rounded"
                    onClick={showNav}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#000000">
                        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
                    </svg>
                </button>

                <ul
                    className={`${
                        toggle
                            ? "absolute transition-all duration-500 top-[65px] left-0 w-full z-[1000] bg-white flex flex-col justify-center items-center first:mt-2 "
                            : "top-[-500px] absolute transition-all duration-500 w-full left-0 z-1000"
                    } md:flex-row md:w-auto md:space-x-10 md:flex md:static md:bg-transparent md:flex-nowrap`}
                >
                    {navbarData.map((link, index) => (
                        <li key={index} className={link.cname}>
                            <Link
                                className="header-links"
                                to={link.href}
                                onClick={showNav}
                            >
                                <button
                                    className="cursor-pointer  rounded-xl text-black font-medium group"
                                >
                                    <div className="relative overflow-hidden">
                                        <p
                                            className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                                        >
                                            {link.title}
                                        </p>
                                        <p
                                            className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
                                        >
                                            {link.title}
                                        </p>
                                    </div>
                                </button>
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link
                    to={'/contact'}
                    className={`${
                        toggle ? "hidden" : "hidden"
                    } underline text-black hover:text-gray-500 mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium px-1 p-2 font-medium rounded-lg mt-4 w-24`}
                >

                    Contact Us
                </Link>
            </div>
        </nav>
    );
}
