import React, { useState, useEffect } from 'react'
import heroImg from "../../assets/images-removebg-preview.png"


const Hero = () => {
  const [animateH1, setAnimateH1] = useState(false);
  const [animateH2, setAnimateH2] = useState(false);
  const [animateH3, setAnimateH3] = useState(false);
  const [animateP, setAnimateP] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const [animateImg, setAnimateImg] = useState(false);

  useEffect(() => {
    // Start animations one by one with delays
    setTimeout(() => setAnimateH1(true), 500);
    setTimeout(() => setAnimateH2(true), 700);
    setTimeout(() => setAnimateH3(true), 900); // Delay for h1
    setTimeout(() => setAnimateP(true), 1000); // Delay for p
    setTimeout(() => setAnimateButton(true), 1500); // Delay for button
    setTimeout(() => setAnimateImg(true), 1500);
  }, []);
  return (
    <section className='mx-10 sm:mx-5 mt-10 px-10 sm:px-5 py-12 bg-white flex md-2:gap-5 md-2:flex-col justify-between rounded-2xl'>
      <div className='my-auto'>
        <h2 className="font-medium sm:text-center sm:text-3xl text-7xl " > <h2 className={` transition-all duration-700 ease-in-out ${animateH1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Bringing Back the  </h2>
          <h2 className={` transition-all duration-700 ease-in-out ${animateH2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            Magic of</h2> <h2 className={` transition-all duration-700 ease-in-out ${animateH3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}><span className='text-[#067b22]'>Christmas!</span></h2>
        </h2>
        <p className={`font-normal sm:text-center sm:text-[#000000b3] sm:text-sm text-lg my-5 transition-all duration-700 ease-in-out ${animateP ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} >
          From enchanting decorations to thoughtful gifts, let   <span className='text-[#067b22]'>WowChristmas</span> makes every moment magical.
        </p>
        <div className={` sm:hidden p-2 md-2:flex gap-5 md-2:justify-between w-fit md-2:w-full rounded-xl transition duration-700 ease-in-out ${animateButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}  >
          <button className='bg-[#067b22] text-white w-fit mx-auto my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Shop Now</button>
          <button className='bg-[#067b22] text-white ml-3 w-fit mx-auto my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Explore our collection</button>

        </div>
      </div>
      <div className={` transition duration-700 ease-in-out bg-[#F2F2F2] h-[700px] sm:h-[353px] pt-20 px-10 rounded-2xl md-2:w-full w-[45%] ${animateButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} >
        <img src={heroImg} className='h-full w-full ' alt="Hero image" />
      </div>
      <div className={`md-2:flex mt-5 gap-1 hidden  md-2:justify-between w-full md-2:w-full rounded-xl transition duration-700 ease-in-out  ${animateButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} >

        <button className='bg-[#067b22] text-white flex-1 w-fit mx-auto my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Shop Now</button> <button className='bg-[#067b22] text-white w-fit mx-auto my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Explore our collection</button>
      </div>
    </section>
  )
}

export default Hero