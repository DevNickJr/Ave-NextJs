'use client'
import React from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify';
import { BiLocationPlus, BiPhone } from 'react-icons/bi';
import { MdOutlineEmail } from 'react-icons/md';
// import Loader from '../Loader'


const Footer = () => {
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const handleSubmit = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      toast.success("Email submitted successfully");
      setEmail('')
    }, 2000)
    console.log(email)
  }

  return (
      <footer className='bg-footer-bg pb-14'>
        {/* {loading && <Loader loader={4} />} */}
        <div className='flex items-center justify-between gap-8 py-2 border-y-2 border-[#D3DAE6] px-8 md:px-10 lg:px-24 mb-12 sm:mb-28'>
          <h3 className='font-semibold text-center text-primary'>Avestock 2023</h3>
          <nav className="items-center hidden sm:flex gap-x-14 md:gap-4 lg:gap-7">
            <ul className='flex items-center gap-3 text-sm md:gap-4 lg:gap-7 opacity-80'>
              <li><Link href="/" className={`text-green font-medium`}>Home</Link></li>
              <li><Link href="/explore" className={`text-green font-medium`}>Explore</Link></li>
              <li><Link href="/blogs" className={`text-green font-medium`}>Blog</Link></li>
              <li><Link href="/about" className={`text-green font-medium`}>About</Link></li>
              <li><Link href="/contact" className={`text-green font-medium`}>Contact</Link></li>
              <li><Link href="/login" className={`text-green font-medium`}>Login</Link></li>
            </ul>
          </nav>
        </div>
        <div className='justify-between px-8 md:px-10 lg:px-24 sm:flex sm:w-11/12'>
          <div className='flex justify-between gap-8 mb-8 lg:gap-32'>
            <div>
              <h4 className='text-sm font-medium mb-7'>Other pages</h4>
              <ul className='flex flex-col gap-6 text-xs text-footer-gray'>
                <li>
                  <Link href={"/faqs"}>FAQ</Link>
                  </li>
                <li>
                  <Link href={"/terms"}>
                    Terms of service
                  </Link>
                </li>
                <li>
                  <Link href={"/privacy"}>
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-sm font-medium mb-7'>Contact Info</h4>
              <ul className='flex flex-col gap-6 text-xs text-footer-gray'>
                <li className='flex items-center gap-3'> 
                  <BiLocationPlus />
                  <span>980 Great West Road,London, UK</span>
                </li>
                <li className='flex items-center gap-3'> 
                  <BiPhone />
                  <span>98000000000</span>
                </li>
                <li className='flex items-center gap-3'> 
                  <MdOutlineEmail />
                  <span>support@hnmm.vom</span>
                </li>
              </ul>
            </div>
          </div>
          <div className='mb-8'>
            <h4 className='mb-2 text-25'>Stay Updated</h4>
            <span className='text-xs text-footer-gray'>Keep a close watch on your favourite businesses</span>
            <div onClick={handleSubmit} className='flex text-xs mt-7'>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder='Enter your email' className='w-full p-2 px-3 text-xs border-2 border-r-0 rounded-tl-md rounded-bl-md border-gray' />
              <button type={'submit'} className='rounded-tr-md rounded-br-md py-1.5 px-5 text-xs bg-primary text-white'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer