import Image from 'next/future/image'
import React from 'react'

const OrderCard = () => {
  return (
    <div className='w-full p-5 border rounded-xl shadow-md'>
        <div className='flex justify-between space-x-3'>
            <div>
                <p className='uppercase md:text-lg text-sm'>order id</p>
                <p className='text-xs text-gray-600'>#4wertyuh90786tuygjhfyugh</p>
            </div>
            <div>
                <p className='uppercase md:text-lg text-sm'>Date</p>
                <p className='text-xs text-gray-600'>Mar 18 2022</p>
            </div>
        </div>
        <div className='flex flex-wrap items-center'>
            <div>
                <Image src='https://images-eu.ssl-images-amazon.com/images/I/410iWt8d79L._AC_SR400,600_.jpg' alt="image" width={100} height={100} priority={true} quality={100} />
            </div>
            <div>
                <Image src='https://images-eu.ssl-images-amazon.com/images/I/410iWt8d79L._AC_SR400,600_.jpg' alt="image" width={100} height={100} priority={true} quality={100} />
            </div>
            <div>
                <Image src='https://images-eu.ssl-images-amazon.com/images/I/410iWt8d79L._AC_SR400,600_.jpg' alt="image" width={100} height={100} priority={true} quality={100} />
            </div>
            <div>
                <Image src='https://images-eu.ssl-images-amazon.com/images/I/410iWt8d79L._AC_SR400,600_.jpg' alt="image" width={100} height={100} priority={true} quality={100} />
            </div>
            <div>
                <Image src='https://images-eu.ssl-images-amazon.com/images/I/410iWt8d79L._AC_SR400,600_.jpg' alt="image" width={100} height={100} priority={true} quality={100} />
            </div>
            <div>
                <Image src='https://images-eu.ssl-images-amazon.com/images/I/410iWt8d79L._AC_SR400,600_.jpg' alt="image" width={100} height={100} priority={true} quality={100} />
            </div>
            <div>
                <Image src='https://images-eu.ssl-images-amazon.com/images/I/410iWt8d79L._AC_SR400,600_.jpg' alt="image" width={100} height={100} priority={true} quality={100} />
            </div>
        </div>
    </div>
  )
}

export default OrderCard