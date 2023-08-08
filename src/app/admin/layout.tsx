'use client'
import React from 'react'
import SideNav from '@/components/admin/SideNav'
import Head from '@/components/admin/Head'
import AuthHOC from '@/HOC/AuthHOC'

const AdminLayout = ({ children }: { children: React.ReactNode }) => { 

  return (
      <div className='flex w-full h-screen overflow-hidden bg-footer-bg'>
        <SideNav />
        <div className="relative flex-1 pb-10 overflow-hidden overflow-y-auto bg-black/5">
          <Head />
          {children}
        </div>
      </div>
  )
}

export default AuthHOC(AdminLayout)