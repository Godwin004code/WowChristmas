import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import Hero from './Hero'
import AboutWow from './AboutWow'
import OurSection from './OurSection'
import Newsletter from './Newsletter'
import Why from './Why'
import Testimonial from './Testimonial'
import GetIn from './GetIn'
import Blog from "./Blog"

const Home = () => {
  return (
    <section className=' w-full pt-7 h-full'>
    <Nav />
    <Hero />
    <AboutWow />
    <OurSection />
    <Why />
    <Testimonial />
    <GetIn />
    <Blog />
    <Newsletter />
    <Footer />
    </section>
  )
}

export default Home