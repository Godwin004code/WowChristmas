import React from 'react'

import img from "../../assets/Vectorzigzag (1).png"

const Newsletter = () => {
  return (
    <section className='bg-[#067f20] mb-24 rounded-2xl mx-10 sm:mx-5 relative flex py-16 justify-center items-center flex-col'>
    <img src={img} className='absolute sm:h-full sm:object-cover top-0 right-0 left-0 bottom-0' alt="" />
    
    <h2 className='font-medium text-4xl sm:text-2xl text-white'>Don’t miss out!</h2>
    <p className='text-[#ffffffcc] text-base sm:text-sm sm:text-center sm:px-5 font-normal mt-2 mb-8'>Sign up for the WowChristmas Newsletter!</p>
    <div className='bg-[#F8F8FF] z-30 p-2 sm:w-[90%] sm:flex sm:flex-col  w-fit sm:mx-auto  rounded-xl' style={{ border: '1px solid #0000000d' }}>
      <input type="email" className='h-[49px] sm:w-full pl-4 pr-28 sm:pr-0 focus:outline-none bg-transparent' placeholder='Your email' />
      <button className='bg-[#067f20] text-white sm:w-fit sm:mx-auto my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Subscribe</button>
    </div>
  </section>
  )
}

export default Newsletter