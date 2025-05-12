import { useState } from "react";
import CaseForWalletOptions from "../../components/CaseForWalletOptions";
import ShopNow from "../../components/ShopNow";

export default function Wallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);





  return (
    <div className='flex flex-col items-center justify-center gap-10'>

      <p className='Bold-heading'>WALLET</p>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {/* Modal content */}
        </Modal>
      )}

      <div className='flex  items-center justify-center gap-5'>
        <CaseForWalletOptions
          image='/images/gold-coin-big.png'
          title='SUBMIT GOLD COINS'
          openModal={setIsModalOpen}
        />
        <CaseForWalletOptions
          image='/images/red-coin-big.png'
          title='REQUEST RED COINS'
        />
        <CaseForWalletOptions
          image='/images/financial.png'
          title='SUBMIT TO YOUR FINANCIAL'
        />
      </div>
      <ShopNow />
    </div>
  )
}


const Modal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (

    <>
      {/* Background container (your existing layout) */}
      <div className='h-[650px] w-[470px] rounded-box  flex justify-center items-center cursor-pointer z-50 absolute top-44 '>
        <div className="flex flex-col rounded-box-inner gap-3 py-12">
          <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
            <div className=" rounded-lg p-6 w-full max-w-md relative">

              <img
                onClick={onClose}
                src="/images/CROSS.png" alt="close" className="absolute top-7 right-[-18px]"  width={50} height={50} />
              {/* content */}
              <div className="mt-16 mb-5 ">
                <p className="text-3xl font-extrabold mt-5 text-center">SUBMIT REQUEST TO
                  SEND COINS</p>

              </div>

              <div className="flex justify-center items-center flex-col gap-4 box p-4 w-fit mx-auto ">
                <img src="/images/gold-coin-big.png" alt="gold-coin" width={60} height={60} />
                <span className="font-extrabold text-lg">100 GOLD COINS</span>
              </div>

              <div className="flex flex-col gap-4 mt-5 ">
                <input type="text" className="p-4 bg-[#31313161] rounded-full" placeholder="Enter Amount" name="" id="" />
                <textarea
                  className="p-4 bg-[#31313161] rounded-xl h-[150px]  w-full text-white resize-none"
                  placeholder="Enter Notes Here!"
                  
                ></textarea>
                <span className="btnTheme text-center">SUBMIT GOLD COINS</span>
              </div>




            </div>
          </div>
          {/* You can place trigger button or other content here */}
        </div>
      </div>

    </>
  );
};
