import { useState } from "react";
import CaseForWalletOptions from "../../components/CaseForWalletOptions";
import ShopNow from "../../components/ShopNow";
import { useGetMyCoinsQuery } from "../../redux/services/coinSlice";

export default function Wallet() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRedCoinModalOpen, setIsRedCoinModalOpen] = useState(false);
  const { data } = useGetMyCoinsQuery({},{pollingInterval: 10000}) // interval of 10 seconds




  return (
    <div className='flex flex-col items-center justify-center gap-7 md:gap-10 mt-5 md:mt-0'>

      <div className="flex flex-col md:flex-row justify-end items-center w-full md:ml-[-10%] lg:ml-[-50%] gap-2 md:gap-10">

        <p className='Bold-heading '>WALLET</p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-12">
          <div className="roundedBox flex items-center justify-center gap-2 ">
            <img src="/images/gold-coin-big.png" className="ms-3" width={30} alt="coin" />
            <div className="flex justify-center items-center text-sm font-semibold px-2">{data?.data?.goldCoins ?? ""} gold coins</div>
          </div>

          <div className="roundedBox flex items-center justify-center gap-2 ">
            <img src="/images/red-coin-big.png" className="ms-3" width={30} alt="coin" />
            <div className="flex justify-center items-center text-sm font-semibold px-2">{data?.data?.redCoins ?? ""} red coins</div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {/* Modal content */}
        </Modal>
      )}

      {isRedCoinModalOpen && (
        <RedCoinModal isOpen={isRedCoinModalOpen} onClose={() => setIsRedCoinModalOpen(false)}>
          {/* Modal content */}
        </RedCoinModal>
      )}

      <div className='flex flex-col md:flex-row items-center justify-center gap-5'>
        <CaseForWalletOptions
          image='/images/gold-coin-big.png'
          title='SUBMIT GOLD COINS'
          openModal={setIsModalOpen}
        />
        <CaseForWalletOptions
          image='/images/red-coin-big.png'
          title='REQUEST RED COINS'
          openModal={setIsRedCoinModalOpen}
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
      <div className="fixed inset-0 z-20 flex items-start justify-center pt-36 px-4">
        <div className="rounded-box-inner modalstyle max-w-md w-full max-h-[75vh] overflow-y-auto relative p-6">
          <img
            onClick={onClose}
            src="/images/CROSS.png"
            alt="close"
            className="absolute top-4 right-5 z-20 cursor-pointer"
            width={40}
            height={40}
          />

          <div className="mt-12 mb-5 text-center">
            <p className="text-3xl font-extrabold">SUBMIT REQUEST TO SEND COINS</p>
          </div>

          <div className="flex flex-col items-center gap-4 p-4 box w-fit mx-auto">
            <img src="/images/gold-coin-big.png" alt="gold-coin" width={60} height={60} />
            <span className="font-extrabold text-lg">100 GOLD COINS</span>
          </div>

          <div className="flex flex-col gap-4 mt-5">
            <input
              type="text"
              className="p-4 bg-[#31313161] rounded-full text-white placeholder-white"
              placeholder="Enter Amount"
            />
            <textarea
              className="p-4 bg-[#31313161] rounded-xl h-[150px] w-full text-white resize-none placeholder-white"
              placeholder="Enter Notes Here!"
            ></textarea>
            <span className="btnTheme text-center mt-5">SUBMIT GOLD COINS</span>
          </div>
        </div>
      </div>

    </>
  );
};


const RedCoinModal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (

    <>
      {/* Background container (your existing layout) */}
      <div className="fixed inset-0 z-20 flex items-start justify-center pt-36 px-4">
        <div className="rounded-box-inner modalstyle max-w-md w-full max-h-[75vh] overflow-y-auto relative p-6">
          <img
            onClick={onClose}
            src="/images/CROSS.png"
            alt="close"
            className="absolute top-4 right-5 z-20 cursor-pointer"
            width={40}
            height={40}
          />

          <div className="mt-12 mb-5 text-center">
            <p className="text-3xl font-extrabold">SUBMIT REQUEST TO SEND COINS</p>
          </div>

          <div className="flex flex-col items-center gap-4 p-4 box w-fit mx-auto">
            <img src="/images/gold-coin-big.png" alt="gold-coin" width={60} height={60} />
            <span className="font-extrabold text-lg">100 GOLD COINS</span>
          </div>

          <div className="flex flex-col gap-4 mt-5">
            <input
              type="text"
              className="p-4 bg-[#31313161] rounded-full text-white placeholder-white"
              placeholder="Enter Amount"
            />
            <textarea
              className="p-4 bg-[#31313161] rounded-xl h-[150px] w-full text-white resize-none placeholder-white"
              placeholder="Enter Notes Here!"
            ></textarea>
            <span className="btnTheme text-center mt-5">SUBMIT GOLD COINS</span>
          </div>
        </div>
      </div>

    </>
  );
};
