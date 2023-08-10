'use client'
import React, { use, useEffect } from 'react'
import Image from 'next/image'
import { apiGetWallets, apiUpdateWallet } from '@/services/AdminService'
import usePost from '@/hooks/usePost'
import { IWallet } from '@/interfaces'
import useFetch from '@/hooks/useFetch'
import { set } from 'mongoose'
// import { useSession } from 'next-auth/react'


const Wallets = () => {
  // const { data } = useSession()
  const [data, setData] = React.useState<IWallet[]>([])
  const [address, setAddress] = React.useState('')
  const [name, setName] = React.useState('')
  const [qr_code, setQrCode] = React.useState('gf')

  const { data: wallets, error, isLoading, isFetching, remove, refetch, fetchStatus } = useFetch<IWallet[]>({api: apiGetWallets, key: ['wallets'] })

  useEffect(() => {
    if (wallets) {
      setData(wallets)
    }
  }, [wallets])

  const updateWalletMutation = usePost<IWallet, any>(apiUpdateWallet, {
    onSuccess: (data) => {
      console.log(data)
      refetch()
    },
    onError: (error) => {
      console.log(error)
    }   
  })


  console.log( { wallets  })

  const handleUpdateOne = (id: string) => {
    updateWalletMutation.mutate({ 
      name: 'BTC',
      address: '1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2',
      qr_code: 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2'
     })
  }

  const handleWalletAddress = (e: React.ChangeEvent<HTMLInputElement>, wallet: IWallet) => {
    setData(prev => prev.map((w) => {
      if (w._id === wallet._id) {
        return {
          ...w,
          address: e.target.value
        }
      }
      return w
    }))
  }
  const handleWalletQr = (e: React.ChangeEvent<HTMLInputElement>, wallet: IWallet) => {
    setData(prev => prev.map((w) => {
      if (w._id === wallet._id) {
        return {
          ...w,
          qr_code: e.target.value
        }
      }
      return w
    }))
  }

  const updateWallet = (wallet: IWallet) => {
    updateWalletMutation.mutate(wallet)
  }

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
        <h2 className='mb-6 text-lg font-semibold'>Wallets Admin</h2>
        
        <div className="flex flex-col gap-10">
          {
            data?.map((wallet, index) => (
              <div key={index} className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
                <span>{wallet.name} Wallet</span>
                <input value={wallet.address} onChange={(e) => handleWalletAddress(e, wallet)} type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                <span>{wallet.name} QR CODE</span>
                <input onChange={(e) => handleWalletQr(e, wallet)} type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
                <Image alt={`${wallet.name} qr`} src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
                <button className='p-2 px-4 mx-auto mt-4 text-white rounded-md w-fit bg-primary' onClick={() => updateWallet(wallet)}>Update</button>
              </div>
            ))
          }
        </div>
    </main>
  )
}

export default Wallets
          // <div className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
          //   <span>BTC Wallet</span>
          //   <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <span>BTC QR CODE</span>
          //   <input type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <Image alt='btc qr' src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
          // </div>
          // <div className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
          //   <span>ETH Wallet</span>
          //   <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <span>ETH QR CODE</span>
          //   <input type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <Image alt='btc qr' src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
          // </div>
          // <div className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
          //   <span>BNB Wallet</span>
          //   <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <span>BNB QR CODE</span>
          //   <input type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <Image alt='btc qr' src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
          // </div>
          // <div className="flex flex-col items-center gap-2 p-4 border border-black rounded-md">
          //   <span>SOL Wallet</span>
          //   <input type="text" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <span>SOL QR CODE</span>
          //   <input type="file" name="" id="" className='p-1.5 rounded-md border border-black w-full' />
          //   <Image alt='btc qr' src={''} width={100} height={100} className='w-48 h-48 bg-gray-200' />
          // </div>