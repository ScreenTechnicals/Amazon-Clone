import React from 'react'
import OrderCard from '../components/OrderCard'

const Orders = () => {
  return (
    <div className='w-full h-[88vh] overflow-y-auto p-10 space-y-5'>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
    </div>
  )
}

export default Orders