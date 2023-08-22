'use client'
import React from 'react'
import SideNav from '@/components/admin/SideNav'
import Head from '@/components/admin/Head'
import AuthHOC from '@/HOC/AuthHOC'
import BottomNav from '@/components/admin/BottomNav'
import { useSession } from 'next-auth/react'
import { toast } from 'react-toastify'
import { notFound, useRouter } from 'next/navigation'

const AdminLayout = ({ children }: { children: React.ReactNode }) => { 
  const { data } = useSession()
  const router = useRouter()


  React.useEffect(() => {
    if (!data?.user?.is_admin) {
      toast.error('You are not authorized to view this page')
      return router.push("/dashboard")
    }
  }, [data, router])

  if (data?.user?.is_admin) {
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
  } else {
    return (
      <div className='flex items-center justify-center w-full h-screen overflow-hidden'>
        <h1 className='text-2xl font-semibold'>You are not authorized to view this page</h1>
      </div>
    )
  }
  
}

export default AuthHOC(AdminLayout)