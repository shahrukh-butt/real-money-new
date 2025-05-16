import { NavLink } from "react-router";

export default function SideSheet({ setIsOpen, isOpen }: any) {






    return (
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-black box z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                } shadow-lg`}
        >
            <div className="flex items-start justify-between p-4 ">
                <img
                    className="w-16 h-16 rounded-full mb-10 roundedBox"
                    src={ "/images/CARD2.png"}
                    alt="profile-image"
                />
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-red-600">
                    ✕
                </button>
            </div>

            <div>
                <ul className="flex flex-col justify-center items-center uppercase gap-6 xl:gap-7 cursor-pointer text-sm md:text-base font-semibold tracking-widest border-b pb-5">
                    {[
                        { path: "/my-profile", label: "My Proflle" },
                    ].map(({ path, label }) => (
                        <li key={path} className="relative group">
                            <NavLink
                                onClick={() => setIsOpen(false)}
                                to={path}
                                className={({ isActive }) =>
                                    `block pb-1 transition-transform duration-300 ${isActive
                                        ? "bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 font-extrabold"
                                        : "text-white hover:text-yellow-400"
                                    } transform hover:scale-110`
                                }
                            >
                                {label}
                                {/* Animated underline */}
                                <span
                                    className={`absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full ${window.location.pathname === path ? "w-full" : ""
                                        }`}
                                />
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <ul className="flex flex-col justify-center items-center uppercase gap-6 xl:gap-7 cursor-pointer text-sm md:text-base font-semibold tracking-widest">
                    {[
                        { path: "/home", label: "Home" },
                        { path: "/shop", label: "Shop" },
                        { path: "/giveaway", label: "Giveaways" },
                        { path: "/auction", label: "Auctions" },
                        { path: "/community", label: "Community" },
                    ].map(({ path, label }) => (
                        <li key={path} className="relative group">
                            <NavLink
                                onClick={() => setIsOpen(false)}
                                to={path}
                                className={({ isActive }) =>
                                    `block pb-1 transition-transform duration-300 ${isActive
                                        ? "bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 font-extrabold"
                                        : "text-white hover:text-yellow-400"
                                    } transform hover:scale-110`
                                }
                            >
                                {label}
                                {/* Animated underline */}
                                <span
                                    className={`absolute left-0 bottom-0 h-[2px] w-0 bg-yellow-400 transition-all duration-300 group-hover:w-full ${window.location.pathname === path ? "w-full" : ""
                                        }`}
                                />
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>



        </div>
    )
}
