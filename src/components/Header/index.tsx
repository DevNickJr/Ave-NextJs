'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import Logo1 from '@/assets/logo1.png'
import Logo2 from '@/assets/logo3.png'



const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  // console.log({ pathname })

  return (
    <>
      <header className='bg-white text-black shadow-md flex items-center justify-between py-2 px-4 md:py-5 md:px-10 lg:px-24 fixed top-0 left-0 z-20 w-full min-h-[50px]'>
        <Link href={"/"}>
          <Image src={Logo1} alt="Avestock" className='w-12 h-8 md:h-12' />
          {/* <span className='h-8 md:h-12'>Avestock</span> */}
        </Link>
        <nav className="items-center hidden md:flex gap-x-14 md:gap-4 lg:gap-7">
          <ul className='flex flex-col items-center text-sm font-medium md:flex-row text-dark-light gap-7 md:gap-4 lg:gap-7'>
            <li><Link href="/" className={`pb-1.5 px-1 font-medium ${pathname==="/" && "text-primary border-b-2 border-primary"}`}>Home</Link></li>
            <li><Link href="/about" className={`pb-1.5 px-1 font-medium ${pathname==="/about" && "text-primary border-b-2 border-primary"}`}>About</Link></li>
            <li><Link href="/contact" className={`pb-1.5 px-1 font-medium ${pathname==="/contact" && "text-primary border-b-2 border-primary"}`}>Contact</Link></li>
            <li><Link href="/login" className={`pb-1.5 px-1 font-medium ${pathname==="/login" && "text-primary border-b-2 border-primary"}`}>Login</Link></li>
            <li><Link href="/register" className={`pb-1.5 px-1 font-medium ${pathname==="/register" && "text-primary border-b-2 border-primary"}`}>Register</Link></li>
            {/* {!user ? 
            <li><Link href="/login" className={`border-b-2 pb-1.5 px-1 font-medium`}>Login</Link></li>
            :
            <li>
              <div onClick={() => dispatch({type: "LOGOUT"})} className='px-1 font-medium cursor-pointer'>
                 Logout
              </div>
            </li>
            } */}
          </ul>
        </nav>
        { <BiMenu onClick={() => setIsOpen(true)} className='relative z-50 text-3xl font-bold cursor-pointer md:hidden text-primary' />
        }
      </header>
      <div onClick={() => setIsOpen(false)} className={`md:hidden shadow fixed top-0 left-0 w-full min-h-screen h-screen bg-black/10 px-4 py-2 md:px-10 z-30  ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300`}>
        <div className={`md:hidden shadow fixed top-0 left-0 w-5/6 min-h-screen h-screen grad-to-right text-white px-4 py-2 md:px-10 z-30  ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-all duration-300`}>
          <nav className="flex flex-col gap-16 p-4 px-8 pt-40 mb-8 text-lg md:hidden">
            <ul className='flex flex-col text-sm font-medium text-dark-light gap-7 md:gap-4 lg:gap-7'>
              <li><Link href="/" className={`text-lg pb-1.5 px-1 font-medium ${pathname==="/" && "text-primary border-b-2 border-primary"}`}>Home</Link></li>
              <li><Link href="/about" className={`text-lg pb-1.5 px-1 font-medium ${pathname==="/about" && "text-primary border-b-2 border-primary"}`}>About</Link></li>
              <li><Link href="/contact" className={`text-lg pb-1.5 px-1 font-medium ${pathname==="/contact" && "text-primary border-b-2 border-primary"}`}>Contact</Link></li>
              <li><Link href="/login" className={`text-lg pb-1.5 px-1 font-medium ${pathname==="/login" && "text-primary border-b-2 border-primary"}`}>Login</Link></li>
              <li><Link href="/register" className={`text-lg pb-1.5 px-1 font-medium ${pathname==="/register" && "text-primary border-b-2 border-primary"}`}>Register</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header