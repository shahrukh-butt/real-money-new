import Card from '../../components/Card'

export default function Auction() {
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
        <div className='flex flex-col items-center justify-center gap-5 relative px-4 md:mx-24'>

            <p className='Bold-heading uppercase'>Live Auction</p>


            <div className='w-full  flex flex-col lg:flex-row justify-center items-center  gap-5 lg:gap-32 '>
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


            </div>

            <div className='flex  items-center justify-center  flex-wrap gap-10'>
                {cardsDate.map((card, index) => (
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
    )
}
