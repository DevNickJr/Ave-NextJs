import React from 'react'
import Image from 'next/image'
// import AuthImage from '@/assets/coin.png'
import AuthImage from '@/assets/phone-chart.png'
import AuthImage2 from '@/assets/tradeview.jpg'
import Logo from '@/assets/logo.svg'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <main>
      <Header />
      <div className='flex w-full my-6 overflow-hidden sm:my-12 md:my-24 md:mt-24 md:h-screen'>
        <div className="relative flex-1 p-4 py-6 overflow-y-auto md:px-12">
            {/* <Image src={Logo} alt="Auth Image" className='h-12 mb-4' /> */}
            {/* <h1 className='text-3xl font-bold text-primary'>AVESTOCK</h1> */}
            {children}
        </div>
        <div className="flex-1 hidden h-screen overflow-hidden md:flex">
            <Image src={AuthImage} alt="Auth Image" className='w-full h-full' />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default AuthLayout