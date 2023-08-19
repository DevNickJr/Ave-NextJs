'use client'
import React, { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import MonitorImg from '@/assets/monitor.svg'
import { GiCheckMark } from 'react-icons/gi'
import Footer from '@/components/Footer'
import FundImg from '@/assets/fund.svg'
import RegImg from '@/assets/reg.svg'
import TradeImg from '@/assets/trade.svg'
import DiverseImg from '@/assets/diversify.svg'
import ArmImg from '@/assets/arm-flex-outline.svg'
import ToolsImg from '@/assets/tools.svg'
import SecurityImg from '@/assets/account-lock.svg'
import Face1Img from '@/assets/face1.png'
import Face2Img from '@/assets/face2.png'
import Face3Img from '@/assets/face3.png'
import Face4Img from '@/assets/face4.png'
import Face5Img from '@/assets/face5.png'
import Face6Img from '@/assets/face6.jpg'
import Face7Img from '@/assets/face7.png'



export default function Home() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState<[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const num_per_page = 6




  // useEffect(() => {
  //   const fetchScholarships = async () => {
  //     setIsLoading(true)
  //     try {
  //       const res = await fetch('/api/translate')
  //       const data = await res.json()

  //       console.log({ res, data })

  //       if (!res.ok) {
  //         throw new Error(data?.message || 'An error Occured')
  //       }
  //       setData(data)
  //     } catch (error) {
  //       console.log({error})
  //     }
  //     setIsLoading(false)
  //   }

  //   fetchScholarships()
  // }, [])

  // console.log({ data })
  
  return (
    <div className=''>
      <Header />
      <main className="">
        <Hero />
        {/* <section className='flex flex-col justify-center min-h-screen px-12 text-white bg-black/40'>
          <Image src={CryptImage} alt="Auth Image" className='absolute top-0 left-0 w-full h-full -z-10' />
          <div className='flex flex-col justify-center w-full h-full max-w-3xl gap-4 md:w-1/2'>
            <h1 className='text-4xl font-semibold'>Invest for the Future in Stable Platform and Make Fast Money</h1>
            <p className='text-lg'>Our goal is to provide our investors with a reliable source of high income, while minimizing any possible risks and offering a high-quality service.</p>
            <button className='p-4 px-6 text-white rounded-md w-fit bg-primary'>Get Started</button>
          </div>
        </section> */}
        {/* <section className='px-12 py-20 text-white lg:px-24 bg-backg'>
          <div className="flex flex-col gap-8 mb-16 md:flex-row">
            <div className='flex flex-col items-center flex-1 gap-3 mb-12 text-center md:items-start md:text-left'>
              <h2 className='text-3xl font-semibold'>All About Us</h2>
              <div className="flex flex-col gap-3">
                <p className=''>Meet the Crypto Gurus - we&apos;re a bunch of wildly passionate finance wizards, masterminds of cryptocurrency, and die-hard innovators.</p>
                <p>Our mission is to transform the cryptoverse into a dazzling universe where galactic returns await all adventurers.</p>
                <p>In a time of mindless click-frenzies and sugar-coated promises, we bring you true crypto utopia!</p>
              </div>
            </div>
            <div className="flex-1 bg-gray-100"> 
              <Image src={CoinImage} alt="Auth Image" className='flex-1 object-cover w-full h-full max-h-[450px]' />
            </div>
          </div>
          <div className="flex flex-col gap-8 md:flex-row">
            <Image src={CryptImage} alt="Auth Image" className='flex-1 object-cover w-full h-full max-h-[450px]' />
            <div className='flex flex-col items-center flex-1 gap-3 mb-12 text-center md:items-start md:text-left'>
              <h2 className='text-3xl font-semibold'>We Bring together Marketplaces & Finance through the use of artificial intelligence AI</h2>
              <div className="flex flex-col gap-3">
                <p className=''>The ultimate goal of Roza Trades is to be the all-in-one solution and offer a wide array of services from market to finance..</p>
                <p>Our clients – both corporate and private ones – will access all the services they need from a single platform. Blockchain technology and AI gives us the chance to make your finances grow faster and give better returns</p>
              </div>
            </div>
          </div>
        </section> */}
        <section className='px-12 py-20 text-black bg-white lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold text-primary'>How It Works</h2>
            <p className='max-w-lg text-sm md:text-base'>Get involved in our tremendous platform and Invest. We will utilize your money and give you profit in your wallet automatically.</p>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <div data-aos="slide-up" className="flex items-center gap-4">
              <div className="flex-[0_0_48px] w-12 h-12 relative">
                <Image src={RegImg} alt='register' className='absolute w-full h-full' />
              </div>
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>Register</p>
                <p className='text-sm'>Create your account in minutes. Tell us about your trading experience, goals, and risk appetite to receive personalized recommendations</p>
              </div>
            </div>
            <div data-aos="slide-up" className="flex items-center gap-4">
              <div className="flex-[0_0_48px] w-12 h-12 relative">
                <Image src={FundImg} alt='register' className='absolute w-full h-full' />
              </div>
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>Fund Your Account</p>
                <p className='text-sm'>Whether you&apos;re starting small or going big, TradeMaster accommodates your financial comfort level. Begin trading with an amount that suits your budget.</p>
              </div>
            </div>
            <div data-aos="slide-up" className="flex items-center gap-4">
              <div className="flex-[0_0_48px] w-12 h-12 relative">
                <Image src={TradeImg} alt='register' className='absolute w-full h-full' />
              </div>
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>Execute Trades</p>
                <p className='text-sm'>Use our user-friendly interface to execute trades seamlessly across a wide range of assets, including stocks, forex, commodities, and cryptocurrencies..</p>
              </div>
            </div>
            <div data-aos="slide-up" className="flex items-center gap-4">
              <div className="flex-[0_0_48px] w-12 h-12 relative">
                <Image src={MonitorImg} alt='register' className='absolute w-full h-full' />
              </div>
              <div className="flex flex-col gap-1">
                <p className='font-semibold'>Monitor & Adapt</p>
                <p className='text-sm'>Stay on top of your trades with real-time market data and portfolio tracking. Adjust your strategies as market conditions change.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='px-12 py-20 text-white grad-to-right lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold'>Our Investment Plans</h2>
            <p className='max-w-lg text-sm md:text-base'>Unlocking Investment Potential: Seamlessly Grow Your Wealth with Automated Profit Generation</p>
          </div>
          <div className='flex flex-col flex-wrap justify-center gap-5 mb-8 md:flex-row text-primary'>
            {
               [0,1,2,3,4,5].map((el, i) => 
              <div key={i} data-aos="slide-up" className="flex flex-col gap-3 p-6 border rounded-md shadow-lg shadow-black w-72 border-primary">
                <span className='text-xs'>Standard</span>
                <span className='mb-4 text-2xl font-semibold'>$24.99/mo</span>
                <div className="flex flex-col gap-1 text-[11px]">
                  <div className="flex items-center gap-2">
                    <GiCheckMark className="" />
                    <span className=''>50 Coins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GiCheckMark className="" />
                    <span className=''>50 Coins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GiCheckMark className="" />
                    <span className=''>50 Coins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GiCheckMark className="" />
                    <span className=''>50 Coins</span>
                  </div>
                </div>
                <button className='p-2 mt-2 text-sm font-bold text-black rounded-md bg-primary'>Invest Now</button>
              </div>
            )}
            {/* <div className="flex flex-col gap-3 p-6 rounded-md shadow-md w-72 bg-[#0D0D0D]">
              <span className='text-xs'>Pro</span>
              <span className='mb-4 text-2xl font-semibold'>$24.99/mo</span>
              <div className="flex flex-col gap-1 text-[11px]">
                <div className="flex items-center gap-2">
                  <GiCheckMark className="" />
                  <span className=''>50 Coins</span>
                </div>
                <div className="flex items-center gap-2">
                  <GiCheckMark className="" />
                  <span className=''>50 Coins</span>
                </div>
                <div className="flex items-center gap-2">
                  <GiCheckMark className="" />
                  <span className=''>50 Coins</span>
                </div>
                <div className="flex items-center gap-2">
                  <GiCheckMark className="" />
                  <span className=''>50 Coins</span>
                </div>
              </div>
              <button className='p-2 mt-2 text-sm font-bold text-black rounded-md bg-primary'>Invest Now</button>
            </div> */}
          </div>
        </section>
        <section className='px-12 py-20 text-black bg-white lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold text-primary'>What makes Avestock Trades stand out?</h2>
            <p className='max-w-lg text-sm md:text-base'>Unveiling the Unique Qualities That Elevate Avestock Trades to Prominence in the Investment Landscape</p>
          </div>
          <div className='grid gap-3 mb-8 md:grid-cols-2 lg:grid-cols-4'>
            <div data-aos="slide-up" className="flex flex-col w-full gap-3 p-6 rounded-md shadow-md">
              <div className="flex-[0_0_48px] w-12 h-12 relative">
                <Image src={ToolsImg} alt='register' className='absolute w-full h-full' />
              </div>
              <span className='text-lg font-semibold text-black'>Cutting-Edge Technology</span>
              <span>                
                Our advanced platform ensures a seamless investment experience—easy navigation, monitoring, and management, all at your fingertips.
              </span>
            </div>            
            <div data-aos="slide-up" className="flex flex-col w-full gap-3 p-6 rounded-md shadow-md">
              <div className="flex-[0_0_48px] w-12 h-12 relative">
                <Image src={ArmImg} alt='register' className='absolute w-full h-full' />
              </div>
              <span className='text-lg font-semibold text-black'>Expert Management</span>
              <span>                
                Led by seasoned experts, we strategically manage your investments, optimizing returns amidst market trends and risk management.
              </span>
            </div>            
            <div data-aos="slide-up" className="flex flex-col w-full gap-3 p-6 rounded-md shadow-md">
              <div className="flex-[0_0_48px] w-12 h-12 relative">
                <Image src={DiverseImg} alt='register' className='absolute w-full h-full' />
              </div>
              <span className='text-lg font-semibold text-black'>Diverse Options</span>
              <span>                
                Explore our diverse investment options, designed for various risk appetites and goals. Whether you&apos;re conservative or seeking higher returns, our portfolio caters to all.
              </span>
            </div>            
            <div data-aos="slide-up" className="flex flex-col w-full gap-3 p-6 rounded-md shadow-md">
              <div className="flex-[0_0_48px] w-12 h-12 relative">
                <Image src={SecurityImg} alt='register' className='absolute w-full h-full' />
              </div>
              <span className='text-lg font-semibold text-black'>Security</span>
              <span>                
                Security tops our list. With robust measures, your personal and financial information is safeguarded, ensuring peace of mind throughout your investment journey.
              </span>
            </div>            
          </div>
        </section>
        <section className='px-12 py-20 text-white lg:px-24 grad-to-right'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold'>Top 8 cryptocurrency, Subscribe and start earning</h2>
            <p className='max-w-lg text-sm md:text-base'>Exploring the Leading 8 Cryptocurrencies: Subscribe Now to Ignite Your Earnings</p>
          </div>
          <div className='grid gap-3 mb-8 md:grid-cols-2 lg:grid-cols-4'>
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BITSTAMP%3ABTCUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BITSTAMP%3AETHUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22COINBASE%3ALTCUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3AXRPUSDT%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BITMEX%3AXBTUSDTM2023%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ADOTUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ADOGEBTC%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
            <div data-aos="fade-in" className="flex flex-col w-full gap-3 p-6 text-white rounded-md shadow-md bg-primary">
              <div className="tradingview-widget-container" style={{"width": "100%", height: "100%"}}>
                <iframe scrolling="no" src="https://s.tradingview.com/embed-widget/mini-symbol-overview/?locale=en#%7B%22symbol%22%3A%22BINANCE%3ADOGEUSD%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%2C%22dateRange%22%3A%2212M%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22autosize%22%3Atrue%2C%22largeChartUrl%22%3A%22%22%2C%22noTimeScale%22%3Afalse%2C%22chartOnly%22%3Afalse%2C%22utm_source%22%3A%22rozatradesllc.com%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22mini-symbol-overview%22%2C%22page-uri%22%3A%22rozatradesllc.com%2Fportal%2Fhome%2Fv1%2Findex.php%22%7D" title="mini symbol-overview TradingView widget" lang="en" style={{userSelect: "none", "boxSizing": "border-box", display: "block", height: "100%", width: "100%"}}></iframe>
              </div>
            </div>            
          </div>
        </section>
        <section  className='px-12 py-20 text-black bg-white lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold text-primary'>What Our Customers Say</h2>
            <p className='max-w-lg text-sm md:text-base'>Our customers from all over the world share their lovely words about us</p>
          </div>
          <div className='flex flex-col flex-wrap justify-center gap-5 mb-8 md:flex-row'>
              <div data-aos='slide-right' className="flex flex-col items-center w-full max-w-sm gap-3 p-6 text-center rounded-md">
                <Image src={Face1Img} alt='register' className='rounded-full w-28 h-28' />
                <span className='text-lg font-medium'>Jane Mark</span>
                <span>
                  Choosing Avestock for my investments was a smart move. The platform&apos; user-friendly design combined with consistent returns has made it a top choice for me
                </span>
              </div>         
              <div data-aos='slide-left' className="flex flex-col items-center w-full max-w-sm gap-3 p-6 text-center rounded-md">
                <Image src={Face2Img} alt='register' className='rounded-full w-28 h-28' />
                <span className='text-lg font-medium'>Mark White</span>
                <span>
                I&apos;ve been using Avestock for a while now, and their commitment to security and transparency has made me feel confident in my investments. It&apos; a reliable platform I can trust.
                </span>
              </div>         
              <div data-aos='slide-right' className="flex flex-col items-center w-full max-w-sm gap-3 p-6 text-center rounded-md">
                <Image src={Face3Img} alt='register' className='rounded-full w-28 h-28' />
                <span className='text-lg font-medium'>Emily Howes</span>
                <span>
                  Being a service provider, Avestock has given me the exposure I needed. The marketplace is full of opportunities, and I&apos;ve expanded my business significantly through the platform
                </span>
              </div>         
              <div data-aos='slide-left' className="flex flex-col items-center w-full max-w-sm gap-3 p-6 text-center rounded-md">
                <Image src={Face4Img} alt='register' className='rounded-full w-28 h-28' />
                <span className='text-lg font-medium'>Alex Ryan</span>
                <span>
                  I&apos;m impressed by how Avestock streamlines the investment process. The automated profit system is a game-changer, making my earnings hassle-free
                </span>
              </div>         
              <div data-aos='slide-right' className="flex flex-col items-center w-full max-w-sm gap-3 p-6 text-center rounded-md">
                <Image src={Face5Img} alt='register' className='rounded-full w-28 h-28' />
                <span className='text-lg font-medium'>Fredrick Bussman</span>
                <span>
                  I&apos;ve been a part of the Avestock community for a while now, and I&apos;m thrilled with the consistent profits I&apos;ve seen. This platform delivers on its promises.
                </span>
              </div>         
              <div data-aos='slide-left' className="flex flex-col items-center w-full max-w-sm gap-3 p-6 text-center rounded-md">
                <Image src={Face6Img} alt='register' className='rounded-full w-28 h-28' />
                <span className='text-lg font-medium'>Khan Zhor</span>
                <span>
                Avestock stands out for its excellent customer support. Whenever I had questions, their team was quick to respond and guide me. It&apos;s been a smooth journey
                </span>
              </div>         
              <div data-aos='slide-right' className="flex flex-col items-center w-full max-w-sm gap-3 p-6 text-center rounded-md">
                <Image src={Face7Img} alt='register' className='rounded-full w-28 h-28' />
                <span className='text-lg font-medium'>Marvin Alen</span>
                <span>
                  As a startup owner, I found Avestock to be a valuable asset. The exposure my business gained through the platform&apos;s marketplace has been remarkable
                </span>
              </div>         
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
