import { NavLink, useNavigate } from "react-router";

export default function SideSheet({ setIsOpen, isOpen }: any) {

    const navigate = useNavigate()



    return (
        <div
            className={`fixed top-0 right-0 h-full w-64 bg-black box z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                } shadow-lg`}
        >
            <div className="flex items-start justify-between p-4 ">
                <img
                    className="w-16 h-16 rounded-full mb-10 roundedBox"
                    src={"/images/CARD2.png"}
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

                <div onClick={() => {
                    localStorage.removeItem("user")
                    localStorage.removeItem("token")
                    setIsOpen(false)
                    navigate("/")
                }} className="absolute bottom-4 ms-3 "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" className="feather feather-log-out text-red-500">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                </div>
            </div>



        </div>
    )
}
