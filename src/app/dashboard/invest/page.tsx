'use client'
import Table from '@/components/Table'
import { ITableColumn } from '@/interfaces'
import React from 'react'
// import { useSession } from 'next-auth/react'


const Invest = () => {
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
        <h2 className='mb-6 text-lg font-semibold'>Live Investments</h2>
        <div className='mb-6'>
          <Table data={data || []} columns={columns} />
        </div>
        <h2 className='mb-6 text-lg font-semibold'>Plans</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3'>
          <div className="flex flex-col text-center text-white bg-black border rounded-md shadow-md">
            <div className="flex flex-col gap-1 p-2 py-4 text-center border-b rounded-t-md bg-primary">
              <h4 className='text-lg'>BASIC PLAN</h4>
              <p className='text-sm'>Investment Range: $5,000 - $10,000</p>
            </div>
            <div className="p-3 px-12 border-b">Duration: 14 Days</div>
            <div className="p-3 px-12 border-b">Principal Return after completion</div>
            <div className="p-3 px-12 border-b">Withdraw Principal at any time 10% fee will be charged</div>
            <button className="w-3/4 p-2 mx-auto my-2 rounded-md bg-primary">Invest Now</button>
          </div>
        </div>
    </main>
  )
}

export default Invest