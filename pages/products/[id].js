import React from 'react'
import Image from 'next/future/image'
import { AiFillStar } from "react-icons/ai"

const Id = () => {
    let rating = 4.3
    let stars = [];
    if (rating >= 4.5 && rating <= 5) {
        rating = parseInt(rating)
        for (let index = 0; index <= parseInt(rating); index++) {
            stars.push(<AiFillStar />)
        }
    }
    else if (rating >= 4 && rating < 4.5) {
        rating = parseInt(rating) - 1
        for (let index = 0; index <= parseInt(rating); index++) {
            stars.push(<AiFillStar />)
        }
    }
    else if (rating >= 3.5 && rating <= 4) {
        rating = parseInt(rating)
        for (let index = 0; index <= parseInt(rating); index++) {
            stars.push(<AiFillStar />)
        }
    }
    else if (rating >= 3 && rating <= 3.5) {
        rating = parseInt(rating) - 1
        for (let index = 0; index <= parseInt(rating); index++) {
            stars.push(<AiFillStar />)
        }
    }
    else if (rating >= 2.5 && rating <= 3) {
        rating = parseInt(rating)
        for (let index = 0; index <= parseInt(rating); index++) {
            stars.push(<AiFillStar />)
        }
    }
    else if (rating >= 2 && rating <= 2.5) {
        rating = parseInt(rating) - 1
        for (let index = 0; index <= parseInt(rating); index++) {
            stars.push(<AiFillStar />)
        }
    }
    else if (rating >= 1.5 && rating <= 2) {
        rating = parseInt(rating)
        for (let index = 0; index <= parseInt(rating); index++) {
            stars.push(<AiFillStar />)
        }
    }
    else if (rating >= 1 && rating <= 1.5) {
        rating = parseInt(rating) - 1
        for (let index = 0; index <= parseInt(rating); index++) {
            stars.push(<AiFillStar />)
        }
    }

  return (
    <div className='flex md:flex-row justify-center md:text-left text-center flex-col h-[88vh] w-full overflow-y-auto'>
        <div>
            <Image src='https://images-eu.ssl-images-amazon.com/images/I/410iWt8d79L._AC_SR400,600_.jpg' alt="image" width={500} height={500} priority={true} quality={100} className="w-[200px] md:w-[500px] mx-auto" />
        </div>
        <div className='md:pt-20 p-5'>
            <p className='uppercase text-[#ff9900] font-light tracking-widest'>men&#39;s clothing</p>
            <h1 className='md:text-2xl xl:text-3xl text-xl font-bold'>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1>
            <p className='md:text-xl texl-sm py-2'>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
            <div className='flex items-center flex-wrap space-x-3 md:justify-start justify-center'>
                <span className='md:text-xl xl:text-2xl font-semibold '>&#8377; 74,999</span>
                <span className='text-2xl flex items-center text-[#ffbf00]'>
                    {stars.map((star)=> {
                        return (
                            <span key={stars.indexOf(star)}>{star}</span>
                        )
                    })}
                </span>
            </div>
            <div className='space-x-5 mt-5'>
                <button className='px-4 py-2 bg-gradient-to-b from-[#ffd900] to-[#ffb300] hover:bg-gradient-to-t transition-all rounded-md text-white'>Buy Now</button>
                <button className='px-4 py-2 bg-gradient-to-b from-[#ffd900] to-[#ffb300] hover:bg-gradient-to-t transition-all rounded-md text-white'>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default Id