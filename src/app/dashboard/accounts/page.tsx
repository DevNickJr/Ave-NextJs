'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { IPageContent } from '@/dictionaries/dashboard/accounts'
import { DashboardAccountContent } from '@/dictionaries/dashboard/accounts'
import { useTranslation } from '@/hooks/useTranslationContext'


const Account = () => {
  const session = useSession()
  const user = session.data?.user

  const { language } = useTranslation()
  const [t, setTranslated] = React.useState<IPageContent | null>(null)

  React.useEffect(() => {
    setTranslated(DashboardAccountContent[language])
  }, [language])



  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
        <h2 className='mb-6 text-lg font-semibold'>{t?.title || "Account"}</h2>
        <div className='flex flex-col gap-4 mb-12 lg:flex-row'>
            <div className="flex flex-col flex-1 gap-4 p-5 text-sm bg-white rounded-md shadow-md">
                <span>{t?.regular || "Regular Account"}</span>
                <p>${user?.balance || '0.00'}</p>
                <span>{t?.earnings || "Total Earnings"}</span>
                <p>${user?.balance || '0.00'}</p>
                <button className='p-2 px-3 text-sm text-white bg-primary'>{t?.invest || "Start Investment"}</button>
            </div>
        </div>
        <div className='grid gap-4 mb-12 text-sm font-semibold sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:flex-row'>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p className='text-lg'>${user?.bonus || '0.00'}</p>
            <p>{t?.bonus ||"Bonus"}</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p className='text-lg'>${user?.total_deposit || '0.00'}</p>
            <p>{t?.deposits || "Total Deposit"}</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p className='text-lg'>${user?.total_withdrawal || '0.00'}</p>
            <p>{t?.withdrawals || "Total Withdrawal"}</p>
          </div>
          <div className="flex flex-col gap-1 p-4 bg-white rounded-md shadow-md min-w-[200px]">
            <p className='text-lg'>0</p>
            <p>{t?.referrals || "Total Referral"}</p>
          </div>
        </div>
      
    </main>
  )
}

export default Account