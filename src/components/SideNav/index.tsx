'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdOutlineDashboardCustomize, MdLogout, MdSettings } from 'react-icons/md'
import { signOut } from "next-auth/react"
import { AiOutlineHome } from 'react-icons/ai'
import { RiLuggageDepositLine } from 'react-icons/ri'
import { BiMoneyWithdraw } from 'react-icons/bi'
import { BsBarChart } from 'react-icons/bs'
import { useAuthContext } from '@/hooks/useAuthContext'

// import { useSession, signIn, signOut } from "next-auth/react"


const SideNav = ({ }) => {
    const pathname = usePathname();
    const { dispatch } = useAuthContext()
    // console.log({pathname})

  return (
    <div className='no-scrollbar hidden sm:flex flex-col justify-between grad-to-bottom max-h-screen overflow-hidden h-screen min-w-[240px] w-60 pb-4 grad-to-right text-white'>
        <div>
            <div className='flex flex-col items-center w-full gap-5 py-5 text-center border-b border-white/10'>
                <Link href={"/dashboard/"} className='text-2xl font-semibold'>
                    {/* <Image src={Logo} className='w-full h-12 bg-white md:h-12' alt='' /> */}
                    Avestore
                </Link>
            </div>
            <div className='flex flex-col gap-2 pt-12 pb-2'>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${(pathname === '/admin') && 'font-bold'}`} href="/dashboard">
                    <AiOutlineHome size={"1.3rem"} />
                    Home
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("accounts") && 'font-bold'}`} href={"/dashboard/accounts"}>
                    <MdOutlineDashboardCustomize size={"1.3rem"} />
                    Account
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("invest") && 'font-bold'}`} href={"/dashboard/invest"}>
                    <BsBarChart size={"1.3rem"} />
                    Invest
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("deposit") && 'font-bold'}`} href={"/dashboard/deposit"}>
                    <RiLuggageDepositLine size={"1.3rem"} />
                    Deposit
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("withdrawal") && 'font-bold'}`} href={"/dashboard/withdrawal"}>
                    <BiMoneyWithdraw size={"1.3rem"} />
                    Withdrawal
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("settings") && 'font-bold'}`} href={"/dashboard/settings"}>
                    <MdSettings size={"1.3rem"} />
                    Settings
                </Link>
            </div>
        </div>
        <div className='flex flex-col gap-10 pb-2 underline'>
            <div onClick={() => dispatch({type: "LOGOUT", payload: ''})} className={`py-2.5 pl-6 text-sm flex items-center gap-2 cursor-pointer`}>
                <MdLogout size={"1.3rem"} />
                Logout
            </div>
            {/* <div className='px-6'>
                <div className={`p-2.5 text-sm flex flex-col gap-4 bg-primaryDark text-white rounded-md`}>
                    <div className='flex items-center gap-4'>
                        <AiOutlineCopyrightCircle size={"1.3rem"} />
                        <p className='text-sm'>Eduverse. 2023</p>
                    </div>
                    <p className='text-[10px] leading-tight'>
                        An Online learning platform for to Lecturers to verify all students in a particular department
                    </p>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default SideNav