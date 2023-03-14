import React, { useState } from 'react'
import {BsChevronLeft,BsChevronRight} from 'react-icons/bs'



export default function Home() {

  
    const slides=[
      {url:'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg'},
     {url:'https://cdn.pixabay.com/photo/2014/06/04/16/36/man-362150__340.jpg'},
      {
        url:'https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747__340.jpg'
      },
      {url:'./car9.jpg'},
    ]
  const [Currentstate, setCurrentstate]=useState(0)

  const prevslide=() =>{
    const isfirstdlide = Currentstate===0;
    const newindex= isfirstdlide ? slides.length-1: Currentstate-1;
    setCurrentstate(newindex); 
  };
   const nextslide=() =>{
    const isfirstdlide = Currentstate=== slides.length-1;
    const newindex= isfirstdlide ? 0: Currentstate+1;
    setCurrentstate(newindex); 
   };
 
    
  return (
    <>
    <div className='w-full h-[700px] relative'>
      <div style={{backgroundImage: `url(${slides[Currentstate].url})`}}
       className='w-full h-full bg-center bg-cover duration-500'></div>
      

    </div>
    <div className='absolute top-[50%] translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 text-white bg-black cursor-pointer'>
    <BsChevronLeft onClick={prevslide} size={30} />
      
    </div>
    <div className='absolute top-[50%] translate-x-0 translate-y-[-0%] right-5 rounded-full p-2 text-white bg-black cursor-pointer'>
      <BsChevronRight onClick={nextslide} size={30}/>
      
    </div>
    <div className=' h-[600px] '>
      <div className=' mt-[200px] text-center'>
       <li className='text-[70px] list-none'><span className='font-semibold text-[80px]'>Luxury</span> Cars for rent</li>
       <li className='text-[70px] list-none '>Luxury is <span className='font-semibold text-[60px] '>  Contagious!</span> Choose<span className='font-semibold text-[60px]'>Wisely</span></li>
      <div className='space-x-10 mt-10 h-20'>
        <button className='border-[1px] border-black w-[400px] p-4 text-[22px] rounded-full bg-[#b1a374] text-white font-semibold hover:bg-[#e6c65f]'>Explore cars by Category</button>
        <button className='border-[1px] border-black w-[400px] p-4 text-[22px]  rounded-full bg-[#b1a374] text-white font-semibold hover:bg-[#e6c65f]'>Explore cars by Brands</button>
      </div>
      <button className='mt-10 border-[1px] border-[#b1a374] w-[400px] p-4 text-[22px]  rounded-full text-[#b1a374] hover:text-white font-semibold hover:bg-[#b1a374]'> One View of the Fleet</button>

      </div>
      
    </div>
    <div className='bg-blue-200 py-10'>
      <div className='text-center p-10 list-none'>
        <li className='text-[50px] tracking-wider'>We`re  <span className='font-semibold'> COVID-19 ready</span></li>
        <li className='text-[30px] mt-10 tracking-widest'>Lorem ipsum dolor sit amet consectetur adipisicing<br></br>
           elit. Esse, ratione! Fugit nobis laudantium, nisi assumenda aspernatur<br></br>
           repellendus <span className='text-green-600'>cupiditate impedit non praesentium.</span> </li>
      </div>
      <div className='flex justify-center space-x-12'>
        <div className='bg-[#ccf5f4] pb-4  rounded-[7%]'>
          <div className='p-4'>
            <img src='./covid-1.webp' className='w-[400px] h-[250px] rounded-[7%]' />
          </div>
          <div className=' mt- h-[200px] w-[400px] list-none bg-white p-4 m-auto  rounded-[7%]'>
            <li className='text-center text-[25px] '>Regulary Clean and Sanitised</li>
            <li className='text-center text-[20px] mt-8'>Lorem ipsum dolor sit amet, <br></br>
              consectetur adipisicing  <br></br>
              repellendus velit.</li>
          </div>

        </div>
        <div  className='bg-[#ccf5f4] pb-4  rounded-[7%]'>
        <div className='p-4'>
          <img src='./covid-2.jpg' className='w-[400px] h-[250px] rounded-[7%]'/>
        </div>
        <div  className=' mt- h-[200px] w-[400px] list-none bg-white p-4 m-auto  rounded-[7%]'>
          <li className='text-center text-[25px] mt-'>Minimal/No Touch Policy</li>
          <li className='text-center text-[20px] mt-8'>Lorem ipsum dolor sit amet, <br></br>
              consectetur adipisicing  <br></br>
              repellendus velit.</li>
        </div>

        </div>
        <div className='bg-[#ccf5f4] pb-4  rounded-[7%]'>
          
        <div className='p-4'>
          <img src='./covid-3.jpg' className='w-[400px] h-[250px] rounded-[7%]'/>
        </div>
        <div className=' mt- h-[200px] w-[400px] list-none bg-white p-4 m-auto  rounded-[7%]'>
          <li className='text-center text-[25px] '>Precautionary Tests</li>
          <li className='text-center text-[20px] mt-8'>Lorem ipsum dolor sit amet, <br></br>
              consectetur adipisicing  <br></br>
              repellendus velit.</li>
        </div>

        </div>
        
        

    
     </div>
    </div>
    <div>
      <div className='list-none text-center '>
      <h1 className='mt-12 text-[70px]'>What We Offer</h1>
      <li className='mt-6 text-[25px] font-serif'>Lorem ipsum dolor sit, amet consectetur adipisicing possimus adipisci<br></br>
        elit. Inventore voluptates aliquam quasi</li>

      </div>
      <div className='flex  justify-center items-center space-x-8 mt-10 '>
        <div className='bg-blue-100 text-center list-none rounded-[7%]'>
          <img src='./wedding.jpg' className='w-[350px] h-[320px] p-4 rounded-[17%]'/>
          <li className='text-[22px] mt-4 pb-12'>Cars for <span className='font-semibold'>Wedding</span></li>
        </div>
        <div  className='bg-blue-100 text-center list-none rounded-[7%]'>
          <img src='./corpurate.jpg'  className='w-[350px] h-[320px] p-4 ]  rounded-[17%]'/>
          <li className='text-[22px] mt-4 pb-12'>Cars for <span className='font-semibold'>corpurate</span></li>
        </div>
        <div  className='bg-blue-100 text-center list-none rounded-[7%]'>
          <img src='./support.jpg'  className='w-[350px] h-[320px] p-4 ] rounded-[17%]'/>
          <li className='text-[22px] mt-4 pb-12'>Cars for <span className='font-semibold'>services</span></li>
        </div>
        <div  className='bg-blue-100 text-center list-none rounded-[7%]'>
          <img src='./service.webp'  className='w-[350px] h-[320px] p-4 ] rounded-[17%]'/>
          <li className='text-[22px] mt-4 pb-12'>Cars for <span className='font-semibold'>Support</span></li>
        </div>
      </div>
      <div className='flex justify-center pb-10 space-x-10 px-6 list-none mt-12'>
        <div className=' text-center w-[450px] h-[450px] relative hover:shadow-lg'>
          <img src='https://luxorides.com/assets/images/bmw-logo-for-luxorides-512px-1x1.webp'/>
          <li className='text-[25px]  absolute top-[80%] left-[30%]'>Rent an <span className='font-semibold'>BMW</span></li>
        </div>
        <div className=' text-center  w-[450px] h-[450px] relative hover:shadow-lg'>
          <img src='http://car-logos.net/wp-content/uploads/2018/09/jaguar-logo.jpg'
          className=''/>
          <li className='text-[25px]  absolute top-[80%] left-[30%]'>Rent an <span className='font-semibold'>jaguar</span></li>
        </div>
        <div className=' text-center  w-[450px] h-[450px] relative hover:shadow-lg'>
          <img src='./audi2.jpg'/>
          <li className='text-[25px]  absolute top-[80%] left-[30%]'>Rent an <span className='font-semibold'>Audi</span></li>
        </div>
        <div className=' text-center  w-[450px] h-[450px] relative hover:shadow-lg'>
          <img src='./marcedes.jpg' className=''/>
          <li className='text-[25px]  absolute top-[80%] left-[10%]'>Rent an <span className='font-semibold'>Mercedes-Benz</span></li>
        </div>



      </div>
   



    </div>
    <div className=''>
      <div className='text-center list-none mt-12'>
        <h1 className='text-[80px]'>How Choose Us</h1>
        <li className=' text-[27px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, ipsam!</li>
      </div>
      <div className='flex justify-center space-x-[200px] mt-10 list-none pb-[70px]'>
        <div className=''>
          <h1 className='text-center  text-[80px] text-[#c1c1c1]'>01,</h1>
          <li className='text-center  text-[27px]'>Lorem ipsum dolor  <span className='font-semibold'>sit amet</span><br></br>
             consectetur adipisicing elit.<br></br>
             this Ut, harum!</li>
        </div>
        <div className=''>
          <h1 className='text-center  text-[80px] text-[#c1c1c1]'>02,</h1>
          <li className='text-center text-[27px]'>Lorem ipsum dolor  <span className='font-semibold'>sit amet</span><br></br>
             consectetur adipisicing elit.<br></br>
             this Ut, harum!</li>
        </div>
        <div className=''>
          <h1 className='text-center  text-[80px] text-[#c1c1c1]'>03,</h1>
          <li className='text-center  text-[27px]'>Lorem ipsum dolor <span className='font-semibold'>sit amet</span><br></br>
             consectetur adipisicing elit.<br></br>
             this Ut, harum!</li>
        </div>
      </div>
    </div>
    <div className='w-full h-[800px] border-4 bg-gray-200  relative'>
      <div className='w-full h-full m-auto text-center'>
       <h1 className='text-[80px]'>How to Work it</h1>
       <p className='mt-10 text-[30px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
       <p className=' text-[30px]  text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, minus?</p>
       <p className='text-[30px]  text-gray-500'>Lorem ipsum dolor sit amet <span className='text-green-400'>consectetur </span>adipisicing elit.</p>
    <div className='flex justify-center mt-[50px] w-full space-x-4'>
        <div className='border-4 w-[100px] h-[100px] rounded-[50%] border-black text-[50px] text-center'>
          1
      
        </div>
        <div className=' mt-10 w-[25%] h-[2px] bg-black'>

        </div>
        <div className='border-4 w-[100px] h-[100px] rounded-[50%] border-black text-[50px] text-center'>
          2
        </div>
        <div className='mt-10 w-[25%] h-[2px] bg-black'>

        </div>
        <div className='border-4 border-black rounded-[50%] text-[50px] w-[100px] h-[100px] text-[20px] text-center p-[5px]'>3</div>

      </div>
      <div className='flex justify-between  px-[140px] mt-[30px]'>
      <div className=''>
        <h1 className='text-[40px]'>Choose your Ride</h1>
        <p className='text-[20px]'>Lorem ipsum dolor sit amet.</p>
        <p p className='text-[20px]'>Your Requairments</p>
        <p p className='text-[20px]'>Lorem ipsum dolor sit amet.</p>
        <p className=' text-[20px] space-x-4'>Explore <button className='font-semibold'>Cars/</button><button  className='font-semibold'>
          Brands/</button><button  className='font-semibold'>Services</button></p>
      


      </div>
      <div>
        <h1 className='text-[40px]'>initiate Booking Request</h1>
        <p p className='text-[20px]'>Your Booking</p>
        <p className=' text-[20px] space-x-4'> <button className='font-semibold'>Booking Form</button></p>
      

      </div>
      <div>
        <h1 className='text-[40px]'>Get Confirmation</h1>
        <p className='text-[20px]'>Lorem ipsum dolor sit amet.</p>
        <p p className='text-[20px]'>Your Requairments</p>
       
        <button className='font-semibold text-[20px]'>Contact Us</button>
      

      </div>
      </div>
      

      
        

      </div>
    </div>
    <div className=''>
      <div className='flex justify-center items-center'>
        <img src='./ride.jpg'/>
        <div>
          
        </div>
        <li>RIDE<br></br><span >ELITE</span></li>
        <li>Lorem ipsum dolor sit amet consectetur <br></br>
          adipisicing elit. Possimus beatae debitis, placeat,<br></br>
           distinctio ducimus dolorum facilis repellen<br></br>
          dolore voluptatibus unde! Odio, illo?</li>
      </div>

    </div>

    

    </>
  )
}