import React from 'react'
import Image from 'next/future/image'

const CartCard = () => {
  return (
    <div>
        <div className='bg-white border px-5 rounded-xl shadow-sm flex w-full items-center space-x-5'>
          <Image src='https://images-eu.ssl-images-amazon.com/images/I/410iWt8d79L._AC_SR400,600_.jpg' alt="image" width={200} height={200} priority={true} quality={100} className="2xl:w-[200px] w-[100px]" />
          <div>
            <h1 className='md:text-2xl'>Samsung Galaxy S20 FE 5G</h1>
            <p className='md:text-sm text-xs md:block hidden'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyda</p>
            <span className='md:text-xl xl:text-2xl font-semibold '>&#8377; 74,999</span>
          </div>
        </div>
    </div>
  )
}

export default CartCard