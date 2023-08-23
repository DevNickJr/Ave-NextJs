'use client'
import useFetch from '@/hooks/useFetch'
import usePost from '@/hooks/useMutation'
import { IWithdrawal } from '@/interfaces'
import { apiGetUserWithdrawals, apiWithdrawal } from '@/services/UserService'
import { formatDate } from '@/utils/dateFunc'
import { useSession } from 'next-auth/react'
import React from 'react'
import { IPageContent } from '@/dictionaries/dashboard/withdraw'
import { DashboardWithdrawContent } from '@/dictionaries/dashboard/withdraw'
import { useTranslation } from '@/hooks/useTranslationContext'
import { useAuthContext } from '@/hooks/useAuthContext'
import { BiLeftArrow } from 'react-icons/bi'
import GentleLoader from '@/components/GentleLoader'


const Withdrawal = () => {
  const { language } = useTranslation()
  const [t, setTranslated] = React.useState<IPageContent | null>(null)

  React.useEffect(() => {
    setTranslated(DashboardWithdrawContent[language])
  }, [language])


  // const session = useSession()
  // const user = session.data?.user
  const context = useAuthContext()
  const user = context?.user

  const [step, setStep] = React.useState(1)
  const [amount, setAmount] = React.useState('')
  const [wallet, setWallet] = React.useState('')

  const { data: withdrawals, error: withdrawalsError, isLoading: withdrawalsLoading, refetch } = useFetch<IWithdrawal[]>({api: apiGetUserWithdrawals, param: user?._id, key: ['userWithdrawals'] })

  console.log({ withdrawals})

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
      // proof: 'image_to_firebase',      
    })
  }

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      {
        withdrawalMutation.isLoading && <GentleLoader />
      }
      <h2 className='mb-6 text-lg font-semibold'>{t?.title || "Withdrawal"}</h2>
      {step === 1 && (
        <>
          <div className='grid gap-4 mb-6 md:grid-cols-2 lg:grid-cols-3'>
            <div onClick={() => setStep(2)} className="cursor-pointer flex flex-col gap-1 p-4 bg-primary text-white rounded-md shadow-md min-w-[200px]">
              <p className='font-semibold'>{t?.subtitle || "Withdraw Funds"}</p>
              <p className='text-xs'>{t?.subtitle_text || "click to initiate withdrawal"}</p>
            </div>
          </div>
          <div className="p-5 bg-white rounded-md">
            <h4 className='mb-2 font-semibold'>{t?.transactions || "Recent Transactions"}</h4>
            {
              withdrawals?.length ?
                withdrawals?.map((withdrawal) =>
                  <div key={withdrawal._id} className='p-2'>
                    <div className="flex justify-between flex-items-center">
                      <span>{t?.sent_withdraw || "sent withdrawal request"}</span>
                      <span>{withdrawal.status}</span>
                    </div>
                    <div className="flex justify-between flex-items-center">
                      <span>{formatDate(withdrawal.createdAt)}</span>
                      <span>${withdrawal.amount}</span>
                    </div>
                  </div>
                 ) : (
                  <div className="flex justify-center">
                    <span className='text-gray-500'>{t?.no_transactions || "No recent transactions"}</span>
                  </div>
              )   
            }
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <h4 className='flex items-center gap-4 mb-4 font-semibold'>
              <BiLeftArrow className={'cursor-pointer'} onClick={() => setStep(1)} size={"1.3rem"} />
            </h4>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col flex-1 gap-4 p-5 bg-white rounded-md">
              <input onChange={(e) => setAmount(e.target.value)} type="text" className='p-3 rounded-md' placeholder={t?.amount || 'Enter Amount'} />
              <input onChange={(e) => setWallet(e.target.value)} type="text" className='p-3 rounded-md' placeholder={t?.wallet || 'Enter BTC Wallet'} />
          <button className='p-3 px-4 mt-8 text-white rounded-md cursor-pointer bg-primary' onClick={handleWithdrawal}>{t?.submit || "Submit"}</button>
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