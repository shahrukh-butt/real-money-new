import { useState } from "react";
import Card from "../../components/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';



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

export default function ProductDetails() {

    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));



    return (
        <div className='flex flex-col items-center justify-center gap-10 relative'>

            <p className='Bold-heading uppercase'>Product Details</p>


            <div className='w-full  flex justify-center items-center gap-32 '>
                <div className='rounded-box w-[850px] '>

                    <div className='rounded-box-inner  p-10'>
                        <div className='bg-[#0B0B0B] p-4 rounded-full '>


                            <div className="flex gap-10 items-center">

                                <div className="w-fit flex-1/2">
                                    <Card image="/images/CARD4.png"
                                        title="elio"
                                        description="elio"
                                    />
                                </div>

                                <div className="flex-1/2 flex flex-col gap-5">
                                    <span className="font-extrabold text-5xl leading-none">Oberon</span>
                                    <span className="Bold-heading leading-none">$20.00</span>
                                    <span className="leading-tight">
                                        Baby Oberon 5% BONUS COMES WITH 18 FREE GOLD COINS + 1 BONUS COINS TOTAL PACKAGE OF FREE GOLD COINS IS 19
                                    </span>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={decrement}
                                            className="px-3 py-1 rounded-full cardBg text-white text-lg"
                                        >
                                            −
                                        </button>
                                        <span className="min-w-[2rem] text-center text-white">{quantity}</span>
                                        <button
                                            onClick={increment}
                                            className="px-3 py-1 rounded-full cardBg text-white text-lg"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <button className="btnTheme self-start mt-2"> ADD TO CART</button>
                                </div>


                            </div>

                        </div>




                    </div>

                </div>




            </div>


            <p className='Bold-heading uppercase '>Similar Products</p>


            <div className="w-full px-10">
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
                                <Card
                                    image={card.Image}
                                    title={card.title}
                                    description={card.descriptions}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </div>
    )
}
