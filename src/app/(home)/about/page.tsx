import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import MisionImg from '@/assets/mission.svg'
import VisionImg from '@/assets/vision.svg'


const AboutUs = () => {
  return (
    <div className='overflow-hidden'>
        <Header />
        <section className='flex flex-col items-center justify-center gap-3 px-12 pt-40 text-center text-white bg-white py-28 lg:px-24 grad-to-right'>
            <h1 className="mb-3 text-4xl font-extrabold text-white md:text-5xl font-argentinum">About Us</h1>
            <p className='max-w-lg text-sm'>Empowering Financial Growth Through Expertise, Innovation, and Community Engagement: Discover the Heart of Avestock</p>
        </section>
        <section className='px-12 py-20 text-black bg-white lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold text-primary'>Empowering Your Financial Journey</h2>
            <p className='max-w-lg text-sm md:text-base'>Join us on this journey towards financial growth and prosperity.</p>
          </div>
          <div className='grid gap-3 mb-8 md:grid-cols-2'>
            <div data-aos="slide-up" className="flex flex-col w-full gap-3 p-6 rounded-md shadow-md">
              <div className="flex-[0_0_48px] w-12 h-12 relative">
                <Image src={MisionImg} alt='register' className='absolute w-full h-full' />
              </div>
              <span className='text-lg font-semibold text-black'>Our Mission</span>
              <span>                
                To empower individuals and businesses to achieve financial prosperity through innovative investment solutions. We strive to democratize wealth-building by making reliable investment opportunities accessible to all
              </span>
            </div>            
            <div data-aos="slide-up" className="flex flex-col w-full gap-3 p-6 rounded-md shadow-md">
              <div className="flex-[0_0_48px] w-12 h-12 relative">
                <Image src={VisionImg} alt='register' className='absolute w-full h-full' />
              </div>
              <span className='text-lg font-semibold text-black'>Our Vision</span>
              <span>                
                We envision a future where financial growth is within everyone&apos;s reach. Through cutting-edge technology, expert insights, and a commitment to transparency, we aim to transform the landscape of investments, creating a world where financial success is attainable for all
              </span>
            </div>                      
          </div>
        </section>
        <section className='px-12 py-20 text-white grad-to-right lg:px-24'>
          <div data-aos="fade-in" className='flex flex-col items-center gap-3 mb-12 text-center'>
            <h2 className='text-3xl font-semibold'>Our Trading Company In Numbers</h2>
            <p className='max-w-lg text-sm md:text-base'>Trace the history of our company since its foundation in 2016</p>
          </div>
          <div className='flex flex-col flex-wrap items-center justify-center gap-3 text-center md:flex-row'>
            <div className="flex flex-col w-full min-w-[300px] max-w-sm gap-3 p-6">
              <span className='text-lg font-semibold text-primary'>37,456,523</span>
              <span>REGISTERED USERS</span>
            </div>         
            <div className="flex flex-col w-full min-w-[300px] max-w-sm gap-3 p-6">
              <span className='text-lg font-semibold text-primary'>$15,543,973</span>
              <span>AVERAGE WITHDRAWN BY TRADERS PER MONTH</span>
            </div>         
            <div className="flex flex-col w-full min-w-[300px] max-w-sm gap-3 p-6">
              <span className='text-lg font-semibold text-primary'>$234,354,290</span>
              <span>AVERAGE TRADING VOLUME PER MONTH</span>
            </div>         
            <div className="flex flex-col w-full min-w-[300px] max-w-sm gap-3 p-6">
              <span className='text-lg font-semibold text-primary'>$424,555,634</span>
              <span>AVERAGE MONTHLY TRADE TURNOVER</span>
            </div>         
          </div>
        </section>
      
        <Footer />
    </div>
  )
}

export default AboutUs