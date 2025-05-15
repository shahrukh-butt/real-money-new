import Card from '../../components/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { useState } from 'react';

export default function AuctionDetails() {
    const [isModalOpen, setIsModalOpen] = useState(false);
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
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                    {/* Modal content */}
                </Modal>
            )}
            <div className='flex flex-col items-center justify-center gap-5 relative px-4 md:mx-24'>

                <p className='Bold-heading uppercase'>Auction Details</p>


                <div className=' flex flex-col justify-center items-center w-full lg:w-[1000px] gap-10 md:gap-16 px-3 md:px-0'>
                    <div className='rounded-box  '>

                        <div className='rounded-box-inner  px-4 py-8 md:p-5  '>
                            <div className='bg-[#0B0B0B] p-4 rounded-full '>


                                <div className="flex flex-col lg:flex-row   gap-10 items-center ">

                                    <div className="w-fit ">
                                        <Card image="/images/CARD4.png"
                                            title="elio"
                                            description="elio"
                                            link={"/product-details"}
                                        />
                                    </div>



                                    <div className="flex-1/2 flex flex-col gap-10 justify-between md:h-[500px] ">


                                        <div className="flex  flex-col  justify-between items-center md:items-start gap-1 md:gap-2">
                                            <span className="font-extrabold text-xl md:text-3xl leading-none">Caitlin CILlIN 65</span>
                                            <span className=" leading-none mt-2 md:mt-0 text-sm md:text-md break-words">Cillin #1 (2487 Pokémon) CGC - PINUP ON BACK...</span>
                                        </div>

                                        <div className='flex flex-col justify-center items-center md:flex-row  md:justify-between'>
                                            <p>Current Bid:</p>
                                            <div className="flex  flex-col  justify-between items-center md:items-start gap-2 md:gap-2">
                                                <span className="font-extrabold text-xl md:text-2xl leading-none">$ 480.00</span>
                                                <span className="leading-none  mt-2 md:mt-0">4 Bids <span 
                                                onClick={() => setIsModalOpen(true)} className='text-red-700 cursor-pointer'>Show History</span></span>
                                            </div>
                                        </div>


                                        <div className='flex flex-col md:flex-row justify-between items-center md:items-start whitespace-nowrap text-md lg:gap-5'>
                                            <p>Bid Ends: </p>
                                            <div className="flex flex-col lg:flex-row justify-center items-center gap-3 md:gap-2 md:mt-1 lg:mt-1">
                                                <span className="leading-none ">18 DAYS 16 HOURS 50 MIN</span>
                                                <span className="leading-none ">Tue, 5/13/25,</span>
                                                <span className="leading-none ">7:00 AM</span>
                                            </div>
                                        </div>




                                        <button
                                            className="btnTheme self-center mt-2 w-full"> PLACE A BID</button>
                                    </div>


                                </div>

                            </div>




                        </div>

                    </div>

                    <div className='text-center lg:text-start mb-10'>
                        <p className='font-extrabold text-3xl'>DESCRIPTION</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
                            not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p>
                            It was popularized in the with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publish
                            software like Aldus Page Maker including versions of Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                            to make a type specimen book. It has survived not only five centuries, remaining essentially unchanged.
                        </p>
                    </div>




                </div>


                <p className='Bold-heading uppercase '>Similar Products</p>


                <div className="w-full md:px-10">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={5}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 0, // no delay between slides
                            disableOnInteraction: false,
                        }}
                        speed={3000} // controls how fast it scrolls
                        allowTouchMove={false} // optional: disables dragging for smooth scroll
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2, spaceBetween: 5 },
                            1024: { slidesPerView: 3, spaceBetween: 10 },
                        }}
                    >
                        {cardsDate.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-96">
                                    <div className='flex flex-col gap-5'>
                                        <Card
                                            key={index}
                                            image={card.Image}
                                            title={card.title}
                                            description={card.descriptions}
                                            link={"/auction-details"}
                                        />
                                        <div className="flex flex-col gap-1">
                                            <span className="leading-none break-words">
                                                {"Romulus #1 (1939 Pokémon) CGC -PINUP ON BACK...".slice(0, 40) + "..."}
                                            </span>
                                            <span className="text-2xl font-extrabold leading-none">$ 240.00</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>


            </div>
        </>
    )
}



const Modal = ({ isOpen, onClose }: any) => {
    if (!isOpen) return null;

    return (

        <>
            {/* Background container (your existing layout) */}
            <div className="fixed inset-0 z-10 flex items-start justify-center pt-36 px-4 ">
                <div className="rounded-box-inner modalstyle max-w-md w-full max-h-fit overflow-y-auto relative p-6 ">
                    <img
                        onClick={onClose}
                        src="/images/CROSS.png"
                        alt="close"
                        className="absolute top-4 right-5 z-20 cursor-pointer"
                        width={40}
                        height={40}
                    />

                    <div className="mt-10 mb-5 text-center">
                        <p className="text-3xl font-extrabold">BID HISTORY</p>
                    </div>



                    <div className="flex flex-col gap-4 mt-5 pb-8">

                        <div className='flex justify-between px-2'>
                            <p>BID AMOUNT</p>
                            <p>BID DATE AND TIME</p>
                        </div>
                        {[...Array(5)].map((index: number) => (
                            <div
                                key={index}
                                className='flex justify-between items-center bg-[#313131] px-4 pt-3 text-sm'>
                                <p>$ 240.00</p>
                                <p>May 12, 16:32 PM</p>
                            </div>

                        ))

                        }

                    </div>
                </div>
            </div>
        </>
    );
};
