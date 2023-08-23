'use client'
import React from 'react'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineDashboard } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { RiLuggageDepositLine } from 'react-icons/ri'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { BsBarChart } from 'react-icons/bs'


const BottomNav = () => {
  const pathname = usePathname()

  console.log('path', pathname)

  return (
    <>
      <header className='fixed bottom-0 left-0 z-10 flex items-center justify-between w-full pt-2 text-white shadow-md grad-to-right md:py-5 md:px-10 lg:px-24 sm:hidden'>
        <nav className="flex items-center w-full gap-x-14 md:gap-4 lg:gap-7">
          <ul className='flex items-center justify-between w-full gap-2 text-xs font-medium text-dark-light md:gap-4 lg:gap-7'>
            <li className={`flex-1 ${pathname==="/dashboard" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/dashboard" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <AiOutlineHome className='text-xl' />
                    Home
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/dashboard/accounts" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/dashboard/accounts" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <MdOutlineDashboard className='text-xl' />
                    Account
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/dashboard/invest" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/dashboard/invest" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <BsBarChart className='text-xl' />
                    Invest
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/dashboard/deposit" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/dashboard/deposit" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <RiLuggageDepositLine className='text-xl' />
                    Deposit
                </Link>
            </li>
            <li className={`flex-1 ${pathname==="/dashboard/withdrawal" ? "text-primary font-bold" : "text-white/90"}`}>
                <Link href="/dashboard/withdrawal" className={`pb-1.5 px-1 font-medium flex flex-col justify-center items-center`}>
                    <BiMoneyWithdraw className='text-xl' />
                    Withdraw
                </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default BottomNav