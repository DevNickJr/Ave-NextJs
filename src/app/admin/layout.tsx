'use client'
import React from 'react'
import SideNav from '@/components/admin/SideNav'
import Head from '@/components/admin/Head'
import AuthHOC from '@/HOC/AuthHOC'
import BottomNav from '@/components/admin/BottomNav'

const AdminLayout = ({ children }: { children: React.ReactNode }) => { 

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

export default AuthHOC(AdminLayout)