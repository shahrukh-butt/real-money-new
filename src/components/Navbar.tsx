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
            <div className="flex w-screen justify-between items-center px-20 py-6" >
                <img src="/images/LOGO.png" alt="logo" />
                <div>
                    <ul className="flex justify-between uppercase gap-10 cursor-pointer">
                        <li>
                            <NavLink
                                to="/"
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
                    <ul className="flex justify-between items-center  gap-10 cursor-pointer">
                        <div className="relative">
                            <img
                                onClick={() => navigate('/wallet')}
                                className="mb-7 relative z-50" src="/images/wallet.png" alt="wallet" />
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
                            className="rounded-full w-14 h-14"
                            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" alt="user" />
                        <div className="flex justify-center items-center gap-4 mt-4">
                            <p>username</p>


                            <div className="relative inline-block text-left">
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



                        </div>

                    </ul>
                </div >


            </div >

            <div className="absolute top-[50%] right-8 z-50 cursor-pointer">
                <img src="/images/chat-icon.png" alt="chat-icon" />
            </div>
        </>
    )
}
