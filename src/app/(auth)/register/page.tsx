'use client'
import Link from 'next/link'
import React, { useReducer, FormEvent } from 'react'
import { IUserRegister, IRegistereducerAction } from '@/interfaces'
import { toast } from 'react-toastify'
import usePost from '@/hooks/usePost'
import { useRouter } from 'next/navigation'
import { apiRegister } from '@/services/AuthService'
import Loader from '@/components/Loader'


const initialState: IUserRegister = {
  email: '',
  password: '', 
  confirm_password: '',
  first_name: '',      
  last_name: '',        
  terms: false  
}

const Register = () => {
  const [loading, setLoading] = React.useState(false)
  const [user, dispatch] = useReducer((state: IUserRegister, action: IRegistereducerAction) => {
    return { ...state, [action.type]: action.payload }
}, initialState)

const router = useRouter()

const registerMutation = usePost<IUserRegister, any>(
    apiRegister,
    {
      onSuccess: (data) => {
          // queryClient.invalidateQueries('user')
          // sessionStorage.setItem('email', user.email)
          // console.log({ data })
          console.log({ message: "Registered Successfully", data })
          router.push('/auth/login')
          
      },
      showErrorMessage: true,
    }
  )

  console.log({user})



const handleRegister = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault()
  setLoading(true)

  console.log('registering')


  if (user?.password !== user?.confirm_password) {
      toast.error("Password Mismatch")
      return
  }
  if (user?.password.length < 6) {
      toast.error("Password must be at least 6 characters")
      return
  }
  if (!user?.terms) {
      toast.error("You must agree to the terms and conditions")
      return
  }

  try {
    console.log("user", user )
    // const res = await apiRegister(user)
    // console.log({res})
    registerMutation?.mutate(user)
    console.log(registerMutation)

      // console.log("res", res)
  } catch (error: any) {
      console.log("error", error)
      toast.error(error?.response?.data?.message || "An error occured")

  }
  setLoading(false)
}


  return (
    <div className='md:pl-24'>
      {registerMutation?.isLoading && <Loader />}
      <div className="flex flex-col items-center gap-4 mt-16 mb-8">
          <h1 className='text-2xl font-bold'>Create an Account</h1>
          <p className='text-sm'>Create an account to Get Started</p>
      </div>
      <div className="">
        <div className='mb-2'>
            <form className='grid gap-4' onSubmit={handleRegister}>
              <div className='flex flex-col gap-2 text-xs'>
                <label htmlFor="first_name">First Name</label>
                <input required value={user?.first_name} onChange={(e) => dispatch({ type: "first_name", payload: e.target.value})} type='text' name="first_name" id="first_name" className='p-2 px-3 border rounded-md placeholder:text-sm' placeholder='Enter First Name' />
              </div>
              <div className='flex flex-col gap-2 text-xs'>
                <label htmlFor="last_name">Last Name</label>
                <input required value={user?.last_name} onChange={(e) => dispatch({ type: "last_name", payload: e.target.value})}  type="text" name="last_name" id="last_name" className='p-2 px-3 border rounded-md placeholder:text-sm' placeholder='Enter Last Name' />
              </div>
              <div className='flex flex-col gap-2 text-xs'>
                <label htmlFor="email">Email Address</label>
                <input required value={user?.email} onChange={(e) => dispatch({ type: "email", payload: e.target.value})}  type="email" name="email" id="email" className='p-2 px-3 border rounded-md placeholder:text-sm' placeholder='Enter Email Address' />
              </div>
              <div className='flex flex-col gap-2 text-xs'>
                <label htmlFor="password">Password</label>
                <input required value={user?.password} onChange={(e) => dispatch({ type: "password", payload: e.target.value})}  type="password" name="password" id="password" className='p-2 px-3 border rounded-md placeholder:text-sm' placeholder='Enter Password' />
              </div>
              <div className='flex flex-col gap-2 text-xs'>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input required value={user?.confirm_password} onChange={(e) => dispatch({ type: "confirm_password", payload: e.target.value})}  type="password" name="confirm_password" id="confirm_password" className='p-2 px-3 border rounded-md placeholder:text-sm' placeholder='Confrim Password' />
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" name="terms" id="terms" checked={String(user?.terms) === "true"} onChange={(e) => dispatch({ type: "terms", payload: String(!user?.terms) })}  />
                <p className='text-xs'>I agree to Polar Profits Terms & Conditions and Privacy Policy</p>
              </div>
              <button type='submit' className='flex items-center justify-center w-full gap-2 p-4 pl-5 pr-6 text-sm font-bold text-white rounded-md bg-primary'>
                Proceed
              </button>
              <p className='my-2 text-sm text-center'>
              Already have an account? {'  '}
                <Link href='/login' className='font-semibold'>
                  Login
                </Link>
              </p>
            </form>
        </div>
        
      </div>
    </div>
  )
}

export default Register