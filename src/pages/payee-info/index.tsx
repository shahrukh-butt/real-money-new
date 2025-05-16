import { useState } from "react";

export default function PayeeInfo() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        ClinetId: '',
        country: '',
        dateOfBirth: '',
    });



    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    return (
        <div className="flex flex-col rounded-box-inner gap-3 py-12 px-6 md:px-16">
            <p className="text-2xl md:text-4xl font-extrabold ps-3 md:ps-0">Payee Info</p>

            <div className="flex flex-col gap-3">
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
                                Clinet ID
                            </label>
                            <input
                                name="ClinetId"
                                value={formData.ClinetId}
                                onChange={handleChange}
                                type="tel"
                                className="w-full px-4 py-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                placeholder="Clinet ID"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="block text-white mb-1 ms-4 font-bold">
                                Country
                            </label>
                            <input
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                type="tel"
                                className="w-full px-4 py-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                placeholder="Country"
                            />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label className="block text-white mb-1 ms-4 font-bold">
                                Date Of Birth
                            </label>
                            <input
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleChange}
                                type="tel"
                                className="w-full px-4 py-4 bg-[#31313161] text-white outline-none rounded-4xl"
                                placeholder="Date Of Birth"
                            />
                        </div>
                    </div>
                    <div className='mt-10 flex gap-3'>
                        <button
                            // onClick={() => setEditing(true)}
                            className="btnTheme m-0 w-full md:w-[200px]"
                        >
                            Edit Information
                        </button>
                    </div>
                </>
            </div>
        </div>
    );
}
