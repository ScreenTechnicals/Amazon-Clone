import React from 'react'
import CartGif from "../public/gifs/cart.gif"
import Image from 'next/future/image'
import CartCard from '../components/CartCard'


const Cart = () => {
  return (
    <div className='w-full  h-[88vh] overflow-y-auto p-5 md:p-[32.5px]'>
        <div className='w-full h-[80vh] bg-white shadow-md rounded-xl md:px-10 px-3'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-2'>
                    <h1 className='xl:text-4xl md:text-2xl text-xs font-bold relative top-2'>Your Shopping Cart</h1>
                    <Image src={CartGif} alt="cart" width={500} height={500} className="w-[80px]" />
                </div>
                <div>
                    <p className='relative top-2 uppercase font-light tracking-wide md:text-xl text-xs'>6 Items for &#8377;3000</p>
                </div>
            </div>
            <div className='w-full h-[60vh] space-y-3 overflow-y-auto'>
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
                <CartCard />
            </div>
            <div className='w-full flex items-center h-[10vh]'>
                <button className='text-white p-2 w-[100%] text-xl rounded-md uppercase bg-gradient-to-b from-[#ffd900] to-[#ffb300] hover:bg-gradient-to-t'>Proceed To Pay</button>
            </div>
        </div>
    </div>
  )
}

export default Cart