import React from 'react'
import {SiWhatsapp} from 'react-icons/si'
import {FiPhoneCall} from 'react-icons/fi'
import {IoMdArrowDropdown} from 'react-icons/io' 
import {useLocation,useNavigate} from 'react-router-dom' 

export default function Header() {
  const location= useLocation()
  const navigate=useNavigate()
  function show(route){
    if(route==location.pathname){
      return true
    }
  }
  return (
    <>
      <div className=' shadow-sm sticky top-0 z-50  bg-[#073b4c]'>
        <header className='flex  items-center '>
            <div className=' w-[170px] h-30 ml-8'>
                <img src='https://luxorides.com/assets/images/luxorides-square-logo-only-solid-whitepng-400ppi-13-500x500.webp'
                  className='w-[160px] h-[100px] cursor-pointer'
               />
            </div>
            <div className='ml-[200px] font-semibold'>
                <ul className='flex space-x-6 text-[25px] text-[#879a9f] hover:text-[#e6c65f] '>
                  <div>
                    
                  </div>
                    <li className={`text-[#b1a374!important] cursor-pointer ${show('/') && ' border-b-red-600'}`}
                     onClick={ ()=>navigate('/')}
            
                    >
                      Home</li>
                    <div className=' group'>
                     <li className={`relative flex items-center  cursor-pointer text-[#b1a374] hover:text-[#e6c65f]  ${show('/') && ' border-b-red-600'}`}
                     >
                      Explore<IoMdArrowDropdown />
              
                      <div className='group-hover:block   text-center 
                      bg-[#073b4c] w-[300px] h-[300px] absolute top-[30px] text-[#b1a374] hidden'>
                        <li className={`mt-16 hover:text-[#e6c65f]  ${show('/Categories') && ' border-b-red-600'}`}
                         onClick={ ()=>navigate('/Categories')}
                        >Explore by Categories</li>
                        <li className={`mt-6 hover:text-[#e6c65f] ${show('/Services') && ' border-b-red-600'}`}
                         onClick={ ()=>navigate('/Services')}
                        >
                          Explore by Services</li>
                        <li className={`mt-6 hover:text-[#e6c65f] ${show('/Brands') && ' border-b-red-600'}`}
                         onClick={ ()=>navigate('/Brands')}
                        >
                          Explore by Brands</li>
                        <li className={` mt-6 hover:text-[#e6c65f] ${show('/View') && ' border-b-red-600'}`}
                        onClick={ ()=>navigate('/View')}
                        >
                          Explore in one-view</li>
                        
                      </div>
                    </li>
                   </div>
              
                    <li className='text-[#b1a374] cursor-pointer flex group relative hover:text-[#e6c65f]'>
                      Location<IoMdArrowDropdown className='mt-2' />
                    <div className='group-hover:block hidden  text-center  
                      bg-[#073b4c] w-[250px] h-[400px] absolute top-[30px] right-[px] text-[#b1a374!important]'>
                        <li className='mt-12 hover:text-[#e6c65f]'>NCR</li>
                        <li className={`mt-6 hover:text-[#e6c65f]  ${show('/Jaipur') && ' border-b-red-600'}`}
                        onClick={ ()=>navigate('/Jaipur')}
                        >jaipur</li>
                        <li className={`mt-6 hover:text-[#e6c65f] ${show('/Agra') && ' border-b-red-600'}`}
                        onClick={ ()=>navigate('/Agra')}
                        >
                          Agra</li>
                        <li className='mt-6 hover:text-[#e6c65f]'>Delhi</li>
                        <li className='mt-6 hover:text-[#e6c65f]'>Goa</li>
                      </div>
                    </li>
                    <li className={`text-[#b1a374] hover:text-[#e6c65f] cursor-pointer ${show('/') && ' border-b-red-600'}`}
                     onClick={ ()=>navigate('/Support')}
                     >
                      Support</li>
                    <li className='cursor-pointer flex group relative text-[#b1a374] hover:text-[#e6c65f]'>
                      More<IoMdArrowDropdown className='mt-2'/>
                    <div className='group-hover:block hidden  text-center 
                      bg-[#073b4c] w-[300px] h-[350px] absolute top-[30px] left-[-130px] text-[#b1a374!important]'>
                        <li className={`hover:text-[#e6c65f] mt-12 {show('/Terms') && 'text-black border-b-red-600'}`}
                          onClick={ ()=>navigate('/Terms')}>
                          Term & Conditions</li>
                        <li className='hover:text-[#e6c65f] mt-6'>Employee Zone</li>
                        <li className='mt-6 hover:text-[#e6c65f]'>Testimoniols</li>
                        <li className='mt-6 hover:text-[#e6c65f]'>Catologues</li>
                        <li className='mt-6 hover:text-[#e6c65f]'>About</li>
                      </div>
                    </li>
                </ul>
            </div>
            <div className='flex space-x-8 ml-[20px]'>
              <div className=' flex justify-center  rounded-full bg-white hover:bg-gray-200 border-2 w-40 h-[54px] font-semibold text-[20px] '>
              <li className={`cursor-pointer flex items-center  ${show('/Signin') && 'text-black border-b-red-600'}
                `}
                onClick={ ()=>navigate('/Signin')}>
               Signin</li>
              </div>
               <div  className='space-x-2 flex justify-center bg-green-400 hover:bg-green-600 rounded-full border-2 w-60 h-[54px] font-semibold text-[20px]'>
               <button className='flex items-center space-x-2 '>
                <SiWhatsapp className='flex mr-2'/>
                Whatsapp</button>
               </div>
               <div  className=' flex justify-center hover:bg-white hover:text-black text-white rounded-full border-4 w-40 h-[54px] font-semibold text-[20px] ' >
               <button className='flex items-center'> 
                <FiPhoneCall className='mr-4' />
                call us</button>
               </div>
              
               
            </div>
        </header>

    </div>
    </>
    
  )
}
