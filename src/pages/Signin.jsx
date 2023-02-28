import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom'

export default function Signin() {
  return (
    <>
    <div className='w-full h-[700px]'>
        <div className='w-[700px] h-[680px] shadow-2xl border-[1px] border-gray m-auto text-center mt-[10px] bg-yellow-300'>
            <h1 className='mt-[30px] text-[30px] font-semibold'>SIGIN_IN</h1>
            
            <input type='botton' placeholder='EmailAddress' className='border-2 w-[500px] h-14 text-[25px] mt-8'></input>

            <input type='password' placeholder='Password' className='mt-8 border-2 w-[500px] h-14 text-[25px]'></input>
            <div className='flex justify-center ml-[10px]'>
                <p className='text-[20px]'>Dont Have a Account/</p><Link to='/Signup' className='text-[20px] font-semibold'>Register</Link>
                <Link to='/Forgotpassword' className='list-none  ml-[80px] text-[20px] space-x-4'>Forgot Password</Link>
            </div>
            
            
            <button className='hover:bg-blue-600 bg-blue-400 w-[500px] h-8 mt-14 text-[25px] cursor-pointer 
                              justify-center flex items-center ml-[110px]'>
                Singin</button>
            <button className='hover:bg-red-600 bg-red-400 w-[500px] h-14 mt-14 text-[25px] cursor-pointer 
                              justify-center flex items-center ml-[110px]'>
                <FcGoogle className='mr-2'></FcGoogle>Continue With Google</button>

            
            
           
        </div>
    </div>
    </>
  )
}
