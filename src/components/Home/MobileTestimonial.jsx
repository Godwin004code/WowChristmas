
import React from 'react'
import Slider from "react-slick";
import { ImQuotesLeft } from "react-icons/im";

import quoteImg from "../../assets/images-removebg-preview.png"
import personOne from "../../assets/images-removebg-preview.png"
import personTwo from "../../assets/images-removebg-preview.png"

const MobileTestimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        useCSS: false
      };
  return (
    <div className=' justify-between text-center w-full mt-20 bg-[#EEEBFF] hidden md:block'>
      <h2 className='text-[#414040] font-semibold  pt-10 text-[32px] mb-10'>Here is what our Student have to say about us</h2>
    <div className='w-[80%] mx-auto pb-20'>
    <Slider {...settings}>
    
    <div className=' testimonial mb-10'>
      <section className='flex flex-col items-center justify-center p-8 rounded-xl bg-[white]'>
        <img src={personOne} alt="person one" className='w-[150px] h-[150px] rounded-[50%]' />
  <ImQuotesLeft color='#F47D57' className='w-[30px] h-[30px] mt-8 mb-5 ' />
  <p className='font-normal text-base text-center text-[#3D3D3D] italic mb-5'>Quest has been a catalyst for my success. Their tech programs are top-notch, equipping me with the skills needed to thrive in today's   digital landscape. The personalized support from instructors helped me overcome challenges and achieve my goals.</p>
  <h2 className='text-[#272525] font-semibold text-base mb-3'>Adeyemi  Oluwasemilore</h2>
  <p className='text-sm text-[#555252] font-normal'>University of Ilorin</p>
      </section>
      
    </div>
    <div className=' testimonial mb-10'>
      <section className='flex flex-col items-center justify-center p-8 rounded-xl bg-[white]'>
        <img src={personOne} alt="person one" className='w-[150px] h-[150px] rounded-[50%]' />
  <ImQuotesLeft color='#F47D57' className='w-[30px] h-[30px] mt-8 mb-5 ' />
  <p className='font-normal text-base text-center text-[#3D3D3D] italic mb-5'>Quest has been a catalyst for my success. Their tech programs are top-notch, equipping me with the skills needed to thrive in today's   digital landscape. The personalized support from instructors helped me overcome challenges and achieve my goals.</p>
  <h2 className='text-[#272525] font-semibold text-base mb-3'>Adeyemi  Oluwasemilore</h2>
  <p className='text-sm text-[#555252] font-normal'>University of Ilorin</p>
      </section>
      
    </div>
    <div className=' testimonial mb-10'>
      <section className='flex flex-col items-center justify-center p-8 rounded-xl bg-[white]'>
        <img src={personOne} alt="person one" className='w-[150px] h-[150px] rounded-[50%]' />
  <ImQuotesLeft color='#F47D57' className='w-[30px] h-[30px] mt-8 mb-5 ' />
  <p className='font-normal text-base text-center text-[#3D3D3D] italic mb-5'>Quest has been a catalyst for my success. Their tech programs are top-notch, equipping me with the skills needed to thrive in today's   digital landscape. The personalized support from instructors helped me overcome challenges and achieve my goals.</p>
  <h2 className='text-[#272525] font-semibold text-base mb-3'>Adeyemi  Oluwasemilore</h2>
  <p className='text-sm text-[#555252] font-normal'>University of Ilorin</p>
      </section>
     
    </div>
    
    <div className=' testimonial mb-10'>
      <section className='flex flex-col items-center justify-center p-8 rounded-xl bg-[white]'>
        <img src={personOne} alt="person one" className='w-[150px] h-[150px] rounded-[50%]' />
  <ImQuotesLeft color='#F47D57' className='w-[30px] h-[30px] mt-8 mb-5 ' />
  <p className='font-normal text-base text-center text-[#3D3D3D] italic mb-5'>Quest has been a catalyst for my success. Their tech programs are top-notch, equipping me with the skills needed to thrive in today's   digital landscape. The personalized support from instructors helped me overcome challenges and achieve my goals.</p>
  <h2 className='text-[#272525] font-semibold text-base mb-3'>Adeyemi  Oluwasemilore</h2>
  <p className='text-sm text-[#555252] font-normal'>University of Ilorin</p>
      </section>
     
    </div>
    
    <div className=' testimonial mb-10'>
      <section className='flex flex-col items-center justify-center p-8 rounded-xl bg-[white]'>
        <img src={personOne} alt="person one" className='w-[150px] h-[150px] rounded-[50%]' />
  <ImQuotesLeft color='#F47D57' className='w-[30px] h-[30px] mt-8 mb-5 ' />
  <p className='font-normal text-base text-center text-[#3D3D3D] italic mb-5'>Quest has been a catalyst for my success. Their tech programs are top-notch, equipping me with the skills needed to thrive in today's   digital landscape. The personalized support from instructors helped me overcome challenges and achieve my goals.</p>
  <h2 className='text-[#272525] font-semibold text-base mb-3'>Adeyemi  Oluwasemilore</h2>
  <p className='text-sm text-[#555252] font-normal'>University of Ilorin</p>
      </section>
     
    </div>
    
    <div className=' testimonial mb-10'>
      <section className='flex flex-col items-center justify-center p-8 rounded-xl bg-[white]'>
        <img src={personOne} alt="person one" className='w-[150px] h-[150px] rounded-[50%]' />
  <ImQuotesLeft color='#F47D57' className='w-[30px] h-[30px] mt-8 mb-5 ' />
  <p className='font-normal text-base text-center text-[#3D3D3D] italic mb-5'>Quest has been a catalyst for my success. Their tech programs are top-notch, equipping me with the skills needed to thrive in today's   digital landscape. The personalized support from instructors helped me overcome challenges and achieve my goals.</p>
  <h2 className='text-[#272525] font-semibold text-base mb-3'>Adeyemi  Oluwasemilore</h2>
  <p className='text-sm text-[#555252] font-normal'>University of Ilorin</p>
      </section>
     
    </div>
    
  </Slider>
    </div>
    </div>
  )
}

export default MobileTestimonial