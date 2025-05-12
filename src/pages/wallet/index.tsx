import CaseForWalletOptions from "../../components/CaseForWalletOptions";
import ShopNow from "../../components/ShopNow";

export default function Wallet() {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>

    <p className='Bold-heading'>WALLET</p>

    <div className='flex  items-center justify-center gap-5'>
    <CaseForWalletOptions 
    image='/images/gold-coin-big.png'
    title='SUBMIT GOLD COINS'
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
    <ShopNow/>
    </div>
  )
}
