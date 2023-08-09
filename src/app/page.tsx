'use client'
import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import CryptImage from '@/assets/cryp.png'
import { GiCheckMark } from 'react-icons/gi'
import Footer from '@/components/Footer'

export default function Home() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const num_per_page = 6

  useEffect(() => {
    const fetchScholarships = async () => {
      setIsLoading(true)
      try {
        const res = await fetch('/api/users')
        const data = await res.json()

        console.log({ res, data })

        if (!res.ok) {
          throw new Error(data?.message || 'An error Occured')
        }
        setData(data)
      } catch (error) {
        console.log({error})
      }
      setIsLoading(false)
    }

    fetchScholarships()
  }, [])

  // console.log({ data })
  
  return (
    <>
      <Header />
      <main className="">
        <section className='flex flex-col justify-center min-h-screen px-12 text-white bg-black/60'>
          <Image src={CryptImage} alt="Auth Image" className='absolute top-0 left-0 w-full h-full -z-10' />
          <div className='flex flex-col justify-center w-full h-full gap-4'>
            <h1 className='text-4xl font-semibold'>Invest for the Future in Stable Platform and Make Fast Money</h1>
            <p className='text-lg'>Our goal is to provide our investors with a reliable source of high income, while minimizing any possible risks and offering a high-quality service.</p>
            <button className='p-4 px-6 text-white rounded-md w-fit bg-primary'>Get Started</button>
          </div>
        </section>
        <section className='px-12 py-12 lg:px-24'>
          <div className="flex flex-col gap-8 mb-16 md:flex-row">
            <div className='flex flex-col items-center flex-1 gap-3 mb-8 text-center md:items-start md:text-left'>
              <h2 className='text-3xl font-semibold'>All About Us</h2>
              <div className="flex flex-col gap-3">
                <p className=''>Meet the Crypto Gurus - we&apos;re a bunch of wildly passionate finance wizards, masterminds of cryptocurrency, and die-hard innovators.</p>
                <p>Our mission is to transform the cryptoverse into a dazzling universe where galactic returns await all adventurers.</p>
                <p>In a time of mindless click-frenzies and sugar-coated promises, we bring you true crypto utopia!</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-100"> 
            </div>
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex-1 bg-gray-100"> 
            </div>
            <div className='flex flex-col items-center flex-1 gap-3 mb-8 text-center md:items-start md:text-left'>
              <h2 className='text-3xl font-semibold'>We Bring together Marketplaces & Finance through the use of artificial intelligence AI</h2>
              <div className="flex flex-col gap-3">
                <p className=''>The ultimate goal of Roza Trades is to be the all-in-one solution and offer a wide array of services from market to finance..</p>
                <p>Our clients – both corporate and private ones – will access all the services they need from a single platform. Blockchain technology and AI gives us the chance to make your finances grow faster and give better returns</p>
              </div>
            </div>
          </div>
        </section>
        <section className='px-12 py-12 lg:px-24'>
          <div className='flex flex-col items-center gap-3 mb-8 text-center'>
            <h2 className='text-3xl font-semibold'>How It Work</h2>
            <p className=''>Get involved in our tremendous platform and Invest. We will utilize your money and give you profit in your wallet automatically.</p>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="flex-[1_0_48px] w-12 h-12 bg-black">dsss</div>
              <div className="flex flex-col gap-1">
                <p>Register</p>
                <p>You will immediately have access to your trading account and all tools you need for successful trading.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-[1_0_48px] w-12 h-12 bg-black">dsss</div>
              <div className="flex flex-col gap-1">
                <p>Register</p>
                <p>You will immediately have access to your trading account and all tools you need for successful trading.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-[1_0_48px] w-12 h-12 bg-black">dsss</div>
              <div className="flex flex-col gap-1">
                <p>Register</p>
                <p>You will immediately have access to your trading account and all tools you need for successful trading.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='px-12 py-12 lg:px-24'>
          <div className='flex flex-col items-center gap-3 mb-8 text-center'>
            <h2 className='text-3xl font-semibold'>Our Investment Plans</h2>
            <p className=''>Plans for everyone</p>
          </div>
          <div className='flex flex-col flex-wrap gap-3 mb-8 md:flex-row'>
            <div className="flex flex-col gap-3 p-6 text-white rounded-md shadow-md w-72 bg-primary">
              <span className='text-xs'>Standard</span>
              <span className='mb-4 text-2xl font-semibold text-black'>$24.99/mo</span>
              <div className="flex flex-col gap-1 text-[11px]">
                <div className="flex items-center gap-2">
                  <GiCheckMark className="text-white" />
                  <span className=''>50 Coins</span>
                </div>
                <div className="flex items-center gap-2">
                  <GiCheckMark className="text-white" />
                  <span className=''>50 Coins</span>
                </div>
                <div className="flex items-center gap-2">
                  <GiCheckMark className="text-white" />
                  <span className=''>50 Coins</span>
                </div>
                <div className="flex items-center gap-2">
                  <GiCheckMark className="text-white" />
                  <span className=''>50 Coins</span>
                </div>
              </div>
              <button className='p-2 mt-2 text-sm bg-black rounded-md'>Invest Now</button>
            </div>
            <div className="flex flex-col gap-3 p-6 text-white rounded-md shadow-md w-72 bg-primary">
              <span className='text-xs'>Pro</span>
              <span className='mb-4 text-2xl font-semibold text-black'>$24.99/mo</span>
              <div className="flex flex-col gap-1 text-[11px]">
                <div className="flex items-center gap-2">
                  <GiCheckMark className="text-white" />
                  <span className=''>50 Coins</span>
                </div>
                <div className="flex items-center gap-2">
                  <GiCheckMark className="text-white" />
                  <span className=''>50 Coins</span>
                </div>
                <div className="flex items-center gap-2">
                  <GiCheckMark className="text-white" />
                  <span className=''>50 Coins</span>
                </div>
                <div className="flex items-center gap-2">
                  <GiCheckMark className="text-white" />
                  <span className=''>50 Coins</span>
                </div>
              </div>
              <button className='p-2 mt-2 text-sm bg-black rounded-md'>Invest Now</button>
            </div>
          </div>
        </section>
        <section className='px-12 py-12 lg:px-24'>
          <div className='flex flex-col items-center gap-3 mb-8 text-center'>
            <h2 className='text-3xl font-semibold'>What makes Avestock Trades stand out?</h2>
          </div>
          <div className='grid gap-3 mb-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <span className='w-6 h-6 bg-gray-100'></span>
              <span className='text-lg font-semibold text-black'>$24.99/mo</span>
              <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet praesentium molestiae veniam.
              </span>
            </div>            
          </div>
        </section>
        <section className='px-12 py-12 lg:px-24'>
          <div className='flex flex-col items-center gap-3 mb-8 text-center'>
            <h2 className='text-3xl font-semibold'>Top 8 cryptocurrency, Subscribe and start earning</h2>
          </div>
          <div className='grid gap-3 mb-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
            <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
							<iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
						</div>
            </div>            
          </div>
        </section>
        <section className='px-12 py-12 lg:px-24'>
          <div className='flex flex-col items-center gap-3 mb-8 text-center'>
            <h2 className='text-3xl font-semibold'>What Our Customers Say</h2>
            <p className=''>Our customers from all over the world share their lovely words about us</p>
          </div>
          <div className='grid gap-3 mb-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className="flex flex-col items-center w-full gap-3 p-6 text-center rounded-md shadow-md">
              <span className="bg-gray-100 rounded-full w-28 h-28"></span>
              <span className='text-lg font-medium'>Nichlas Tesla</span>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum beatae vero non accusamus incidunt, ex, qui placea
              </span>
            </div>            
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
