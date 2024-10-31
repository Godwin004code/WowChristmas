import React from 'react'
import img1 from "../../assets/images-removebg-preview.png"


const AboutWow = () => {

  return (
    <section className='mt-10  mx-10 sm:mx-0 sm:px-0 rounded-2xl py-10 px-10'>
      <h2 className='bg-[#067f201f] w-fit px-4 sm:text-sm py-1 rounded-[20px] mx-auto'>About WowChristmas
      </h2>
      <h2 className='text-center font-medium text-4xl sm:text-xl my-2'>Celebrate the Spirit of Christmas with WowChristmas</h2>
      
      <section className='flex sm:flex-col sm:gap-5 mt-20 sm:mt-10 w-[70%] md-2:w-[90%] mx-auto justify-between'>
                <div className='bg-white w-[40%] sm:hidden sm:w-full md-2:w-[50%] flex justify-center items-center pt-10 rounded-xl'>
                    <img className='h-[460px] sm:h-[300px]' src={img1} alt="Quick Assistance Image" />
                </div>
                <div className='w-[50%] sm:w-full md-2:w-[45%] my-auto'>
                    
                    <div className='bg-white w-[40%] hidden mt-6 sm:w-full md-2:w-[50%] sm:flex justify-center items-center pt-10 rounded-xl'>
                        <img className='h-[460px] sm:h-[300px]' src={img1} alt="Quick Assistance Image" />
                    </div>
                    <p className='text-[#000000b3] mt-4 sm:mt-6 font-normal sm:text-sm'>Christmas is more than just a holiday—it’s a feeling, a time to bond, and a season to spread love and joy. With our premium Christmas decorations, carefully curated gift items, and stunning Christmas trees, we help you create memorable moments with those who matter most.
Whether it’s for your home, office, or a special gathering, WowChristmas is here to make every corner shine with the magic of Christmas.
</p>
                </div>
            </section>
      
    </section>
  )
}

export default AboutWow