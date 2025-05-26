import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useResetPasswordMutation } from "../../redux/services/authSlice"; // Update this based on your actual API
import Spinner from "../../components/Spinner";
import Swal from "sweetalert2";

export default function RecoverPassword() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        newPassword: '',
        confirmPassword: '',
    });

    const location = useLocation();
    const { email, code } = location.state || {};

    const [visibility, setVisibility] = useState(false);
    const [visibility2, setVisibility2] = useState(false);
    const [resetPassword, { isLoading }] = useResetPasswordMutation();

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (formData.newPassword !== formData.confirmPassword) {
            Swal.fire({
                icon: "error",
                title: "Passwords do not match",
                text: "Please ensure new and confirm passwords are the same.",
            });
            return;
        }

        try {
            const response: any = await resetPassword({ password: formData.newPassword, email, code });
            console.log("The response", response);
            if (response?.data?.status) {
                Swal.fire({
                    icon: 'success',
                    title: "Password Changed",
                    text: response?.data?.message || "Your password has been updated.",
                });
                navigate('/');
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed',
                    text: response.error?.message || 'Something went wrong!',
                    confirmButtonColor: '#d33',
                });
            }
        } catch (error: any) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error?.message || "Something went wrong!",
                confirmButtonColor: '#d33',
            });
            console.error(error);
        }
    };

    return (
        <>
            <div className="text-center Bold-heading">Change Password</div>
            <div className="z-10 flex items-start justify-center mt-10 px-3">
                <div className="rounded-box-inner modalstyle max-w-xl w-full">
                    <div className="p-4 md:p-12 flex flex-col gap-8">



                        <div className="flex flex-col gap-3 relative">
                            <label className="block text-white font-bold">New Password</label>
                            <input
                                name="newPassword"
                                value={formData.newPassword}
                                onChange={handleChange}
                                type={!visibility ? "password" : "text"}
                                className="w-full p-3 md:px-4 md:py-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                placeholder="New Password"
                            />
                            <button
                                type="button"
                                onClick={() => setVisibility(!visibility)}
                                className="absolute right-3 top-17 transform -translate-y-1/2 text-white"
                            >
                                {visibility ? <Eye size={20} /> : <EyeOff size={20} />}
                            </button>
                        </div>

                        <div className="flex flex-col gap-3 relative ">
                            <label className="block text-white font-bold">Confirm New Password</label>
                            <input
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                type={!visibility2 ? "password" : "text"}
                                className="w-full p-3 md:px-4 md:py-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                placeholder="Confirm New Password"
                            />

                            <button
                                type="button"
                                onClick={() => setVisibility2(!visibility2)}
                                className="absolute right-3 top-17 transform -translate-y-1/2 text-white"
                            >
                                {visibility2 ? <Eye size={20} /> : <EyeOff size={20} />}
                            </button>
                        </div>

                        <span onClick={handleSubmit} className="btnTheme text-center text-xl font-extrabold">
                            {isLoading ? (
                                <div className="flex justify-center items-center gap-2">
                                    <span>Updating...</span> <Spinner />
                                </div>
                            ) : (
                                "CHANGE PASSWORD"
                            )}
                        </span>

                        <span
                            onClick={() => navigate("/home")}
                            className="text-center text-sm text-[#0ECFED] underline cursor-pointer"
                        >
                            Back to sign in
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
