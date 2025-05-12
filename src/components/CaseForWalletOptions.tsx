
export default function CaseForWalletOptions({ title,image }: { title: string, image: string }) {
  return (

    <div className='rounded-box relative w-96 h-[251px] flex justify-center items-center cursor-pointer '>

        <div className="flex rounded-box-inner  flex-col justify-center items-center gap-3 px-5 text-center ">
        <img className='p-2' src={image} alt={image} />
        <p className="coin-heading ">{title}</p>
        </div>


        <div className="flex gap-3.5 absolute top-2 right-6 ">
            <img src="/images/wallet-bar.png"  alt="" />
        </div>

</div>
  )
}
