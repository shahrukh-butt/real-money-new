import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',

    });

    const [visibility, setVisibility] = useState(true)

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    return (
        <>
            <div className="text-center Bold-heading">Login</div>
            <div className="z-10 flex items-start justify-center mt-10 px-3 ">




                <div className="rounded-box-inner modalstyle max-w-xl w-full  ">
                    
                    <div className="p-4 md:p-12 flex flex-col gap-8">
                        <div className="flex flex-col gap-3">
                            <label className="block text-white mb-1 ms-3 md:ms-4 font-bold">
                                Email
                            </label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                className="w-full p-3 md:px-4 md:py-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                placeholder="Email"
                            />
                        </div>

                        <div className="flex flex-col gap-3 relative">
                            <label className="block text-white mb-1 ms-3 md:ms-4 font-bold">
                                Password
                            </label>
                            <input
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                type={!visibility ? "password" : "text"}
                                className="w-full p-3 md:px-4 md:py-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                placeholder="Password"
                            />
                            <button
                                type="button"
                                onClick={() => setVisibility(!visibility)}
                                className="absolute right-3 top-17 transform -translate-y-1/2 text-whitebg-red-500"
                            >
                                {visibility ? <Eye size={20} /> : <EyeOff size={20} />}
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                            <div className="flex items-center gap-2 mt-4">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="w-4 h-4 accent-red-600 cursor-pointer"
                                // checked={accepted}
                                // onChange={(e) => setAccepted(e.target.checked)}
                                />
                                <label htmlFor="terms" className="text-sm cursor-pointer">
                                    Remember Me
                                </label>
                            </div>

                            <span className="text-sm font-extralight mt-4 text-[#0ECFED] underline">Forgot Password? </span>
                        </div>
                        <span 
                        onClick={() => navigate('/home')}
                        className="btnTheme text-center text-xl font-extrabold ">Login </span>
                        <span className=" text-center font-bold ">Don't have an account yet? <span onClick={() => navigate('/signup')} className="text-red-500">Sign Up</span> </span>



                    </div>


                </div>





            </div>

        </>
    )
}
