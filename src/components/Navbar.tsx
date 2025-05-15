import { useState } from "react";
import { NavLink, useNavigate } from "react-router"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        {
            id: 1,
            name: 'My Profile',
            link: "my-profile"
        },
    ];
    const navigate = useNavigate()
    return (
        <>
            <div className="flex w-screen justify-between items-center px-3 md:px-14 py-6" >
                <img src="/images/LOGO.png" className={"w-24 md:w-32"} alt="logo" />

                <div className="flex justify-between items-center gap-14">


                    <div className="hidden md:block">
                        <ul className="flex justify-between uppercase gap-5 cursor-pointer text-sm md:text-sm">
                            <li>
                                <NavLink
                                    to="/home"
                                    className={({ isActive }) =>
                                        isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/shop"
                                    className={({ isActive }) =>
                                        isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
                                    }
                                >
                                    Shop
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/giveaway"
                                    className={({ isActive }) =>
                                        isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
                                    }
                                >
                                    Giveaways
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/auction"
                                    className={({ isActive }) =>
                                        isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
                                    }
                                >
                                    Auctions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/community"
                                    className={({ isActive }) =>
                                        isActive ? "text-yellow-400 border-b-2 border-yellow-400" : ""
                                    }
                                >
                                    Community
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div >
                        <ul className="flex justify-between items-center  gap-3 md:gap-5 cursor-pointer">
                            <div className="relative">
                                <img
                                    onClick={() => navigate('/wallet')}
                                    className="mb-7  relative z-50" src="/images/wallet.png" alt="wallet" />
                                <img
                                    onClick={() => navigate('/wallet')}
                                    className="w-5 h-5 absolute top-7 left-0 z-10 animate-coin-toss"
                                    src="/images/red-coin.png"
                                    alt="red coin"
                                />
                                <img

                                    className="w-5 h-5 absolute top-7 right-1 z-10 animate-coin-toss"
                                    style={{ animationDelay: '1s' }}
                                    src="/images/gold-coin.png"
                                    alt="gold coin"
                                />
                            </div>




                            <img
                                src="/images/tip-jar.png" alt="tip-jar" />
                            <img
                                onClick={() => navigate('/my-cart')}
                                src="/images/cart.png" alt="cart" />




                            <img
                                className="rounded-full w-12 h-12 hidden md:block"
                                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt="user" />
                            <div className="flex justify-center items-center gap-4 mt-4">
                                <p className="hidden md:block">username</p>


                                <div className="relative hidden md:inline-block text-left">
                                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                                        <img
                                            src="/images/chevron.png"
                                            alt="Chevron"
                                            className={`w-3 h-3 mb-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                        />
                                    </div>

                                    {isOpen && (
                                        <ul className="absolute right-[-30px] top-7 mt-2 w-40 bg-black text-white rounded-md shadow-lg z-10">
                                            {options.map((option) => (
                                                <li
                                                    key={option.id}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        navigate(`/${option.link}`);
                                                    }}
                                                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                                                >
                                                    {option.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                <div className="md:hidden mb-3">
                                    <svg
                                        className="w-7 h-7 text-white cursor-pointer"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <line x1="3" y1="18" x2="21" y2="18" />
                                    </svg>

                                </div>

                            </div>

                        </ul>
                    </div >
                </div>


            </div >

            <div className="absolute top-[50%] right-8 z-50 cursor-pointer">
                <img src="/images/chat-icon.png" alt="chat-icon" />
            </div>
        </>
    )
}
