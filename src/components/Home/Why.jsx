import React, {useState, useEffect} from 'react'
import img1 from "../../assets/images-removebg-preview.png"

const Why = () => {
    const [animateH1, setAnimateH1] = useState(false);
    const [animateH2, setAnimateH2] = useState(false);
    const [animateP, setAnimateP] = useState(false);
  return (
    <section className='my-10  mx-10 sm:mx-5 sm:px-5 rounded-2xl py-10 px-10'>

      <h2 className=' '>
      <h2 className={` transition-all bg-[#067f201f] w-fit px-4 sm:text-sm py-1 rounded-[20px] mx-auto duration-700 ease-in-out`}>Why WowChristmas?</h2>
       </h2>
       <h2 className={` transition-all duration-700 ease-in-out  text-center font-medium text-4xl sm:text-xl my-2`}>
       Make Your Christmas Wow-Worthy!</h2>
     
      <h2 className={`sm:text-center text-base   mt-3 text-center text-[#000000b3]  font-normal sm:text-sm  my-5 transition-all duration-700 ease-in-out `} >
      We don’t just sell products; we create experiences. Here’s why WowChristmas is your go-to destination this holiday season:

            </h2>
      <section className='mt-20 sm:mt-10 flex md-2:flex-col gap-10'>
        <div className='bg-[#fff] flex flex-col justify-between w-full rounded-2xl p-7'>
          <h2 className='font-medium text-2xl sm:text-lg'>Unmatched Quality</h2>
          <img src={img1} className='w-[200px] my-5 object-cover' alt="Our Mission" />
          <p className='text-[#000000b3] text-base sm:text-sm font-normal'>Our products are crafted with love and designed to bring joy.
          </p>
        </div>
        <div className='bg-[#fff] flex flex-col justify-between  w-full rounded-2xl p-7'>
          <h2 className='font-medium text-2xl sm:text-lg'>Affordable Magic</h2>
          <img src={img1} className='w-[200px]  my-5 object-cover' alt="Our Mission" />
          <p className='text-[#000000b3] text-base sm:text-sm font-normal'>We offer a range of price options to fit every budget while maintaining premium quality.
          </p>
        </div>
        <div className='bg-[#fff] flex flex-col justify-between  w-full rounded-2xl p-7'>
          <h2 className='font-medium text-2xl sm:text-lg'>Incredible Variety</h2>
          <img src={img1} className='w-[200px] my-5 object-cover' alt="Our Mission" />
          <p className='text-[#000000b3] sm:text-sm text-base font-normal'>From classic decor to modern trends, there’s something for everyone at WowChristmas.
          </p>
        </div>
      </section>
     
      
    </section>
  )
}

export default Why