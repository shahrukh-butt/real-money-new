import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function ChangePassword() {
    const [formData, setFormData] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
    });

    const [visibility, setVisibility] = useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false,
    });

    const toggleVisibility = (field: keyof typeof visibility) => {
        setVisibility((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="flex flex-col rounded-box-inner py-12 px-16">
            <p className="text-4xl font-extrabold mb-6">Change Password</p>

            <div className="flex flex-col gap-6 max-w-xl w-full">
                {['oldPassword', 'newPassword', 'confirmPassword'].map((field) => (
                    <div key={field} className="flex flex-col gap-2 relative">
                        <label className="block text-white font-bold capitalize">
                            {field.replace(/([A-Z])/g, ' $1')}
                        </label>
                        <input
                            name={field}
                            value={(formData as any)[field]}
                            onChange={handleChange}
                            type={visibility[field as keyof typeof visibility] ? 'text' : 'password'}
                            className="w-full px-4 py-4 bg-[#31313161] text-white outline-none rounded-4xl pr-12"
                            placeholder={field.replace(/([A-Z])/g, ' $1')}
                        />
                        <button
                            type="button"
                            onClick={() => toggleVisibility(field as keyof typeof visibility)}
                            className="absolute right-4 top-[68%] transform -translate-y-1/2 text-white"
                        >
                            {visibility[field as keyof typeof visibility] ? <Eye size={20} /> : <EyeOff size={20} />}
                        </button>
                    </div>
                ))}

                <div className="mt-6">
                    <button className="btnTheme w-[230px]">UPDATE PASSWORD</button>
                </div>
            </div>
        </div>
    );
}
