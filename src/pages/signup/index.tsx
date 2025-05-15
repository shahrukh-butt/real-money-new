import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Signup() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',

    });

    const [visibility, setVisibility] = useState(true)
    const [confirmPassVisibility, setConfirmPassVisibility] = useState(true)

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    return (
        <>
            <div className="text-center Bold-heading">Signup</div>
            <div className="z-10 flex items-start justify-center mt-10 px-3 ">




                <div className="rounded-box-inner modalstyle max-w-6xl w-full  ">

                    <div className="p-4 md:p-12 flex flex-col gap-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                            
                            <div className="flex flex-col gap-3">
                                <label className="block text-white mb-1 ms-3 md:ms-4 font-bold">First Name</label>
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full p-3 md:p-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                    placeholder="First Name"
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="block text-white mb-1 ms-3 md:ms-4 font-bold">Last Name</label>
                                <input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    type="text"
                                    className="w-full p-3 md:p-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                    placeholder="Last Name"
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="block text-white mb-1 ms-3 md:ms-4 font-bold">Email</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className="w-full p-3 md:p-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                    placeholder="Email"
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label className="block text-white mb-1 ms-3 md:ms-4 font-bold">Phone Number</label>
                                <input
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    type="tel"
                                    className="w-full p-3 md:p-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                    placeholder="Phone Number"
                                />
                            </div>

                            <div className="flex flex-col gap-3 relative">
                                <label className="block text-white mb-1 ms-3 md:ms-4 font-bold">Password</label>
                                <input
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    type={!visibility ? "password" : "text"}
                                    className="w-full p-3 md:p-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                    placeholder="Password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setVisibility(!visibility)}
                                    className="absolute right-3 top-17 transform -translate-y-1/2 text-white"
                                >
                                    {visibility ? <Eye size={20} /> : <EyeOff size={20} />}
                                </button>
                            </div>

                            <div className="flex flex-col gap-3 relative">
                                <label className="block text-white mb-1 ms-3 md:ms-4 font-bold">Confirm Password</label>
                                <input
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    type={!confirmPassVisibility ? "password" : "text"}
                                    className="w-full p-3 md:p-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                    placeholder="Confirm Password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setConfirmPassVisibility(!confirmPassVisibility)}
                                    className="absolute right-3 top-17 transform -translate-y-1/2 text-white"
                                >
                                    {confirmPassVisibility ? <Eye size={20} /> : <EyeOff size={20} />}
                                </button>
                            </div>
                        </div>

           

                       <div className="text-center">
                       <span className="btnTheme  text-xl font-extrabold mt-4 w-full md:w-72 ">Continue</span>
                       </div>

                        <span className="text-center font-bold">
                            Already have an account?{" "}
                            <span onClick={() => navigate("/")} className="text-red-500 cursor-pointer">
                                Sign In
                            </span>
                        </span>
                    </div>



                </div>





            </div>

        </>
    )
}
