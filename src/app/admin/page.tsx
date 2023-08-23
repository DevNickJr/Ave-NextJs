'use client'
import Table from '@/components/Table'
import useFetch from '@/hooks/useFetch'
import useMutation from '@/hooks/useMutation'
import { IUser, ITableColumn, IPlan, IChangePassword, IVerifyUser } from '@/interfaces'
import { apiGetUsers, apiUpdatePlan, apiVerifyUser } from '@/services/AdminService'
import { apiChangePassword } from '@/services/AuthService'
import { formatDate } from '@/utils/dateFunc'
import React from 'react'
import { toast } from 'react-toastify'
import GentleLoader from "@/components/GentleLoader"
// import { useSession } from 'next-auth/react'


const Admin = () => {
  // const { data } = useSession()
  const { data: users, error, isLoading, isFetching, refetch, fetchStatus } = useFetch<IUser[]>({api: apiGetUsers, key: ['users'] })

  const verifyUser = useMutation<IVerifyUser, any>(apiVerifyUser, {
    onSuccess: (data) => {
      // console.log(data)
      toast.success('Operation Successful')
      refetch()
    },
    onError: (error) => {
      // console.log(error)
      toast.error('An error occured')
    }   
  })

  const verifyUserHandler = (id: string) => {
    verifyUser.mutate({ _id: id, status: 'verified' })
  }

  const denyUserHandler = (id: string) => {
    verifyUser.mutate({ _id: id, status: 'failed' }) 
  }

  // console.log({users})

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
      extra: true,
      custom: (val: string, meta: IUser) => {
        return  (
          <p className={`${val === 'verified' ? 'text-green-500' : val === 'pending' ? 'text-yellow-500' : 'text-red-500'}`}>{val}</p>
        )
      }
    },
    {
      name: 'document',
      label: 'Document',
      options: {
        filter: false,
        sort: false,
      },
      extra: true,
      custom: (val: string, meta: IUser) => {
        return  (
          <>
         {meta?.document?.front 
          ?
            <div className='flex items-center space-x-2'>
              <a href={meta?.document?.front} target="_blank" className="underline cursor-pointer text-primary underline-offset-1">
                <span className="text-sm">front</span>
              </a>
              <a href={meta?.document?.back} target="_blank" className="underline cursor-pointer text-primary underline-offset-1">
                <span className="text-sm">back</span>
              </a>
            </div>
          :
            <p>Not uploaded</p>
          }
          </>
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
      custom: (val: string, meta: IUser) => {
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
      custom: (val: string, meta: IUser) => {
        // console.log({ val, meta })

        return  (
            <div className='flex items-center space-x-2'>
              <button onClick={() => verifyUserHandler(meta?._id!)} className='text-white bg-primary px-2 py-1.5 rounded-md'>Verify</button>
              <button onClick={() => denyUserHandler(meta?._id!)} className='border-red-200 border px-2 py-1.5 rounded-md text-red-500'>Deny</button>
            </div>
        )
      }
    }
  ]

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      {
        verifyUser?.isLoading && <GentleLoader />
      }
        <h2 className='mb-6 text-lg font-semibold'>Admin Dashboard - Users</h2>
        <div className='mb-6'>
          <Table title='Users' data={users || []} columns={columns} colspan={8} />
        </div>
    </main>
  )
}

export default Admin