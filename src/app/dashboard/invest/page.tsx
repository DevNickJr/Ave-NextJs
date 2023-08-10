'use client'
import Table from '@/components/Table'
import useFetch from '@/hooks/useFetch'
import { IInvest, IPlan, ITableColumn } from '@/interfaces'
import { apiInvest, apiGetPlans, apiGetUserInvestments } from '@/services/UserService'
import React from 'react'
import { useSession } from 'next-auth/react'
import usePost from '@/hooks/usePost'
import { formatDate } from '@/utils/dateFunc'


const Invest = () => {
  const session = useSession()
  const user = session.data?.user
  const [modalOpen, setModalOpen] = React.useState(false)
  const [amount, setAmount] = React.useState('')
  const [investment, setInvestment] = React.useState<IPlan | null>(null)

  const { data: plans, error, isLoading, isFetching, remove, fetchStatus } = useFetch<IPlan[]>({api: apiGetPlans, key: ['plans'] })

  const { data: investments, error: investmentError, isLoading: investMentLoading, refetch } = useFetch<IInvest[]>({api: apiGetUserInvestments, param: user?._id , key: ['investments'] })

  const investMutation = usePost<IInvest, any>(apiInvest, {
    onSuccess: (data) => {
      console.log(data)
      setAmount('')
      refetch()
      setModalOpen(false)
    },
    onError: (error) => {
      console.log(error)
    }   
  })

  console.log( { investments  })
  // const { data } = useSession()
  const columns: ITableColumn[] = [
    {
      name: 'amount',
      label: 'Amount',
    },
    {
      name: 'plan',
      label: "Plan",
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
      },
    },
  ]

  const handleInvest = (plan: IPlan) => {
    setInvestment(plan)
    setModalOpen(true)
  }

  const handleInvestSubmit = () => {
    investMutation.mutate({
      userId: user?._id!,
      email: user?.email!,
      amount: +amount,
      plan: investment?.name!,
    })
  }

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      <h2 className='mb-6 text-lg font-semibold'>Live Investments</h2>
      <div className='mb-6'>
        <Table title={'Investments'} data={investments || []} columns={columns} />
      </div>
      <h2 className='mb-6 text-lg font-semibold'>Plans</h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
       {
          plans?.map((plan, index) => (
            <div key={index} className="flex flex-col text-center text-white bg-black border rounded-md shadow-md">
              <div className="flex flex-col gap-1 p-2 py-4 text-center border-b rounded-t-md bg-primary">
                <h4 className='text-lg'>{plan.name} PLAN</h4>
                <p className='text-sm'>Investment Range: ${plan.minimum} - ${plan.maximum}</p>
              </div>
              <div className="p-3 px-12 border-b">Duration: {plan.duration} Days</div>
              <div className="p-3 px-12 border-b">ROI: {plan.roi} Days</div>
              <div className="p-3 px-12 border-b">Principal Return after completion</div>
              <div className="p-3 px-12 border-b">Withdraw Principal at any time 10% fee will be charged</div>
              <button className="w-3/4 p-2 mx-auto my-2 rounded-md cursor-pointer bg-primary" onClick={() => handleInvest(plan)}>Invest Now</button>
            </div>
        ))}
      </div>
      <div className={`fixed top-0 h-full right-0 w-full bg-black py-4 shadow-md z-30 transition-all ${modalOpen ? "translate-x-0 bg-black/40 " : 'translate-x-full'}`}>
        <div className={`fixed top-0 h-full right-0 w-full max-w-sm bg-white py-4 shadow-md z-30 transition-all ${modalOpen ? "translate-x-0" : 'translate-x-full'}`}>
        <div className="flex flex-col gap-2 py-4">
          <div className="flex justify-between gap-4 border-b border-black itesm-center">
            <h2 className='px-4 py-2 text-2xl font-semibold'>{investment?.name} Plan</h2>
            <span className='flex items-center justify-center p-4 cursor-pointer' onClick={() => setModalOpen(false)}>X</span>
          </div>
          <div className="flex flex-col max-w-xs gap-4 px-4 mt-2">
            <div className="flex items-center justify-between gap-6 p-3 font-semibold text-white rounded-md bg-primary">
              <span>Wallet Balance</span>
            <span>${user?.balance}</span>
            </div>
            <div className="flex items-center justify-between gap-6 px-3 text-xs">
              <span>Minimum Deposit</span>
            <span>${investment?.minimum}</span>
            </div>
            <div className="flex items-center justify-between gap-6 px-3 text-xs">
              <span>Maximum Deposit</span>
            <span>${investment?.maximum}</span>
            </div>
            <div className="flex items-center justify-between gap-6 text-sm">
              <input value={amount} onChange={(e) => setAmount(e.target.value)} type="text" name="" id="" placeholder='Enter Amount' className='w-full p-3 border border-black rounded-md' />
            </div>
          </div>
          <button onClick={handleInvestSubmit} className='p-2 px-4 mt-3 ml-4 text-white rounded-md w-fit bg-primary'>Invest</button>
        </div>
        </div>
      </div>
    </main>
  )
}

export default Invest