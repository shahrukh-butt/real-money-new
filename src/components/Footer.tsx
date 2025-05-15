
export default function Footer() {
  return (
    <div className="w-full md:w-screen mt-44 bg-black flex flex-col-reverse md:flex-row justify-between items-center md:px-24 py-6 gap-5 md:gap-0">
      <div>
        Real Money Dragon © 2024  - All Rights Reserved
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full md:w-auto">
        <div className="flex justify-center items-center">
          <img src="/images/FB.png" alt="fb" />
          <img src="/images/discord.png" alt="discord" />
          <img src="/images/twitter.png" alt="twitter" />
          <img src="/images/instagram.png" alt="instagram" />
          <img src="/images/tik-tok.png" alt="tik-tok" />
        </div>
        <div className="flex justify-center items-center gap-4"><div>Privacy Policy</div>  <div>|</div>   <div> Terms & Conditions</div></div>
      </div>
    </div>
  )
}
