import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../redux/services/authSlice";
import Spinner from "../../components/Spinner";
import Swal from "sweetalert2";

export default function Login() {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',

    });

    const [visibility, setVisibility] = useState(false)
    const [login, { isLoading }] = useLoginMutation()


    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            navigate('/home')
        }
    }, [])

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };



    const handleSubmit = async () => {
        try {
            const response: any = await login(formData)
            if (response?.data?.status) {
                Swal.fire({
                    icon: 'success',
                    title: "Thnak You!",
                    text: response?.data?.message || "Welcome aboard!",
                });

                console.log(response?.data?.data?.user)
                localStorage.setItem('user', JSON.stringify(response?.data?.data?.user))
                localStorage.setItem('token', response?.data?.data?.token)
                navigate('/home')

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response.error.data?.message || 'Something went wrong!',
                    confirmButtonColor: '#d33',
                });
            }

        } catch (error: any) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.error.error || error?.error || error?.message || 'Something went wrong!',
                confirmButtonColor: '#d33',
            });
            console.log(error || error?.error || "something went wrong")
        }

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

                            <span 
                            onClick={() => navigate('/forget-password')}
                            className="text-sm font-extralight mt-4 text-[#0ECFED] underline">Forgot Password? </span>
                        </div>
                        <span
                            onClick={() => handleSubmit()}
                            className="btnTheme text-center text-xl font-extrabold ">{isLoading ? <div className="flex justify-center items-center gap-2"><span>Loading....</span> <Spinner /></div> : "LOGIN"} </span>
                        <span className=" text-center font-bold ">Don't have an account yet? <span onClick={() => navigate('/signup')} className="text-red-500">SIGN Up</span> </span>



                    </div>


                </div>





            </div>

        </>
    )
}
