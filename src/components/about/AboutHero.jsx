import React, {useState, useEffect} from 'react'
import img from "../../assets/images-removebg-preview.png"

const AboutHero = () => {
  const [animateH1, setAnimateH1] = useState(false);
  const [animateH2, setAnimateH2] = useState(false);
  const [animateP, setAnimateP] = useState(false);
  
  useEffect(() => {
    // Start animations one by one with delays
    setTimeout(() => setAnimateH1(true), 500);
    setTimeout(() => setAnimateH2(true), 700);
    setTimeout(() => setAnimateP(true), 1000); 
    
  }, []);
  return (

    <>
    <section className='mt-10 sm:w-[90%] sm:mx-auto relative'>
        <img src={img} className=' w-full h-[600px] sm:h-[320px] sm:object-cover' alt="happy driver" />
        <section className='bg-[#00000033] pb-20 sm:pb-10 sm:pl-6 pl-10 absolute top-0 flex justify-between flex-col w-full h-full'>
            <div></div>
            <h2 className=" sm:text-center sm:text-3xl font-medium text-5xl text-white " > <h2 className={` transition-all duration-700 ease-in-out ${
            animateH1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>About Us </h2> </h2>

        </section>
    </section>
    <section className='w-[90%] mx-auto my-16'>
    <h2 className={` transition-all duration-700 ease-in-out font-medium text-5xl sm:text-2xl ${
            animateH2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Story</h2>
            <p className={`  font-normal text-base text-[#000000b3]  mt-3 sm:text-sm  my-5 transition-all duration-700 ease-in-out ${
            animateP ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} >
            WowChristmas was born from a simple belief—that the magic of Christmas is something to be cherished and shared. Our passion lies in helping people create unforgettable memories with their loved ones. From our thoughtfully designed products to our inspiring stories, we aim to make every Christmas special.
            At WowChristmas, we focus on offering premium-quality decorations, delightful gifts, and stunning Christmas trees that spread joy and warmth. Whether you’re looking to brighten up your home, plan a holiday gathering, or find the perfect gift, WowChristmas is here to help you make it magical.
            </p>
        
    </section>
    <section className='w-[90%] hidden mx-auto mt-12'>
        <h2 className="pb-5 mb-5 font-medium text-base sm:text-sm" style={{borderBottom: '1px solid #00000033'}}>Read our Vision and Mission statement</h2>
        <h2 className='font-semibold text-xl sm:text-base'>Mission Statement</h2>
        <p className=' sm:text-sm text-[#000000b3]'>To deliver fast, dependable roadside assistance through innovative technology and a trusted network of service providers, ensuring every driver feels safe and supported on the road.</p>
        <h2 className='font-semibold text-xl mt-5 sm:text-base'>Vision Statement</h2>
        <p className=' sm:text-sm text-[#000000b3]'>To be the leading platform for roadside assistance, revolutionizing the way drivers connect with services, and setting a new standard for safety, reliability, and customer satisfaction worldwide.</p>
    </section>
    </>
  )
}

export default AboutHero
