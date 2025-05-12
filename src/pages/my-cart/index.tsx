import { useState } from "react";
import { CartCard } from "../../components/Card";
import { useNavigate } from "react-router";

export default function MyCart() {
const navigate = useNavigate();


    return (
        <div className='flex flex-col items-center justify-center gap-10'>

            <p className='Bold-heading'>MY CART</p>

            <div className='rounded-box relative w-7xl  flex justify-center items-center cursor-pointer '>




                <div className="flex flex-col rounded-box-inner  gap-3  py-12  ">
                    <table className="min-w-full border-separate border-spacing-y-2 font-extrabold text-white text-center">
                        <thead>
                            <tr>
                                <th className="p-4">Product</th>
                                <th className="p-4">Price</th>
                                <th className="p-4">Qty</th>
                                <th className="p-4">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow
                                pruductImage={"/images/CARD2.png"}
                                price={20.00}
                                quantity={15}
                                total={40.00}
                            />

                        </tbody>

                    </table>




                    {/* Sub Total */}
                    <div className="ms-20 mt-5 w-6xl flex justify-between items-end">

                        <div
                          onClick={()=>navigate('/shop')}
                        className="underline hover:text-slate-500">Continue Shopping</div>




                        <div className="flex  gap-10 justify-center items-center">
                            <span className=" m-0">Sub Total: $40.00</span>
                            <span
                            onClick={()=>navigate('/checkout')}
                            className="btnTheme m-0">GO TO CHECKOUT</span>
                        </div>



                    </div>


                </div>



            </div>
        </div>
    )
}




function TableRow({ pruductImage, price, quantity, total }: { pruductImage: string, price: number, quantity: number, total: number }) {



    const [qty, setQty] = useState(quantity);

    const increment = () => setQty(prev => prev + 1);
    const decrement = () => setQty(prev => (prev > 1 ? prev - 1 : 1));


    return (
        <tr  >
            <td className="p-2 ">
                <div className="flex items-center justify-center gap-4">
                    <CartCard
                        image={pruductImage}
                        title="Helious"
                        description="Baby Magma 5% Comes with 18 Free Gold Coins"
                    />
                </div>
            </td>

            <td className="p-4">
                <div className="flex justify-center items-center">${price}</div>
            </td>

            <td className="p-4">
                <div className="flex items-center justify-center gap-2">
                    <button
                        onClick={decrement}
                        className="w-10 h-10 cardBg text-white text-xl rounded-full flex items-center justify-center"
                    >
                        −
                    </button>
                    <span className="text-white min-w-[2rem] text-center">{qty}</span>
                    <button
                        onClick={increment}
                        className="w-10 h-10 cardBg text-white text-xl rounded-full flex items-center justify-center"
                    >
                        +
                    </button>
                </div>
            </td>

            <td className="p-4">
                <div className="flex items-center justify-center">${total}</div>
            </td>

            <td className="ps-4">
                <img src="/images/CROSS.png" alt="" />
            </td>
        </tr>
    )
}
