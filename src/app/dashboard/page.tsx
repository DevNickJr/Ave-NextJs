'use client'
import Table from '@/components/Table'
import { ITableColumn } from '@/interfaces'
import React from 'react'
// import { useSession } from 'next-auth/react'


const Home = () => {
  // const { data } = useSession()
  const columns: ITableColumn[] = [
    {
      name: 'matric_no',
      label: 'Currency',
    },
    {
      name: 'full_name',
      label: "Balance",
    },
    {
      name: 'option',
      label: 'Action',
    },
  ]
  const data = [
    {
        matric_no: 'Dollar',
        full_name: '$0.00',
    },
    {
        matric_no: 'Bitcoin',
        full_name: '$0.00',
    },
    {
        matric_no: 'Ethereum',
        full_name: '$0.00',
    },
  ]

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
        <h2 className='mb-6 text-lg font-semibold'>Welcome, Nicholas Duadei</h2>
        <div className='flex flex-col gap-4 mb-12 lg:flex-row'>
            <div className="flex flex-col flex-1 gap-4 p-5 text-sm bg-white rounded-md shadow-md">
                <div className="flex items-center justify-between gap-8">
                    <span>My Balance</span>
                </div>
                <p>$0.00</p>
                <div className="flex items-center gap-6">
                    <button className='p-2 px-3 text-sm text-white bg-primary'>Deposit</button>
                    {/* <button className='p-2 px-3 text-sm bg-white text-primary'></button> */}
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-8 p-5 text-sm bg-white rounded-md shadow-md">
                <p className='text-lg lg:max-w-[220px]'>Invite Friends & get extra income!</p>
                <div className="flex items-center gap-6">
                    <button className='p-2 px-3 text-sm text-white bg-primary'>Earn More</button>
                    {/* <button className='p-2 px-3 text-sm bg-white text-primary'></button> */}
                </div>
            </div>
        </div>
        <div className=''>
          <Table data={data || []} columns={columns} />
        </div>
    </main>
  )
}

export default Home