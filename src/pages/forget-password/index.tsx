import { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner";
import { useForgetPasswordMutation } from "../../redux/services/authSlice"; // Make sure this exists

export default function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [forgotPassword, { isLoading }] = useForgetPasswordMutation();

    const handleSubmit = async () => {
        try {
            const response: any = await forgotPassword({ email });
            if (response?.data?.status) {
                Swal.fire({
                    icon: "success",
                    title: "Email Sent",
                    text: response?.data?.message || "Check your inbox for a reset link.",
                });
                navigate("/verify-recovery-code", { state: { email } });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Failed",
                    text: response?.error?.data?.message || "Something went wrong!",
                });
            }
        } catch (error: any) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: error?.message || "Unexpected error occurred.",
            });
            console.error("Forgot password error:", error);
        }
    };

    return (
        <>
            <div className="text-center Bold-heading">Forgot Password</div>
            <div className="z-10 flex items-start justify-center mt-10 px-3">
                <div className="rounded-box-inner modalstyle max-w-2xl w-full">
                    <div className="p-4 md:p-12 flex flex-col gap-8 items-center">

                        <div className="flex flex-col gap-3 w-full md:w-3/4">
                            <label className="block text-white font-bold text-lg mb-1">Email Address</label>
                            <input
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="w-full p-3 md:p-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div onClick={handleSubmit} className="text-center w-full">
                            <button className="btnTheme text-xl font-extrabold w-full md:w-72">
                                {isLoading ? (
                                    <div className="flex justify-center items-center gap-2">
                                        <span>Sending...</span>
                                        <Spinner />
                                    </div>
                                ) : (
                                    "Send OTP"
                                )}
                            </button>
                        </div>

                        <span className="text-center font-bold">
                            Remember your password?{" "}
                            <span onClick={() => navigate("/")} className="text-red-500 cursor-pointer">
                                Sign In
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
