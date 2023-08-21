'use client'
import React, { useEffect } from 'react'
import useFetch from '@/hooks/useFetch'
import { apiVerify } from '@/services/UserService'
import { IVerifyKYC } from '@/interfaces'
import { useSession } from 'next-auth/react'
import usePost from '@/hooks/useMutation'
import { formatDate } from '@/utils/dateFunc'
import useImage from '@/hooks/useImage'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
// import { useSession } from 'next-auth/react'

const documents = [
  {
    name: 'National ID',
    description: 'Front and Back',
    status: 'Pending',
  },
  {
    name: 'Driver License',
    description: 'Front and Back',
    status: 'Pending',
  },
  {
    name: 'Passport',
    description: 'Data Page',
    status: 'Pending',
  },
]


const Deposit = () => {
  const session = useSession()
  const user = session.data?.user
  const [step, setStep] = React.useState(1)
  const [choice, setChioce] = React.useState('')
  const [paymentMethod, setPaymentMethod] = React.useState('')
  const router = useRouter()

  const { url: front, uploadImage, error: errorImage, loading: uploadingFront } = useImage()
  const { url: back, uploadImage: uploadBack, error: errorBack, loading: uploadingBack } = useImage()

  const kycVerifcation = usePost<IVerifyKYC, any>(apiVerify, {
    id: user?._id!,
    onSuccess: (data) => {
      console.log(data)
      toast.success('KYC Verification Request sent Successfully')
      router.push('/dashboard')
    },
    onError: (error) => {
      console.log(error)
    }   
  })

  const handleUpdateKYC = () => {
    if (!front || !back) {
      toast.error('Please upload both front and back of your document')
    } else {
      kycVerifcation.mutate({
        front: front,
        back: back,
      })
    }
  }

  console.log({ user })

  return (
    <main className='relative p-4 overflow-y-auto md:p-6'>
      {
        (uploadingFront || uploadingBack) && 
        <div className="absolute top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-white bg-opacity-50">
          <div className="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md">
            <p className='mb-4 text-sm font-semibold'>Uploading Document...</p>
            <div className="w-12 h-1 rounded-full bg-primary animate-pulse"></div>
          </div>
        </div>
      }
      <h2 className='mb-6 text-lg font-semibold'>Upload KYC Documents: Verify Your Identity</h2>
      {step === 1 && (
        <>
          <div className='grid gap-4 mb-6 mb-12 md:grid-cols-2 lg:grid-cols-3'>
            <div onClick={() => setStep(2)} className="cursor-pointer flex flex-col gap-1 p-4 rounded-md shadow-md min-w-[200px] bg-primary text-white">
              <p className='font-semibold'>Identity Verification</p>
              <p className='text-xs'>Click to Verify</p>
            </div>
          </div>
          <div className="p-5 mb-6 bg-white rounded-md">
            <h4 className='mb-4 font-semibold'>Verification Steps</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 rounded-full"></div>
                <p>Prepare Your Documents</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 rounded-full"></div>
                <p>Upload Your Documents</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 rounded-full"></div>
                <p>Wait to be Verified</p>
              </div>
            </div>
          </div>
          <div className="p-5 mb-6 bg-white rounded-md">
            <h4 className='mb-4 font-semibold'>Important Notes</h4>
            <div className="flex flex-col gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 rounded-full"></div>
                <p>Ensure the uploaded documents are valid and not expired.</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 rounded-full"></div>
                <p>Documents should be in a standard format (JPEG, PNG, PDF, etc.).</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 rounded-full"></div>
                <p>We take your privacy seriously. Your documents will be securely stored and used solely for verification purposes.</p>
              </div>
            </div>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col flex-1 gap-4 p-5 bg-white rounded-md">
              <select className='cursor-pointer' onChange={(e) => setChioce(e.target.value)} name="" id="">
                <option value="">Choose Document</option>
                {documents?.map(document => 
                  <option key={document.name} value={document.name}>{document.name}</option>
                )}
              </select>
              <p className='text-xs'>Make sure the document shows your photo, full name, date of birth and date of issue.</p>
              {
                choice && 
                  <div className='flex flex-col gap-4'>
                    <div className="flex flex-col gap-4">
                      <p className='text-xs'>Front</p>
                      <input name='front' id='front'  onChange={(e) => uploadImage(e.target.files![0])} type="file" className='rounded-md' placeholder='Upload' />
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className='text-xs'>Back</p>
                      <input name='back' id='back'  onChange={(e) => uploadBack(e.target.files![0])} type="file" className='rounded-md' placeholder='Upload' />
                    </div>
                    <button className='p-3 px-4 mt-8 text-white rounded-md cursor-pointer bg-primary' onClick={handleUpdateKYC}>Submit</button>
                  </div>
                  
              }
            </div>
            {/* <div className="flex-1 p-5 bg-gray-100 rounded-md shadow-md">
            </div> */}
          </div>
        </>
      )}
    </main>
  )
}

export default Deposit