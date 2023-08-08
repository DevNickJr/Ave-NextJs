'use client'
import React from 'react'
import Image from 'next/image'
// import { useSession } from 'next-auth/react'


const Plans = () => {
  // const { data } = useSession()


  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
        <h2 className='mb-6 text-lg font-semibold'>Plans Admin</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 p-4">
            <h2 className='py-2 text-2xl border-b border-black'>Basic Plan</h2>
            <div className="flex flex-col max-w-xs gap-4 pt">
              <div className="flex flex-col gap-1">
                <span>Minimum Deposit</span>
                <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
              </div>
              <div className="flex flex-col gap-1">
                <span>Maximum Deposit</span>
                <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
              </div>
              <div className="flex flex-col gap-1">
                <span>Daily Income</span>
                <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
              </div>
            </div>
            <button className='p-2 px-4 mt-3 text-white rounded-md w-fit bg-primary'>Update</button>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <h2 className='py-2 text-2xl border-b border-black'>Professional Plan</h2>
            <div className="flex flex-col max-w-xs gap-4 pt">
              <div className="flex flex-col gap-1">
                <span>Minimum Deposit</span>
                <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
              </div>
              <div className="flex flex-col gap-1">
                <span>Maximum Deposit</span>
                <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
              </div>
              <div className="flex flex-col gap-1">
                <span>Daily Income</span>
                <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
              </div>
            </div>
            <button className='p-2 px-4 mt-3 text-white rounded-md w-fit bg-primary'>Update</button>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <h2 className='py-2 text-2xl border-b border-black'>Elite Plan</h2>
            <div className="flex flex-col max-w-xs gap-4 pt">
              <div className="flex flex-col gap-1">
                <span>Minimum Deposit</span>
                <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
              </div>
              <div className="flex flex-col gap-1">
                <span>Maximum Deposit</span>
                <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
              </div>
              <div className="flex flex-col gap-1">
                <span>Daily Income</span>
                <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
              </div>
            </div>
            <button className='p-2 px-4 mt-3 text-white rounded-md w-fit bg-primary'>Update</button>
          </div>
        </div>
    </main>
  )
}

export default Plans