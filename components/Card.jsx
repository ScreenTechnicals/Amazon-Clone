import Image from 'next/future/image'
import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <Link href={`/products/4`}>
      <div className='sm:w-[250px] flex flex-col justify-center items-center cursor-pointer hover:scale-90 transition-transform'>
        <div className='bg-white border px-5 rounded-xl shadow-sm'>
          <Image src='https://images-eu.ssl-images-amazon.com/images/I/410iWt8d79L._AC_SR400,600_.jpg' alt="image" width={200} height={200} priority={true} quality={100} />
        </div>
        <div>
          <h2 className='font-semibold'>Samsung Galaxy S20 FE 5G</h2>
          <h2 className='font-semibold space-x-4'><span>&#8377; 29,999</span></h2>
        </div>
    </div>
    </Link>
  )
}

export default Card