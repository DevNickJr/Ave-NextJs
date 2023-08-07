'use client'
import React from 'react'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'
import { MdOutlineClose } from 'react-icons/md'


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <header className='bg-white shadow-md flex items-center justify-between py-2 px-4 md:py-5 md:px-10 lg:px-24 fixed top-0 left-0 z-20 w-full min-h-[50px]'>
        <Link href={"/"}>
          {/* <img src={Logo} alt="" className='h-8 md:h-12' /> */}
          <span className='h-8 md:h-12 bg-black/30'>jk</span>
        </Link>
        <nav className="items-center hidden md:flex gap-x-14 md:gap-4 lg:gap-7">
          <ul className='flex flex-col items-center text-sm font-medium md:flex-row text-dark-light gap-7 md:gap-4 lg:gap-7'>
            <li><Link href="/" className={`text-green border-b-2 pb-1.5 px-1 font-medium`}>Home</Link></li>
            <li><Link href="/explore" className={`text-green border-b-2 pb-1.5 px-1 font-medium`}>Explore</Link></li>
            <li><Link href="/blogs" className={`text-green border-b-2 pb-1.5 px-1 font-medium`}>Blog</Link></li>
            <li><Link href="/about" className={`text-green border-b-2 pb-1.5 px-1 font-medium`}>About</Link></li>
            <li><Link href="/contact" className={`text-green border-b-2 pb-1.5 px-1 font-medium`}>Contact</Link></li>
            {/* {!user ? 
            <li><Link href="/login" className={`text-green border-b-2 pb-1.5 px-1 font-medium`}>Login</Link></li>
            :
            <li>
              <div onClick={() => dispatch({type: "LOGOUT"})} className='px-1 font-medium cursor-pointer'>
                 Logout
              </div>
            </li>
            } */}
          </ul>
          <Link href={"/users"}>
              ddddd
          </Link>
        </nav>
        { isOpen ? 
          <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl md:hidden relative z-50  text-green`} /> 
          : <BiMenu onClick={() => setIsOpen(true)} className='relative z-50 text-3xl cursor-pointer md:hidden text-green' />
        }
      </header>
        <div className={`md:hidden shadow fixed hrefp-0 right-0 w-5/6 min-h-screen h-screen bg-white px-4  py-2 md:px-10 z-30 translate-x-full ${isOpen && "translate-x-0"} transition-all duration-300`}>
          <div className='flex items-center justify-end'>
            { isOpen ? 
              <MdOutlineClose onClick={() => setIsOpen(false)} className={`cursor-pointer text-3xl md:hidden relative z-50  text-green`} /> 
              : <BiMenu onClick={() => setIsOpen(true)} className='relative z-50 text-3xl cursor-pointer md:hidden text-green' />
            }
          </div>
          <nav className="flex flex-col gap-16 p-4 px-8 pt-20 mb-8 md:hidden">
            <ul className='flex flex-col text-sm font-medium text-dark-light gap-7 md:gap-4 lg:gap-7'>
              <li><Link href="/" className={`text-green pb-1.5 px-1 font-medium`}>Home</Link></li>
              <li><Link href="/explore" className={`pb-1.5 px-1 font-medium`}>Explore</Link></li>
              <li><Link href="/blogs" className={`text-green pb-1.5 px-1 font-medium`}>Blog</Link></li>
              <li><Link href="/about" className={`text-green pb-1.5 px-1 font-medium`}>About</Link></li>
              <li><Link href="/contact" className={`text-green pb-1.5 px-1 font-medium`}>Contact</Link></li>
              {/* {!user ? 
              <li><Link href="/login" className={`${pathname==="/login" && "text-green"} pb-1.5 px-1 font-medium`}>Login</Link></li>
                :
                <li>
                  <div onClick={() => dispatch({type: "LOGOUT"})} className='px-1 font-medium cursor-pointer'>
                    Logout
                  </div>
                </li>
              } */}
             
            </ul>
            <Link href="/users/add-business">
              <button className='py-1.5 px-3 rounded-sm'>
                Add my business
              </button>
            </Link>
          </nav>
        </div>
    </>
  )
}

export default Header