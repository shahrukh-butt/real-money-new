import { useState } from 'react';
import Card from '../../components/Card'

export default function Shop() {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const cardsDate = [
        {
            Image: "/images/CARD 1.png",
            title: "ELIO",
            descriptions: "Baby Magma 5% Comes with 18 Free Gold Coins"
        },
        {
            Image: "/images/CARD2.png",
            title: "ELIO",
            descriptions: "Baby Magma 5% Comes with 18 Free Gold Coins"
        },
        {
            Image: "/images/CARD3.png",
            title: "ELIO",
            descriptions: "Baby Magma 5% Comes with 18 Free Gold Coins"
        },
        {
            Image: "/images/CARD4.png",
            title: "ELIO",
            descriptions: "Baby Magma 5% Comes with 18 Free Gold Coins"
        },
        {
            Image: "/images/CARD5.png",
            title: "ELIO",
            descriptions: "Baby Magma 5% Comes with 18 Free Gold Coins"
        },
        {
            Image: "/images/CARD6.png",
            title: "ELIO",
            descriptions: "Baby Magma 5% Comes with 18 Free Gold Coins"
        },
        {
            Image: "/images/CARD7.png",
            title: "ELIO",
            descriptions: "Baby Magma 5% Comes with 18 Free Gold Coins"
        },
        {
            Image: "/images/CARD8.png",
            title: "ELIO",
            descriptions: "Baby Magma 5% Comes with 18 Free Gold Coins"
        },
        {
            Image: "/images/CARD9.png",
            title: "ELIO",
            descriptions: "Baby Magma 5% Comes with 18 Free Gold Coins"
        },
        {
            Image: "/images/CARD 1.png",
            title: "ELIO",
            descriptions: "Baby Magma 5% Comes with 18 Free Gold Coins"
        },
        {
            Image: "/images/CARD2.png",
            title: "ELIO",
            descriptions: "Baby Magma 5% Comes with 18 Free Gold Coins"
        },
        {
            Image: "/images/CARD3.png",
            title: "ELIO",
            descriptions: "Baby Magma 5% Comes with 18 Free Gold Coins"
        },

    ]



    return (
        <>

            {isModalOpen && (
                <Modal isOpen={isModalOpen}  onClose={() => setIsModalOpen(false)}>
                    {/* Modal content */}
                </Modal>
            )}

            <div className='flex flex-col items-center justify-center gap-5 relative px-4 md:mx-32'>

                <p className='Bold-heading uppercase'>Shop Cards</p>


                <div className='w-full  flex flex-col lg:flex-row justify-center items-center lg:justify-end lg:items-end gap-5 lg:gap-32 '>
                    <div className='rounded-box w-full md:w-[700px] lg:w-[850px]'>

                        <div className='rounded-box-inner p-4 md:p-6'>
                            <div className='bg-[#31313161] p-3 rounded-full'>
                                <div className='flex items-center gap-4'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path d="M26.5 26.5L19.138 19.138M19.138 19.138C21.0608 17.2153 22.25 14.559 22.25 11.625C22.25 5.75697 17.493 1 11.625 1C5.75697 1 1 5.75697 1 11.625C1 17.493 5.75697 22.25 11.625 22.25C14.559 22.25 17.2153 21.0608 19.138 19.138Z" stroke="#EDEDED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <input
                                        className="rounded-full py-2 px-2 w-full text-white outline-none focus:outline-none"
                                        placeholder='Search'
                                        type="text" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col  gap-0 items-center '>
                        <p className='text-white'>Sort By Price</p>
                        <div className='rounded-box p-4 rounded-full w-[200px]'>
                            <div className="relative w-full">
                                <select
                                    className="rounded-full py-2 px-4 w-full text-white bg-black outline-none appearance-none"
                                >
                                    <option value="">Select Option</option>
                                    <option value="option1">Option One</option>
                                    <option value="option2">Option Two</option>
                                    <option value="option3">Option Three</option>
                                </select>

                                <img
                                    src="/images/chevron.png"
                                    alt="dropdown icon"
                                    className="pointer-events-none absolute right-5 top-1/2 transform -translate-y-1/2 w-4 h-4"
                                />
                            </div>
                        </div>
                    </div>

                </div>

                <div className='flex  items-center justify-center  flex-wrap gap-10'>
                    {cardsDate.map((card, index) => (
                        <Card
                            key={index}
                            image={card.Image}
                            title={card.title}
                            description={card.descriptions}
                            link={"/product-details"}
                        />
                    ))

                    }
                </div>


                <div className='flex flex-col md:flex-row items-center justify-between w-full  '>

                    <div>showing 1-10 of 100</div>
                    <div className="flex justify-center items-center gap-[2px] md:gap-2 mt-4">
                        <button className="px-1 md:px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-700 disabled:opacity-50" disabled>
                            Prev
                        </button>

                        <button className="px-1 md:px-3 py-1 rounded-md bg-gray-900 text-white border border-gray-600">1</button>
                        <button className="px-1 md:px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-700">2</button>
                        <button className="px-1 md:px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-700">3</button>
                        <span className="px-1 md:px-2 text-gray-400">...</span>
                        <button className="px-1 md:px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-700">10</button>

                        <button className="px-1 md:px-3 py-1 rounded-md bg-gray-800 text-white hover:bg-gray-700">
                            Next
                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}



const Modal = ({ isOpen, onClose }: any) => {
    if (!isOpen) return null;

    const [accepted, setAccepted] = useState(false);

    return (

        <>

            {/* Background container (your existing layout) */}
            <div className="fixed inset-0 z-10 flex items-start justify-center pt-36 px-4 ">
                <div className="rounded-box-inner modalstyle max-w-md w-full max-h-fit overflow-y-auto relative p-6 ">
                    {/* <img
                        onClick={onClose}
                        src="/images/CROSS.png"
                        alt="close"
                        className="absolute top-4 right-5 z-20 cursor-pointer"
                        width={40}
                        height={40}
                    /> */}
                    <div className='mt-10 pb-4'>
                        <p className='text-xl font-extrabold'>TERMS AND CONDITIONS</p>
                        <p className='text-xs font-extralight leading-4'>Thank you for choosing Real Money Dragon . By accessing or using our website and purchasing
                            products or services from us, you agree to the following Terms and Conditions Please read these
                            Terms carefully before making a purchase.</p>
                        <p className='text-xs font-extralight leading-4'>
                            These Terms apply to all purchases made through our website and govern the use of PayPal for
                            payment processing.
                        </p><p className='text-xl font-extrabold '>Acceptance of Terms </p>

                        <p className='text-xs font-extralight leading-4'>By visiting our website and completing a purchase, you agree to be bound by these Terms and
                            any other policies, agreements, or guidelines provided by us in connection with your purchase.
                            If you do not agree with these Terms, you should not proceed with the purchase.
                        </p>
                        <div className="flex items-center gap-2 mt-4">
                            <input
                                type="checkbox"
                                id="terms"
                                className="w-4 h-4 accent-red-600 cursor-pointer"
                                checked={accepted}
                                onChange={(e) => setAccepted(e.target.checked)}
                            />
                            <label htmlFor="terms" className="text-sm cursor-pointer">
                                I accept Terms and Conditions.
                            </label>
                        </div>

                        <div className="text-center mt-6">
                            <button
                                onClick={onClose}
                                className={`btnTheme text-center mt-5 w-60 ${!accepted ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                disabled={!accepted}
                            >
                                SUBMIT
                            </button>
                        </div>  
                    </div>





                </div>
            </div>
        </>
    );
};
