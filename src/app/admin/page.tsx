'use client'
import Table from '@/components/Table'
import useFetch from '@/hooks/useFetch'
import usePost from '@/hooks/usePost'
import { IUser, ITableColumn, IPlan } from '@/interfaces'
import { apiGetUsers, apiUpdatePlan } from '@/services/AdminService'
import { formatDate } from '@/utils/dateFunc'
import React from 'react'
// import { useSession } from 'next-auth/react'


const Invest = () => {
  // const { data } = useSession()
  const { data: users, error, isLoading, isFetching, remove, fetchStatus } = useFetch<IUser[]>({api: apiGetUsers, key: ['users'] })

  // const updatePlanMutation = usePost<IPlan, any>(apiUpdatePlan, {
  //   onSuccess: (data) => {
  //     console.log(data)
  //   },
  //   onError: (error) => {
  //     console.log(error)
  //   }   
  // })


  console.log( { users  })
  const columns: ITableColumn[] = [
    {
      name: 'email',
      label: 'Email',
    },
    {
      name: 'first_name',
      label: "First Name",
    },
    {
      name: 'last_name',
      label: 'Last Name',
    },
    {
      name: 'status',
      label: 'Status',
    },
    {
      name: 'document',
      label: 'Document',
      options: {
        filter: false,
        sort: false,
      },
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
          <a href={val} target="_blank" className="flex items-center gap-3 cursor-pointer text-primary">
            <span className="text-sm">View Document</span>
          </a>
        )
      }
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
      name: 'action',
      label: 'Action',
      options: {
        filter: false,
        sort: false,
      },
      extra: true,
      custom: (val: string, meta: any) => {
        return  (
            <div className='flex items-center space-x-2'>
              <button className='btn btn-primary'>Verify</button>
              <button className='btn btn-danger'>Suspend</button>
            </div>
        )
      }
    }
  ]

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
        <h2 className='mb-6 text-lg font-semibold'>Admin Dashboard - Users</h2>
        <div className='mb-6'>
          <Table data={users || []} columns={columns} colspan={8} />
        </div>
    </main>
  )
}

export default Invest