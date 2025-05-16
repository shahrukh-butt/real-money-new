import { useNavigate } from "react-router";

export default function ShopNow() {
    const navigate = useNavigate();
    return (
        <>
            {/* Shop Now */}
            <div className="flex justify-center items-center flex-col lg:flex-row md:mt-24 gap-24 px-3 md:px-10 lg:px-36 ">

                <div className="flex-1/2 flex flex-col justify-center items-center md:items-start relative gap-7 px-3 md:px-0">
                    <span className="Bold-heading flex justify-center items-center w-full md:w-3xl m-0 ">WANT TO SEE THE FULL LIST OF CARDS</span>
                    <span
                        onClick={() => navigate('/shop')}
                        className="btnTheme self-center lg:self-start m-0">Shop Now</span>
                </div>

                {/* Images */}
                <div className="flex-1/2 flex justify-center relative px-3 md:px-0">

                    <div className="flex w-full gap-0 md:gap-10 z-10 ">

                        <div className="rotate-350 md:rotate-345  ">
                            <div
                                onClick={() => navigate("/product-details")}
                                className='relative '>

                                <div className='box relative overflow-hidden'>

                                    <img className='p-2 flex shrink-0' src={"/images/CARD 1.png"} alt={"card1"} />


                                    <div className="flex gap-3.5 absolute top-0 right-2">
                                        <img src="/images/bar1.png" height={400} alt="" />
                                        <img src="/images/bar2.png" height={100} alt="" />
                                    </div>
                                </div>



                                <div className='w-96 h-32 absolute bottom-[-10px] sm:bottom-0 left-[-40px]  md:left-[-20px] flex justify-center items-center gap-0 sm:bg-[url("/images/red-svg.png")]  '>

                                    <svg className="sm:hidden absolute left-4 bottom-[-20px]" xmlns="http://www.w3.org/2000/svg" width="200" height="140" viewBox="0 0 386 140" fill="none">
                                        <path d="M18 140L0 122V34L18 17.5H129L145.5 0H304L326.5 22.5V82.5L386 140H18Z" fill="url(#paint0_linear_2927_795)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2927_795" x1="162.25" y1="0" x2="162.25" y2="140" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FF1D21" />
                                                <stop offset="1" stop-color="#9C0003" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    <div className="absolute left-5 ps-1 bottom-4">
                                        <span className="block text-md sm:text-lg lg:text-2xl font-extrabold leading-tight">Thawne</span>
                                        <span className="block mt-2 pr-4 text-[9px] sm:text-[14px] max-w-[180px] sm:max-w-[200px] break-words whitespace-wrap">
                                            Baby Magma 5% Comes with 18 Free Gold Coins
                                        </span>
                                    </div>

                                    <div className="absolute right-52 sm:right-20 top-12 sm:top-6">
                                        <img className="h-6 w-8 sm:h-10 sm:w-14" src="/images/DRAGON.png " alt="dragon" />
                                    </div>

                                </div>
                            </div>
                        </div>


                        <div className="rotate-6 md:rotate-10">

                            <div
                                onClick={() => navigate("/product-details")}
                                className='relative '>

                                <div className='box relative overflow-hidden'>

                                    <img className='p-2' src={"/images/CARD2.png"} alt={"card1"} />


                                    <div className="flex gap-3.5 absolute top-0 right-2">
                                        <img src="/images/bar1.png" height={400} alt="" />
                                        <img src="/images/bar2.png" height={100} alt="" />
                                    </div>
                                </div>



                                <div className='w-96 h-32 absolute bottom-[-30px] sm:bottom-0 left-[-100px] sm:left-[-20px] flex justify-center items-center gap-0 sm:bg-[url("/images/red-svg.png")] '>

                                    <svg className="sm:hidden " xmlns="http://www.w3.org/2000/svg" width="200" height="140" viewBox="0 0 386 140" fill="none">
                                        <path d="M18 140L0 122V34L18 17.5H129L145.5 0H304L326.5 22.5V82.5L386 140H18Z" fill="url(#paint0_linear_2927_795)" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2927_795" x1="162.25" y1="0" x2="162.25" y2="140" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#FF1D21" />
                                                <stop offset="1" stop-color="#9C0003" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    <div className="absolute left-22 sm:left-5 ps-4 sm:ps-1 bottom-8 md:bottom-4">
                                        <span className="block text-md sm:text-lg lg:text-2xl font-extrabold leading-tight">Thawne</span>
                                        <span className="block mt-2 pr-4 text-[9px] sm:text-[14px] max-w-[180px] sm:max-w-[200px] break-words whitespace-wrap">
                                            Baby Magma 5% Comes with 18 Free Gold Coins
                                        </span>
                                    </div>


                                    <div className="absolute right-32 sm:right-20 top-8 sm:top-5">
                                        <img className="h-6 w-8 sm:h-10 sm:w-14" src="/images/DRAGON.png" alt="dragon" />
                                    </div>

                                </div>
                            </div>

                        </div>


                    </div>






                    <div className="absolute bottom-[-75px] md:bottom-[-140px] left-auto md:left-20 z-0">
                        <img src="/images/Group.png" className="w-80 md:w-auto" alt="card" />
                    </div>

                </div>

            </div>
        </>
    )
}
