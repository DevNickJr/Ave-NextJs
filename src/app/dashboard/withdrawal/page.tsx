'use client'
import React from 'react'
// import { useSession } from 'next-auth/react'


const Withdrawal = () => {
  // const { data } = useSession()


  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      <h2 className='mb-6 text-lg font-semibold'>Withdrawal</h2>
      <div className='grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3'>
        <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
          <p>$0.00</p>
          <p>Bonus</p>
        </div>
      </div>
      <div className="p-5 bg-white rounded-md">
        <h4 className='mb-2 font-semibold'>Recent Transactions</h4>
        <div className='p-2'>
          <div className="flex justify-between flex-items-center">
            <span>send proof of payment</span>
            <span>pending</span>
          </div>
          <div className="flex justify-between flex-items-center">
            <span>7 August, 2023</span>
            <span>$50,000</span>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Withdrawal