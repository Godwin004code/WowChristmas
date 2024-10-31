import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import AboutHero from './AboutHero'

const About = () => {
  return (
    <div className='bg-[#f0f5f0] w-full pt-7 h-full'>
        <Nav />
        <AboutHero />
        <Footer />
    </div>
  )
}

export default About