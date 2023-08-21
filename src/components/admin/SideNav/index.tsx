'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MdOutlineDashboardCustomize, MdLogout, MdOutlineFeedback } from 'react-icons/md'
import { RiTeamLine, RiQuestionnaireLine } from 'react-icons/ri'
import { GiCrownedSkull } from 'react-icons/gi'
import { BsFillPersonFill } from 'react-icons/bs'
import { TiNews } from 'react-icons/ti'
import { FaAward } from 'react-icons/fa'
import { AiTwotoneGold, AiOutlineHome, AiOutlineCopyrightCircle } from 'react-icons/ai'
import Logo from "@/assets/logo.svg"
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"

// import { useSession, signIn, signOut } from "next-auth/react"


const SideNav = ({ }) => {
    const pathname = usePathname();
    // console.log({pathname})

  return (
    <div className='no-scrollbar hidden sm:flex flex-col justify-between grad-to-bottom max-h-screen overflow-hidden h-screen min-w-[240px] w-60 pb-4 grad-to-right text-white'>
        <div>
            <div className='flex flex-col items-center w-full gap-5 py-5 text-center border-b border-white/10'>
                <Link href={"/admin/"} className='text-2xl font-semibold'>
                    {/* <Image src={Logo} className='w-full h-12 bg-white md:h-12' alt='' /> */}
                    Avestore
                </Link>
            </div>
            <div className='flex flex-col gap-2 pt-12 pb-2'>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${(pathname === '/admin') && 'font-bold'}`} href="/admin">
                    <MdOutlineDashboardCustomize size={"1.3rem"} />
                    Manage Users
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("wallets") && 'font-bold'}`} href={"/admin/wallets"}>
                    <GiCrownedSkull size={"1.3rem"} />
                    Manage Wallets
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("trades") && 'font-bold'}`} href={"/admin/trades"}>
                    <RiTeamLine size={"1.3rem"} />
                    Manage Trades
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("deposit") && 'font-bold'}`} href={"/admin/deposit"}>
                    <RiTeamLine size={"1.3rem"} />
                    Manage Deposit
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("withdrawal") && 'font-bold'}`} href={"/admin/withdrawal"}>
                    <RiTeamLine size={"1.3rem"} />
                    Manage Withdrawal
                </Link>
                <Link className={`py-2.5 pl-6 text-sm flex items-center gap-2 ${pathname?.includes("plans") && 'font-bold'}`} href={"/admin/plans"}>
                    <RiTeamLine size={"1.3rem"} />
                    Manage Plans
                </Link>
            </div>
        </div>
        <div className='flex flex-col gap-10 pb-2 underline'>
            <div onClick={() => signOut()} className={`py-2.5 pl-6 text-sm flex items-center gap-2 cursor-pointer`}>
                <MdLogout size={"1.3rem"} />
                Logout
            </div>
        </div>
    </div>
  )
}

export default SideNav