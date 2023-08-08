'use client'
import Table from '@/components/Table'
import { ITableColumn } from '@/interfaces'
import React from 'react'
// import { useSession } from 'next-auth/react'


const Withdrawal = () => {
  // const { data } = useSession()
  const columns: ITableColumn[] = [
    {
      name: 'matric_no',
      label: 'Email',
    },
    {
      name: 'full_name',
      label: "Amount",
    },
    {
      name: 'option',
      label: 'Wallet',
    },
    {
      name: 'option',
      label: 'Status',
    },
    {
      name: 'option',
      label: 'Proof',
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
        <h2 className='mb-6 text-lg font-semibold'>Admin Dashboard - Withdrawal</h2>
        <div className='mb-6'>
          <Table data={data || []} columns={columns} colspan={8} />
        </div>
    </main>
  )
}

export default Withdrawal