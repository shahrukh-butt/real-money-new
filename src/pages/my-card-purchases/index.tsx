import Card from "../../components/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


export default function MyCardPurchases() {

    return (
        <div className="rounded-box-inner ">
            <div className="flex flex-col  gap-0  mt-6  w-full max-w-screen-xl mx-auto">
                <p className="text-4xl font-extrabold px-16 mt-24">MY CARD PURCHASES</p>

                <div className="w-full px-7 mt-4">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        className="w-full"
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
                                <div className="w-80">
                                    <Card
                                        image="/images/CARD 1.png"
                                        title="Helious"
                                        description="Baby Magma 5% Comes with 18 Free Gold Coins"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
