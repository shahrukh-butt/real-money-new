import { useNavigate } from "react-router";

export default function Card({ title, description, image ,link }: { title: string, description: string, image: string ,link : string}) {


    const navigate = useNavigate();


    return (
        <div
            onClick={() => navigate(link)}
            className='relative '>

            <div className='box relative overflow-hidden'>

                <img className='p-2' src={image} alt={image} />


                <div className="flex gap-3.5 absolute top-0 right-2">
                    <img src="/images/bar1.png" height={400} alt="" />
                    <img src="/images/bar2.png" height={100} alt="" />
                </div>
            </div>



            <div className='w-96 h-32 absolute bottom-1 left-[-20px] flex justify-center items-center gap-0'>

                <svg xmlns="http://www.w3.org/2000/svg" width="1500" height="140" viewBox="0 0 386 140" fill="none">
                    <path d="M18 140L0 122V34L18 17.5H129L145.5 0H304L326.5 22.5V82.5L386 140H18Z" fill="url(#paint0_linear_2927_795)" />
                    <defs>
                        <linearGradient id="paint0_linear_2927_795" x1="162.25" y1="0" x2="162.25" y2="140" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF1D21" />
                            <stop offset="1" stop-color="#9C0003" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="absolute left-5 ps-1">
                    <p className="card-heading pt-6 ">{title}</p>
                    <span
                        className="block text-[14px] max-w-[200px] break-words whitespace-normal"
                    >
                        {description}
                    </span>
                </div>


                <div className="absolute right-18 top-5">
                    <img src="/images/DRAGON.png" alt="dragon" />
                </div>

            </div>
        </div>
    )
}





function CartCard({ title, description, image }: { title: string, description: string, image: string }) {


    return (
        <div
            className='relative '>

            <div className='box relative'>

                <img className='p-2' height={100} width={100} src={image} alt={image} />


                <div className="flex gap-1.5 h-full absolute top-0 right-1">
                    <img src="/images/bar1.png " alt="bar" />
                    <img src="/images/bar2.png " alt="bar" />
                </div>
            </div>



            <div className='w-96 h-32 absolute bottom-[-50px] left-[-150px] flex justify-center items-center gap-0'>

                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 386 140" fill="none">
                    <path d="M18 140L0 122V34L18 17.5H129L145.5 0H304L326.5 22.5V82.5L386 140H18Z" fill="url(#paint0_linear_2927_795)" />
                    <defs>
                        <linearGradient id="paint0_linear_2927_795" x1="162.25" y1="0" x2="162.25" y2="140" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF1D21" />
                            <stop offset="1" stop-color="#9C0003" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="absolute right-44 text-start ps-1">
                    <p className="text-[8px] pt-1  ">{title}</p>
                    <span
                        className="block text-[5px] max-w-[77px] break-words whitespace-normal"
                    >
                        {description}
                    </span>
                </div>


                <div className="absolute right-40 bottom-16">
                    <img width={30} height={30} src="/images/DRAGON.png" alt="dragon" />
                </div>

            </div>
        </div>
    )
}



export { CartCard };

