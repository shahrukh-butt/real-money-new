import { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import Spinner from '../../components/Spinner';
import { UPLOADS_URL } from '../../constants/api';
import { useGetUserQuery, useUpdateUserProfileMutation } from '../../redux/services/userSlice';

export default function MyProfile() {
    const inuutRef: any = useRef(null);
    const [editing, setEditing] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const { data, refetch } = useGetUserQuery({});
    const [updateProfile, { isLoading }] = useUpdateUserProfileMutation()

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const form = new FormData();
        form.append("firstName", formData.firstName);
        form.append("lastName", formData.lastName);
        form.append("phone", formData.phoneNumber || "");

        if (selectedFile) {
            form.append("image", selectedFile);
        }

        try {
            const response = await updateProfile(form).unwrap();
            if (response?.status) {
                localStorage.setItem('user', JSON.stringify(response?.data?.user))
                refetch()
                Swal.fire({
                    icon: 'success',
                    title: "Profile Updated",
                    text: response?.message || "Welcome aboard!",
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: response?.error?.data?.message || 'Something went wrong!',
                    confirmButtonColor: '#d33',
                });
            }
            console.log("Profile updated:", response);
            setEditing(false);
        } catch (error: any) {
            console.error("Failed to update profile:", error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error?.error?.data?.message || error?.message || 'Something went wrong!',
                confirmButtonColor: '#d33',
            });
            setEditing(false);

        }
    };

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
            const reader: any = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
                setSelectedFile(file);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleEditClick = () => {
        if (data?.data?.user) {
            setFormData({
                firstName: data.data.user.firstName || "",
                lastName: data.data.user.lastName || "",
                email: data.data.user.email || "",
                phoneNumber: data.data.user.phone || "",
            });
        }
        setEditing(true);
    };

    return (
        <div className="flex flex-col rounded-box-inner gap-3 py-12 px-6 md:px-16">
            <p className="text-2xl md:text-4xl font-extrabold">MY PROFILE</p>

            <div className="flex flex-col gap-3">
                <div className='relative'>
                    <img
                        className="w-24 h-24 rounded-full mb-10 roundedBox"
                        src={profileImage ? profileImage : data?.data?.user?.image ? UPLOADS_URL + data?.data?.user?.image : "/images/CARD2.png"}
                        alt="profile"
                    />
                    {editing && (
                        <div
                            onClick={() => inuutRef?.current?.click()}
                            className='cardBg w-8 h-8 rounded-full flex justify-center items-center absolute top-18 left-18'
                        >
                            <img className="w-5 h-5 btntheme" src="/images/camera.png" alt="camera" />
                            <input ref={inuutRef} type="file" className='hidden' onChange={handleImageChange} />
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {editing ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {["firstName", "lastName", "email", "phoneNumber"].map((field) => (
                                    <div key={field} className="flex flex-col gap-3">
                                        <label className="block text-white mb-1 ms-4 font-bold">
                                            {field === "firstName"
                                                ? "First Name"
                                                : field === "lastName"
                                                    ? "Last Name"
                                                    : field === "email"
                                                        ? "Email"
                                                        : "Phone Number"}
                                        </label>
                                        <input
                                            name={field}
                                            value={formData[field as keyof typeof formData]}
                                            onChange={handleChange}
                                            type={
                                                field === "email"
                                                    ? "email"
                                                    : field === "phoneNumber"
                                                        ? "tel"
                                                        : "text"
                                            }
                                            className={`w-full px-4 py-4 bg-[#31313161] text-white outline-none rounded-4xl ${field === "email" ? "opacity-60 cursor-not-allowed" : ""
                                                }`}
                                            placeholder={field}
                                            readOnly={field === "email"} // prevents editing
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className='mt-10 flex flex-col md:flex-row gap-3'>
                                <button type="submit" className="btnTheme m-0 md:w-[220px]">{isLoading ? <div className="flex justify-center items-center gap-2"><span>Loading....</span> <Spinner /></div> : "UPDATE PROFILE"}</button>
                                <button type="button" onClick={() => {
                                    setEditing(false)
                                    setProfileImage(null)
                                }} className="btnTheme m-0 md:w-[170px]">Cancel</button>
                            </div>
                        </>
                    ) : (
                        <>
                            {data ? (
                                <>
                                    <p className="text-lg md:text-xl flex justify-start gap-4 md:gap-5">
                                        <span>First Name:</span><span>{data.data.user.firstName}</span>
                                    </p>
                                    <p className="text-lg md:text-xl flex justify-start gap-4 md:gap-5">
                                        <span>Last Name:</span><span>{data.data.user.lastName}</span>
                                    </p>
                                    <p className="text-lg md:text-xl flex justify-start gap-4 md:gap-5">
                                        <span>Email:</span><span>{data.data.user.email}</span>
                                    </p>
                                    <p className="text-lg md:text-xl flex justify-start gap-4 md:gap-5">
                                        <span>Phone Number:</span><span>{data.data.user.phone || "-"}</span>
                                    </p>
                                    <div className='mt-10'>
                                        <button type="button" onClick={handleEditClick} className="btnTheme w-[180px]">
                                            EDIT PROFILE
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <div className="w-24 h-24 border-5 border-t-transparent border-white rounded-full animate-spin"></div>
                            )}
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}
