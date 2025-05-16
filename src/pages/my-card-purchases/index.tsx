import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function MyCardPurchases() {

    return (
        <div className="rounded-box-inner pb-8 ">
            <div className="flex flex-col  gap-0  mt-6  w-full max-w-screen-xl mx-auto">
                <p className="text-2xl md:text-4xl font-extrabold px-8 md:px-16 pt-5">MY CARD PURCHASES</p>

                <div className="w-full px-7 pb-4">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        className="w-full "
                        spaceBetween={5}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        speed={3000}
                        allowTouchMove={false}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2, spaceBetween: 5 },
                            1024: { slidesPerView: 3, spaceBetween: 10 },
                        }}
                    >
                        {[...Array(10)].map((_, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-72  md:w-80  xl:w-full px-5 sm:px-0 lg:px-10 ">
                                    <div className="">

                                        <div
                                            className='relative '>

                                            <div className='box relative overflow-hidden'>

                                                <img className='p-2' src={"/images/CARD2.png"} alt={"card1"} />


                                                <div className="flex gap-3.5 absolute top-0 right-2">
                                                    <img src="/images/bar1.png" height={400} alt="" />
                                                    <img src="/images/bar2.png" height={100} alt="" />
                                                </div>
                                            </div>



                                            <div className='w-96 h-32 absolute bottom-[-30px] sm:bottom-[-10px]  left-[-200px] sm:left-[-20px] flex justify-center items-center gap-0 card-bottom'>

                                                <div className="absolute left-1 md:left-5 ps-4 sm:ps-1 bottom-17 md:bottom-4">
                                                    <span className="block text-md sm:text-md lg:text-2xl font-extrabold leading-tight">Thawne</span>
                                                    <span className="block mt-2 pr-4 text-[9px] sm:text-[14px] max-w-[180px] sm:max-w-[200px] break-words whitespace-wrap">
                                                        Baby Magma 5% Comes with 18 Free Gold Coins
                                                    </span>
                                                </div>


                                                <div className="absolute right-16 sm:right-20 md:right-26 top-4 sm:top-5">
                                                    <img className="h-6 w-8 sm:h-10 sm:w-14" src="/images/DRAGON.png" alt="dragon" />
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
