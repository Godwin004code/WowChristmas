import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import OurSection from '../Home/OurSection'

const Products = () => {
  return (
    <div className='bg-[#f0f5f0] w-full pt-7 h-full'>
        <Nav />
        <OurSection />
        <div className='mb-20'></div>
        <Footer />
    </div>
  )
}

export default Products