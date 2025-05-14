import { useState } from "react";
import { CartCard } from "../../components/Card";

export default function CheckOut() {

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

    const handleSubmit = () => {
        console.log(formData);
    };


    return (
        <div className='flex flex-col items-center justify-center gap-10 px-3 md:px-0'>

            <p className='Bold-heading'>CHECKOUT</p>

            <div className='rounded-box relative w-full lg:w-6xl  flex justify-center items-center cursor-pointer '>




                <div className="flex flex-col rounded-box-inner  gap-3  py-12  ">


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
                        <div className="flex flex-col gap-3">
                            <label className="block text-white mb-1 ms-4 font-bold">
                                First Name <span className="text-red-500">*</span>
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
                                Last Name <span className="text-red-500">*</span>
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
                                Email <span className="text-red-500">*</span>
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
                                Phone Number <span className="text-red-500">*</span>
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


                    <div className="flex justify-center my-5 md:my-20 items-center">
                        <span
                            onClick={handleSubmit}
                            className="btnTheme m-0">PLACE ORDER</span>
                    </div>


                    <div className=" overflow-x-scroll md:overflow-hidden">
                        <table className="min-w-full border-separate border-spacing-y-2 font-extrabold text-white text-center overflow-hidden">
                            <thead>

                            </thead>
                            <tbody>
                                <TableRow
                                    pruductImage={"/images/CARD2.png"}
                                    price={20.00}
                                    quantity={15}
                                    total={40.00}
                                />
                                <TableRow
                                    pruductImage={"/images/CARD2.png"}
                                    price={20.00}
                                    quantity={15}
                                    total={40.00}
                                />
                                <TableRow
                                    pruductImage={"/images/CARD2.png"}
                                    price={20.00}
                                    quantity={15}
                                    total={40.00}
                                />

                            </tbody>

                        </table>

                    </div>




                </div>



            </div>
        </div>
    )
}




function TableRow({ pruductImage, price, total }: { pruductImage: string, price: number, quantity: number, total: number }) {


    return (
        <tr>
            <td className="p-4 ps-8  sm:px-10 md:px-20 lg:px-32 ">
                <div className="flex items-start justify-start w-fit">
                    <CartCard
                        image={pruductImage}
                        title="Helious"
                        description="Baby Magma 5% Comes with 18 Free Gold Coins"
                    />
                </div>
            </td>

            <td className="p-4  sm:px-10 md:px-20 lg:px-32">
                <div className="flex flex-col items-start justify-start text-xs sm:text-sm md:text-base lg:text-lg">
                    <div className="font-semibold">Oberon</div>
                    <span>${total} </span>
                </div>
            </td>

            <td className="p-4  sm:px-10 md:px-20 lg:px-32">
                <div className="flex items-start justify-start text-xs sm:text-sm md:text-base lg:text-lg">
                    <span className="m-0">Sub Total: ${price}</span>

                </div>
            </td>
        </tr>

    )
}
