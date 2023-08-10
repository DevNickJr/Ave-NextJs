'use client'
import Table from '@/components/Table'
import useFetch from '@/hooks/useFetch'
import { IDeposit, ITableColumn } from '@/interfaces'
import { apiGetDeposits } from '@/services/AdminService'
import { formatDate } from '@/utils/dateFunc'
import React from 'react'
// import { useSession } from 'next-auth/react'


const Deposit = () => {
  // const { data } = useSession()
  const { data: deposits, error, isLoading, isFetching, remove, refetch, fetchStatus } = useFetch<IDeposit[]>({api: apiGetDeposits, key: ['Admindeposits'] })

  console.log( { deposits  })

   const columns: ITableColumn[] = [
    {
      name: 'email',
      label: 'Email',
    },
    {
      name: 'amount',
      label: "Amount",
    },
    {
      name: 'wallet',
      label: 'Wallet',
    },
    {
      name: 'proof',
      label: 'Proof',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'createdAt',
      label: 'Created At',
      options: {
        filter: true,
        sort: true,
      },
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <p>{formatDate(val)}</p>
        )
      }
    },
    {
      name: 'Action',
      label: 'Action',
      options: {
        filter: false,
        sort: false,
      },
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <button className='btn btn-primary'>View</button>
        )
      }
    }
  ]

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
        <h2 className='mb-6 text-lg font-semibold'>Admin Dashboard - Deposit</h2>
        <div className='mb-6'>
          <Table data={deposits || []} columns={columns} colspan={8} />
        </div>
    </main>
  )
}

export default Deposit