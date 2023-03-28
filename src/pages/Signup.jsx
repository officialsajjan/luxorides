import React from 'react'
import { Link } from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'

export default function Signup() {

function onSubmit(){

}


  return (
    <>
    <div className='w-full h-[700px] mt-10'>
        <div className='w-[700px] h-[680px] shadow-2xl border-[1px] border-gray m-auto text-center mt-[10px] ' onSubmit={onSubmit}>
            <h1 className='mt-[30px] text-[30px] font-semibold'>SIGIN-UP</h1>
            <form  onSubmit={onSubmit}>

                <input type='botton' placeholder='name' className='border-2 w-[450px] h-14 text-[25px] mt-10'></input>
                <input type='botton' placeholder='Email' className='border-2 w-[450px] h-14 text-[25px] mt-10'></input>
               <input type='password' placeholder='Password'
            
             
           
           className='mt-10 border-2 w-[450px] h-14 text-[25px] ml-[px]'></input></form>
            <div className='flex justify-center ml-[10px]'>
                <p className='text-[20px]'>Dont Have a Account ?</p>
                <Link to='/Forgotpassword' className='list-none  ml-[80px] text-[20px] space-x-4'>Forgot Password</Link>
            </div>
            
            <button className='hover:bg-green-600 bg-blue-400 w-[500px] h-10 mt-14 text-[25px] cursor-pointer 
                              justify-center flex items-center ml-[110px]'>
                Signup</button>
            <button className='hover:bg-blue-600 bg-blue-400 w-[500px] h-14 mt-14 text-[25px] cursor-pointer 
                              justify-center flex items-center ml-[110px]'>
                <FcGoogle className='mr-2'></FcGoogle>Continue With Google</button>

            
            
           
        </div>
    </div>
    </>
  )
}
