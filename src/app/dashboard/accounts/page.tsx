'use client'
import React from 'react'
import { useSession } from 'next-auth/react'


const Account = () => {
  const session = useSession()
  const user = session.data?.user



  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
        <h2 className='mb-6 text-lg font-semibold'>Account</h2>
        <div className='flex flex-col gap-4 mb-12 lg:flex-row'>
            <div className="flex flex-col flex-1 gap-4 p-5 text-sm bg-white rounded-md shadow-md">
                <span>Regular Account</span>
                <p>${user?.balance || '0.00'}</p>
                <span>Total Earnings</span>
                <p>${user?.balance || '0.00'}</p>
                <button className='p-2 px-3 text-sm text-white bg-primary'>Start Investment</button>
            </div>
        </div>
        <div className='grid gap-4 mb-12 text-sm font-semibold sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:flex-row'>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p className='text-lg'>${user?.bonus || '0.00'}</p>
            <p>Bonus</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p className='text-lg'>${user?.total_deposit || '0.00'}</p>
            <p>Total Deposit</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p className='text-lg'>${user?.total_withdrawal || '0.00'}</p>
            <p>Total Withdrawal</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p className='text-lg'>0</p>
            <p>Total Referral</p>
          </div>
        </div>
      
    </main>
  )
}

export default Account