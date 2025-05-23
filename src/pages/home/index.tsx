import Card from "../../components/Card";
import ShopNow from "../../components/ShopNow";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-start md:justify-center gap-8 md:gap-10">


      {/* Hero section */}
      <div className="w-screen h-screen flex flex-col justify-start items-center pt-14 gap-5 ">
        <div className="relative w-full flex justify-center items-center py-20 ">

          {/* Cards */}
          <div className="relative w-[800px] md:h-[400px] fan-container px-24 md:px-0">
            {/* Card 1 - far left */}

            <div
              className="absolute top-[-0%] left-52 z-10 rounded-xl shadow-xl animate-fan-left  fan-item fan-item"
            >
              <Card
                image="/images/CARD3.png"
                title="Thawne"
                description="Baby Magma 5% Comes with 18 Free Gold Coins"
                link={"/product-details"}
              />
            </div>

            {/* Card 2 - left */}
            <div
              className="absolute top-0 left-[25%]  z-20 rounded-xl shadow-xl animate-fan-left delay-200 fan-item"
            >
              <Card
                image="/images/CARD2.png"
                title="Thawne"
                description="Baby Magma 5% Comes with 18 Free Gold Coins"
                link={"/product-details"}
              />
            </div>

            {/* Card 3 - center */}
            <div
              className="absolute top-0 left-[25%] rotate-0 z-30 rounded-xl shadow-xl animate-fan-center delay-400 fan-item"
            >

              <Card
                image="/images/CARD 1.png"
                title="Thawne"
                description="Baby Magma 5% Comes with 18 Free Gold Coins"
                link={"/product-details"}
              />
            </div>

            {/* Card 4 - right */}
            <div
              className="absolute top-0 left-50  z-20 rounded-xl shadow-xl animate-fan-right delay-600 fan-item"
            >

              <Card
                image="/images/CARD2.png"
                title="Thawne"
                description="Baby Magma 5% Comes with 18 Free Gold Coins"
                link={"/product-details"}
              />
            </div>

            {/* Card 5 - far right */}
            <div
              className="absolute top-0 left-50  z-10 rounded-xl shadow-xl animate-fan-right delay-800 fan-item "
            >

              <Card
                image="/images/CARD3.png"
                title="Thawne"
                description="Baby Magma 5% Comes with 18 Free Gold Coins"
                link={"/product-details"}
              />
            </div>
          </div>

        </div>


        <div className="flex md:mt-32 justify-center items-center flex-col gap-8 px-3 md:px-0">
          <span className="Bold-heading flex justify-center items-center md:w-4xl m-0 text-center">BROWSE FOR LIMITED EDITION DIGITAL CARDS</span>
          <span className="btnTheme m-0">Explore More</span>
        </div>


      </div>



      {/* About Us */}
      <div className="md:w-[80%] px-4  mt-24 md:mt-0">
        <div className="modalstyle rounded-box-inner  justify-center items-center mt-10 md:mt-24 relative  overflow-hidden z-50 ">

          <img src="/images/bar1.png " className="h-full  absolute left-6 lg:left-24 " alt="" />
          <img src="/images/bar1.png " className="h-full absolute right-6 lg:right-24 " alt="" />


          <div className="flex flex-col justify-center items-center gap-4 md:gap-7 px-6 md:px-0">
            <span className="font-extrabold  text-2xl md:text-5xl pt-4">ABOUT US</span>
            <p className="md:w-[80%] px-5 text-sm md:text-md md:tracking-wide text-center">
              Welcome to Real Money – Your #1 Trusted Site for Digital Card Collecting! Dive into the world of digital cards with our comprehensive website
              portal! Connect with fellow enthusiasts in our vibrant social media community, where you can share news, tips, and fun experiences related to
              your digital card hobby. Why Join Us? - Stay Updated: Get the latest news in the digital card space. - Engage with the Community: Join
              discussions, share your collections, and connect with other collectors. - Exclusive Bonuses: Sign up today to receive special offers and bonuses!
              Don’t miss out on the fun – sign up now and start your digital card adventure with us!
            </p>
          </div>
        </div>

      </div>

      {/* Shop Now */}
      <ShopNow />
    </div>
  );
};

export default Home;
