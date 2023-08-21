'use client'
import React from 'react'
import useFetch from '@/hooks/useFetch'
import { apiDeposit, apiGetUserDeposits, apiGetWallets } from '@/services/UserService'
import { IDeposit, IWallet } from '@/interfaces'
import { useSession } from 'next-auth/react'
import usePost from '@/hooks/useMutation'
import { formatDate } from '@/utils/dateFunc'
import { BiLeftArrow } from 'react-icons/bi'
// import { useSession } from 'next-auth/react'


const Deposit = () => {
  const session = useSession()
  const user = session.data?.user
  const [step, setStep] = React.useState(1)
  const [choice, setChioce] = React.useState('')
  const [amount, setAmount] = React.useState('')
  const [proof, setProof] = React.useState('')
  const [paymentMethod, setPaymentMethod] = React.useState('')

  const { data: wallets, error, isLoading, isFetching, remove, fetchStatus } = useFetch<IWallet[]>({api: apiGetWallets, key: ['wallets'] })
  
  const { data: deposits, error: depositsError, isLoading: depositsLoading, refetch } = useFetch<IDeposit[]>({api: apiGetUserDeposits, param: user?._id, key: ['userDeposits'] })

// console.log({ deposits})

  const depositMutation = usePost<IDeposit, any>(apiDeposit, {
    onSuccess: (data) => {
      console.log(data)
      refetch()
      setStep(1)
    },
    onError: (error) => {
      console.log(error)
    }   
  })

  const handleDeposit = () => {
    depositMutation.mutate({
      email: user?.email!,      
      userId: user?._id!,
      wallet: paymentMethod,
      amount: +amount,
      proof: 'image_to_firebase',      
    })
  }
  // const { data } = useSession()


  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      <h2 className='mb-6 text-lg font-semibold'>Deposit</h2>
      {step === 1 && (
        <>
          <div className='grid gap-4 mb-6 mb-12 md:grid-cols-2 lg:grid-cols-3'>
            <div onClick={() => setStep(2)} className="cursor-pointer flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
              <p className='font-bold text-primary'>Fund Via Cryto Wallet</p>
              <p className='text-xs'>click to view address details</p>
            </div>
            <div onClick={() => setStep(3)} className="cursor-pointer flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
              <p className='font-bold text-primary'>Fund Via Local Bank</p>
              <p className='text-xs'>click to view bank options</p>
            </div>
            <div onClick={() => setStep(4)} className="cursor-pointer flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
              <p className='font-bold text-primary'>Submit Proof</p>
              <p className='text-xs'>click to submit payment proof</p>
            </div>
          </div>
          <div className="p-5 bg-white rounded-md">
            <h4 className='mb-2 font-semibold'>Recent Transactions</h4>
            {
              deposits?.length ?
                deposits?.map(deposit =>
                  <div key={deposit._id} className='p-2'>
                    <div className="flex justify-between flex-items-center">
                      <span>sent proof of payment</span>
                      <span>{deposit.status}</span>
                    </div>
                    <div className="flex justify-between flex-items-center">
                      <span>{formatDate(deposit.createdAt)}</span>
                      <span>${deposit.amount}</span>
                    </div>
                  </div>
              ): (
                <div className="flex justify-center">
                  <span className='text-gray-500'>No recent transactions</span>
                </div>
            )}
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <h4 className='flex items-center gap-4 mb-4 text-xs font-semibold'>
            <BiLeftArrow className={'cursor-pointer'} onClick={() => setStep(1)} size={"1.3rem"} />
            Cryto Wallets
          </h4>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col flex-1 gap-4 p-5 bg-white rounded-md">
              <select onChange={(e) => setChioce(e.target.value)} name="" id="">
                <option value="">Choose a payment method</option>
                {wallets?.map(wallet => 
                  <option key={wallet.name} value={wallet.name}>{wallet.name}</option>
                )}
              </select>
              {
                choice && 
                  <div className='flex flex-col gap-4'>
                    <p>Click the icon below to copy the wallet address or scan the QR-code and procced to payment</p>
                    <div className="w-48 h-48 bg-gray-100">
                      {wallets?.find(wallet => wallet.name === choice)?.qr_code}
                    </div>
                    <div className="w-full p-2 text-center rounded-md">
                      {wallets?.find(wallet => wallet.name === choice)?.address}
                    </div>
                    <p>Click the icon below to copy the wallet address or scan the QR-code and procced to payment</p>
                    <button className='p-3 px-4 mt-8 text-white rounded-md cursor-pointer bg-primary' onClick={() => setStep(4)}>Next</button>
                  </div>
                  
              }
            </div>
            <div className="flex-1 p-5 bg-gray-100 rounded-md shadow-md">
            </div>
          </div>
        </>
      )}
      {step === 3 && (
        <>
         <h4 className='flex items-center gap-4 mb-4 text-xs font-semibold'>
            <BiLeftArrow className={'cursor-pointer'} onClick={() => setStep(1)} size={"1.3rem"} />
            Bank Details
          </h4>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col flex-1 gap-4 p-5 bg-white rounded-md">
              <select onChange={(e) => setChioce(e.target.value)} name="" id="">
                <option value="">Choose a Bank</option>
                {wallets?.map(wallet => 
                  <option key={wallet.name} value={wallet.name}>{wallet.name}</option>
                )}
              </select>
              <div className='flex flex-col gap-4'>
                <p>Make a transfer or deposit to the details below</p>
                <div className="w-48 h-48 bg-gray-100">
                  {wallets?.find(wallet => wallet.name === choice)?.qr_code}
                </div>
                <div className="w-full p-2 text-center rounded-md">
                  {wallets?.find(wallet => wallet.name === choice)?.address}
                </div>
                <button className='p-3 px-4 mt-8 text-white rounded-md cursor-pointer bg-primary' onClick={() => setStep(4)}>Next</button>
              </div>
                  
            </div>
            <div className="flex-1 p-5 bg-gray-100 rounded-md shadow-md">
            </div>
          </div>
        </>
      )}
      {step === 4 && (
        <>
         <h4 className='flex items-center gap-4 mb-4 text-xs font-semibold'>
            <BiLeftArrow className={'cursor-pointer'} onClick={() => setStep(1)} size={"1.3rem"} />
            Payment Proof
          </h4>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col flex-1 gap-4 p-5 bg-white rounded-md">
              <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className='p-3 rounded-md' placeholder='Enter Amount' />
              <select onChange={(e) => setPaymentMethod(e.target.value)} className='p-3 rounded-md' name="" id="">
              <option value="">Choose a payment method</option>
                {wallets?.map(wallet => 
                  <option key={wallet.name} value={wallet.name}>{wallet.name}</option>
                )}
              </select>
              <input type="file" className='rounded-md' placeholder='Upload' />
          <button className='p-3 px-4 mt-8 text-white rounded-md cursor-pointer bg-primary' onClick={handleDeposit}>Submit</button>
            </div>
            <div className="flex-1 p-5 bg-gray-100 rounded-md shadow-md">
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default Deposit