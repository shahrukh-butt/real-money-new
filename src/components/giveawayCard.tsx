import { useNavigate } from "react-router";

export default function GiveawayCard({ title, description, image, link }: { title: string, description: string, image: string, link: string }) {


    const navigate = useNavigate();


    return (
        <div
            className=' h-full cursor-pointer box pb-10'>


            <img className='p-2' src={image} alt={image} />


            <div className="flex flex-col gap-3 md:gap-4 justify-center items-center">
                <span className="font-extrabold text-lg md:text-3xl pt-6 ">{title}</span>
                <span className="block text-[14px] max-w-[200px] break-words whitespace-normal" > {description} </span>
                <span
                    onClick={() => navigate(link)}
                    className="btnTheme self-center w-[240px] md:w-[280px] text-center text-xs md:text-md m-0 ">ENTER IN THIS GIVEAWAY</span>

            </div>


        </div>
    )
}







