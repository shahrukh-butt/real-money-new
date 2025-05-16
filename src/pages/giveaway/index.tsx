import GiveawayCard from "../../components/giveawayCard";

export default function Giveaway() {

    const cardsDate = [
        {
            Image: "/images/giveaway1.png",
            title: "Dreamy Imaginations",
            descriptions: "Price Worth - 10 Gold Coins"
        },
        {
            Image: "/images/giveaway2.png",
            title: "Dreamy Imaginations",
            descriptions: "Price Worth - 10 Gold Coins"
        },
        {
            Image: "/images/giveaway3.png",
            title: "Dreamy Imaginations",
            descriptions: "Price Worth - 10 Gold Coins"
        },
        {
            Image: "/images/giveaway4.png",
            title: "Dreamy Imaginations",
            descriptions: "Price Worth - 10 Gold Coins"
        },
        {
            Image: "/images/giveaway5.png",
            title: "Dreamy Imaginations",
            descriptions: "Price Worth - 10 Gold Coins"
        },
        {
            Image: "/images/giveaway6.png",
            title: "Dreamy Imaginations",
            descriptions: "Price Worth - 10 Gold Coins"
        },

    ]




    return (
        <div className='flex flex-col items-center justify-center gap-10 relative px-4 lg:px-0'>

            <p className='Bold-heading uppercase'>Giveaways</p>

            <img src="/images/giveaway.png" alt="" />



            <div className='flex  items-center justify-center  flex-wrap gap-4'>
                {cardsDate.map((card, index) => (
                    <GiveawayCard
                        key={index}
                        image={card.Image}
                        title={card.title}
                        description={card.descriptions}
                        link={"/product-details"}
                    />
                ))

                }
            </div>



        </div>
    )
}
