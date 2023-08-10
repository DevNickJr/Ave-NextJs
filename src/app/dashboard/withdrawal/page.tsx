'use client'
import useFetch from '@/hooks/useFetch'
import usePost from '@/hooks/usePost'
import { IWithdrawal } from '@/interfaces'
import { apiGetUserWithdrawals, apiWithdrawal } from '@/services/UserService'
import { formatDate } from '@/utils/dateFunc'
import { useSession } from 'next-auth/react'
import React from 'react'
// import { useSession } from 'next-auth/react'


const Withdrawal = () => {
  const session = useSession()
  const user = session.data?.user
  const [step, setStep] = React.useState(1)
  const [amount, setAmount] = React.useState('')
  const [wallet, setWallet] = React.useState('')

  const { data: withdrawals, error: withdrawalsError, isLoading: withdrawalsLoading, refetch } = useFetch<IWithdrawal[]>({api: apiGetUserWithdrawals, param: user?._id, key: ['userWithdrawals'] })

  // console.log({ withdrawals})

  const withdrawalMutation = usePost<IWithdrawal, any>(apiWithdrawal, {
    onSuccess: (data) => {
      console.log(data)
      refetch()
      setStep(1)
    },
    onError: (error) => {
      console.log(error)
    }   
  })

  const handleWithdrawal = () => {
    withdrawalMutation.mutate({
      email: user?.email!,      
      userId: user?._id!,
      wallet,
      amount: +amount,
      proof: 'image_to_firebase',      
    })
  }

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      <h2 className='mb-6 text-lg font-semibold'>Withdrawal</h2>
      {step === 1 && (
        <>
          <div className='grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3'>
            <div onClick={() => setStep(2)} className="cursor-pointer flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
              <p>$0.00</p>
              <p>Bonus</p>
            </div>
          </div>
          <div className="p-5 bg-white rounded-md">
            <h4 className='mb-2 font-semibold'>Recent Transactions</h4>
            {
              withdrawals?.length ?
                withdrawals?.map((withdrawal) =>
                  <div key={withdrawal._id} className='p-2'>
                    <div className="flex justify-between flex-items-center">
                      <span>sent withdrawal request</span>
                      <span>{withdrawal.status}</span>
                    </div>
                    <div className="flex justify-between flex-items-center">
                      <span>{formatDate(withdrawal.createdAt)}</span>
                      <span>${withdrawal.amount}</span>
                    </div>
                  </div>
                 ) : (
                  <div className="flex justify-center">
                    <span className='text-gray-500'>No recent transactions</span>
                  </div>
              )   
            }
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col flex-1 gap-4 p-5 bg-white rounded-md">
              <input onChange={(e) => setAmount(e.target.value)} type="text" className='p-3 rounded-md' placeholder='Enter Amount' />
              <input onChange={(e) => setWallet(e.target.value)} type="text" className='p-3 rounded-md' placeholder='Enter Wallet' />
              {/* <select className='p-3 rounded-md' name="" id="">
                <option value="">Choose a payment method</option>
                <option value="">Bitcoin</option>
                <option value="">Ethereum</option>
              </select> */}
              <input type="file" className='rounded-md' placeholder='Upload' />
          <button className='p-3 px-4 mt-8 text-white rounded-md cursor-pointer bg-primary' onClick={handleWithdrawal}>Submit</button>
            </div>
            <div className="flex-1 p-5 bg-gray-100 rounded-md shadow-md">
            </div>
          </div>
        </>
      )}
    </main>
  )
}

export default Withdrawal