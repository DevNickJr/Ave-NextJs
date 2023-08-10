'use client'
import React from 'react'
import Table from '@/components/Table'
import { ITableColumn, IWallet } from '@/interfaces'
import { useSession } from 'next-auth/react'
import useFetch from '@/hooks/useFetch'
import { apiGetWallets } from '@/services/UserService'

// import { useSession } from 'next-auth/react'


const Home = () => {
  const session = useSession()
  const user = session.data?.user
  const { data: wallets, error, isLoading, isFetching, remove, refetch, fetchStatus } = useFetch<IWallet[]>({api: apiGetWallets, key: ['wallets'] })


  const columns: ITableColumn[] = [
    {
      name: 'name',
      label: 'Currency',
    },
    // {
    //   name: 'full_name',
    //   label: "A",
    // },
    {
      name: 'option',
      label: 'Action',
      options: {
        filter: true,
        sort: true,
      },
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <div className="flex items-center gap-3">
                <button className='p-2 px-3 text-sm text-white bg-primary'>Deposit</button>
                <button className='p-2 px-3 text-sm bg-white text-primary'>Withdraw</button>
            </div>
        )
      },
    },
  ]

  const tableData = [
    {
        name: 'Dollar',
        full_name: '$0.00',
    },
    {
        name: 'Bitcoin',
        full_name: '$0.00',
    },
    {
        matric_no: 'Ethereum',
        full_name: '$0.00',
    },
  ]

  console.log({ user })

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
        <h2 className='mb-6 text-lg font-semibold'>Welcome, Nicholas Duadei</h2>
        <div className='flex flex-col gap-4 mb-12 lg:flex-row'>
            <div className="flex flex-col flex-1 gap-4 p-5 text-sm bg-white rounded-md shadow-md">
                <div className="flex items-center justify-between gap-8">
                    <span>My Balance</span>
                </div>
                <p>${user?.balance || '0.00'}</p>
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
          <Table data={wallets || []} columns={columns} />
        </div>
    </main>
  )
}

export default Home