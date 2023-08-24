'use client'
import React from 'react'
import SideNav from '@/components/SideNav'
import Head from '@/components/Head'
import AuthHOC from '@/HOC/AuthHOC'
import BottomNav from '@/components/BottomNav'
import ContextAuthHOC from '@/HOC/ContextAuthHOC'

const Layout = ({ children }: { children: React.ReactNode }) => { 
  

  return (
      <div className='flex w-full h-screen overflow-hidden'>
        <SideNav />
        <div className="relative flex-1 pb-10 overflow-hidden overflow-y-auto bg-black/5">
          <Head />
          {children}
        </div>
        <BottomNav />
      </div>
  )
}

export default ContextAuthHOC(Layout)