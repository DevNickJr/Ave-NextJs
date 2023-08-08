'use client'
import React from 'react'
import Image from 'next/image'
// import { useSession } from 'next-auth/react'


const Wallets = () => {
  // const { data } = useSession()


  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
        <h2 className='mb-6 text-lg font-semibold'>Wallets Admin</h2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
            <span>BTC Wallet</span>
            <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
            <span>BTC QR CODE</span>
            <input type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
            <Image alt='btc qr' src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
          </div>
          <div className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
            <span>ETH Wallet</span>
            <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
            <span>ETH QR CODE</span>
            <input type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
            <Image alt='btc qr' src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
          </div>
          <div className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
            <span>BNB Wallet</span>
            <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
            <span>BNB QR CODE</span>
            <input type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
            <Image alt='btc qr' src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
          </div>
          <div className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
            <span>SOL Wallet</span>
            <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
            <span>SOL QR CODE</span>
            <input type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
            <Image alt='btc qr' src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
          </div>
          <button className='p-2 px-4 mx-auto text-white rounded-md w-fit bg-primary'>Update</button>
        </div>
    </main>
  )
}

export default Wallets