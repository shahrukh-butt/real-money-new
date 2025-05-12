import { useNavigate } from "react-router";
import Card from "./Card";

export default function ShopNow() {
    const navigate = useNavigate();
    return (
        <>
            {/* Shop Now */}
            <div className="flex justify-center items-center mt-24">

                <div className="flex-1/2 flex flex-col justify-center items-start relative gap-7">
                    <span className="Bold-heading flex justify-center items-center w-3xl m-0">WANT TO SEE THE FULL LIST OF CARDS</span>
                    <span
                        onClick={() => navigate('/shop')}
                        className="btnTheme self-start m-0">Shop Now</span>
                </div>

                {/* Images */}
                <div className="flex-1/2 flex justify-center relative">

                    <div className="flex w-full gap-10 z-10">

                        <div className="rotate-345">
                            <Card
                                image="/images/CARD 1.png"
                                title="Thawne"
                                description="Baby Magma 5% Comes with 18 Free Gold Coins"
                            />
                        </div>


                        <div className="rotate-10">
                            <Card
                                image="/images/CARD2.png" title="Thawne" description="Baby Magma 5% Comes with 18 Free Gold Coins" />
                        </div>


                    </div>

                    <div className="absolute bottom-[-140px] left-20 z-0">
                        <img src="/images/Group.png" alt="card" />
                    </div>

                </div>

            </div>
        </>
    )
}
