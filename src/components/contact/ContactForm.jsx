import React from 'react'

const ContactForm = () => {
  return (
    <form className='bg-[#fff] w-[80%] sm:w-[90%] mb-10 sm:mb-0 mx-auto py-16 sm:py-10 px-14 sm:px-3'>
        <div>
            <h2 className='text-center font-medium sm:text-xl text-4xl'>Get in Touch with WowChristmas</h2>
            <p className='text-center mb-16 text-[#000000b3] sm:text-sm font-normal'>Need help or have questions? We’re here for you! Fill out the form below or reach out to us directly:</p>
        </div>
    <div className='w-full flex gap-4 md:flex-col justify-between mb-12 sm:mb-[16px]'>
      <input type="text"  style={{border: '1px solid #0000004d'}} className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='First Name' />
      <input type="text" style={{border: '1px solid #0000004d'}}  className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Last Name' />
    </div>
    <div className='w-full flex gap-4 md:flex-col justify-between sm:mb-[16px] mb-12'>
      <input type="email"  style={{border: '1px solid #0000004d'}} className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Email' />
      <input type="number"  style={{border: '1px solid #0000004d'}}  className='w-[45%] md:w-[100%] h-[60px] pl-6 rounded-[10px] focus:outline-none' placeholder='Phone Number' />
    </div>
   
    <div>
      <textarea  style={{border: '1px solid #0000004d'}} className='w-full pl-6 pt-5 pb-32 rounded-[10px] focus:outline-none' placeholder='Your Text'></textarea>
    </div>
    <button className='bg-[#067b22] rounded-[10px] text-white w-full h-[80px] mt-12 sm:mt-[22px]'>Submit</button>
  </form>
  )
}

export default ContactForm