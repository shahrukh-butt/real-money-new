import { useRef, useState } from 'react';

export default function MyProfile() {
    const inuutRef: any = useRef(null)
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'test@example.com',
        phoneNumber: '123456789',
    });

    const [profileImage, setProfileImage] = useState('/images/CARD2.png');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Simulate submitting updated data
        console.log('Updated Data:', formData,selectedFile);
        setEditing(false);
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

    return (
        <div className="flex flex-col rounded-box-inner gap-3 py-12 px-6 md:px-16">
            <p className="text-2xl md:text-4xl font-extrabold">MY PROFILE</p>

            <div className="flex flex-col gap-3">
                <div className='relative'>
                    <img
                        className="w-24 h-24 rounded-full mb-10 roundedBox"
                        src={profileImage ? profileImage : "/images/CARD2.png"}
                        alt="profile-image"
                    />
                    {editing && (
                        <div
                            onClick={() => inuutRef?.current?.click()}
                            className='cardBg w-8 h-8  rounded-full flex justify-center items-center absolute top-18 left-18'>
                            <img
                                className="w-5 h-5  btntheme"
                                src="/images/camera.png"
                                alt="profile-image"
                            />
                            <input ref={inuutRef} type="file" className='hidden' onChange={handleImageChange} name="image" />
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 ">
                    {editing ? (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col gap-3">
                                    <label className="block text-white mb-1 ms-4 font-bold">
                                        First Name
                                    </label>
                                    <input
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full px-4 py-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                        placeholder="First Name"
                                    />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="block text-white mb-1 ms-4 font-bold">
                                        Last Name
                                    </label>
                                    <input
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        type="text"
                                        className="w-full px-4 py-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                        placeholder="Last Name"
                                    />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="block text-white mb-1 ms-4 font-bold">
                                        Email
                                    </label>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        className="w-full px-4 py-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                        placeholder="Email"
                                    />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <label className="block text-white mb-1 ms-4 font-bold">
                                        Phone Number
                                    </label>
                                    <input
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        type="tel"
                                        className="w-full px-4 py-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                        placeholder="Phone Number"
                                    />
                                </div>
                            </div>
                            <div className='mt-10 flex flex-col md:flex-row gap-3'>
                                <button
                                    onClick={() => setEditing(true)}
                                    className="btnTheme m-0 md:w-[220px]"
                                >
                                    UPDATE PROFILE
                                </button>     <button
                                    onClick={() => setEditing(false)}
                                    className="btnTheme m-0 md:w-[170px]"
                                >
                                    Cancel
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-lg md:text-xl flex justify-start gap-4  md:gap-20">
                                <span>First Name:</span>
                                <span>{formData.firstName}</span>
                            </p>
                            <p className="text-lg md:text-xl flex justify-start gap-4 md:gap-20">
                                <span>Last Name:</span>
                                <span>{formData.lastName}</span>
                            </p>
                            <p className="text-lg md:text-xl flex justify-start gap-4 md:gap-20">
                                <span>Email:</span>
                                <span>{formData.email}</span>
                            </p>
                            <p className="text-lg md:text-xl flex justify-start gap-4 md:gap-20 ">
                                <span>Phone Number:</span>
                                <span>{formData.phoneNumber}</span>
                            </p>
                            <div className='mt-10'>
                                <button
                                    type="button"
                                    onClick={() => setEditing(true)}
                                    className="btnTheme  w-[180px]"
                                >
                                    EDIT PROFILE
                                </button>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}
