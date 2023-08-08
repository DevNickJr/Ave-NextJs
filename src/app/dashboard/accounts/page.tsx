'use client'
import React from 'react'
// import { useSession } from 'next-auth/react'


const Account = () => {
  // const { data } = useSession()


  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
        <h2 className='mb-6 text-lg font-semibold'>Welcome, Nicholas Duadei</h2>
        <div className='flex flex-col gap-4 mb-12 lg:flex-row'>
            <div className="flex flex-col flex-1 gap-4 p-5 text-sm bg-white rounded-md shadow-md">
                <span>Regular Account</span>
                <p>$0.00</p>
                <span>Total Earnings</span>
                <p>$0.00</p>
                <button className='p-2 px-3 text-sm text-white bg-primary'>Start Investment</button>
            </div>
        </div>
        <div className='grid gap-4 mb-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:flex-row'>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p>$0.00</p>
            <p>Bonus</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p>$0.00</p>
            <p>Bonus</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p>$0.00</p>
            <p>Bonus</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p>$0.00</p>
            <p>Bonus</p>
          </div>
        </div>
      
    </main>
  )
}

export default Account