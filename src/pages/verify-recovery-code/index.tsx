import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import Spinner from "../../components/Spinner";
import { useVerifyRecoverCodeMutation } from "../../redux/services/authSlice";

export default function VerifyRecoveryCode() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const location = useLocation();
    const { email } = location.state || {};


    const [verifyRecoverCode, { isLoading }] = useVerifyRecoverCodeMutation();


    const handleSubmit = async () => {
        try {
            const response: any = await verifyRecoverCode({ code: otp, email });
            if (response?.data?.status) {
                Swal.fire({
                    icon: "success",
                    title: "OTP Verified",
                    text: response.data.message || "Welcome aboard!",
                });
                navigate("/recover-password" , { state: { email , code : otp }});
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Invalid OTP",
                    text: response.error?.data?.message || "Please try again.",
                });
            }
        } catch (error: any) {
            Swal.fire({
                icon: "error",
                title: "Verification failed",
                text: error?.message || "Something went wrong!",
            });
        }
    };

    const handleResend = async () => {
        if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email not found',
                confirmButtonColor: '#d33',
            })
            return
        }

        const response: any = await verifyRecoverCode(email)
        try {
            if (response?.data?.status) {
                Swal.fire({
                    icon: "success",
                    title: "OTP Resent",
                    text: response.data.message || "Welcome aboard!",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Resend Failed",
                    text: response.error?.data?.message || "Please try again.",
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
    }

    return (
        <>
            <div className="text-center Bold-heading">Verify Recovery Code</div>
            <div className="z-10 flex items-start justify-center mt-10 px-3">
                <div className="rounded-box-inner modalstyle max-w-6xl w-full">
                    <div className="p-4 md:p-12 flex flex-col gap-8 items-center">

                        <label className="block text-white font-bold mb-2 text-lg">Enter the OTP sent to your email</label>
                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            maxLength={6}
                            className="text-center text-xl tracking-widest w-48 p-3 bg-[#31313161] text-white outline-none rounded-4xl"
                            placeholder="------"
                        />

                        <button
                            onClick={handleSubmit}
                            className="btnTheme text-xl font-extrabold mt-4 w-full md:w-72 text-center"
                        >
                            {isLoading ? (
                                <div className="flex justify-center items-center gap-2">
                                    <span>Verifying...</span>
                                    <Spinner />
                                </div>
                            ) : (
                                "VERIFY OTP"
                            )}
                        </button>

                        <span className="text-center font-bold">
                            Didn’t receive code?{" "}
                            <span className="text-red-500 cursor-pointer" onClick={() => handleResend()}>
                                {isLoading ? "Resending..." : "Resend"}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
