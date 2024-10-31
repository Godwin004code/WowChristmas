import React, {useState, useEffect} from 'react'
import img1 from "../../assets/images-removebg-preview.png"

const OurSection = () => {
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
<section className='my-10 bg-white mx-10 sm:mx-5 sm:px-5 rounded-2xl py-10 px-10'>

      <h2 className=' '>
      <h2 className={` transition-all bg-[#067f201f] w-fit px-4 sm:text-sm py-1 rounded-[20px] mx-auto duration-700 ease-in-out ${
            animateH1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}> Our Products</h2>
       </h2>
       <h2 className={` transition-all duration-700 ease-in-out  text-center font-medium text-4xl sm:text-xl my-2 ${
            animateH2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Discover Our Enchanting Collections</h2>
     
      <h2 className={`sm:text-center text-base   mt-3 text-center text-[#000000b3]  font-normal sm:text-sm  my-5 transition-all duration-700 ease-in-out ${
            animateP ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} >
            Explore our range of festive products and elevate your holiday celebrations:
            </h2>
      <section className='mt-20 sm:mt-10 flex md-2:flex-col gap-10'>
        <div className='bg-[#f0f5f0] flex flex-col justify-between w-full rounded-2xl p-7'>
          <h2 className='font-medium text-2xl sm:text-lg'>Christmas Trees</h2>
          <img src={img1} className='w-[200px] my-5 object-cover' alt="Our Mission" />
          <p className='text-[#000000b3] text-base sm:text-sm font-normal'> Luxurious, elegant, and available in various styles and sizes to fit your space.</p>
        </div>
        <div className='bg-[#f0f5f0] flex flex-col justify-between  w-full rounded-2xl p-7'>
          <h2 className='font-medium text-2xl sm:text-lg'>Decorations & Lights</h2>
          <img src={img1} className='w-[200px]  my-5 object-cover' alt="Our Mission" />
          <p className='text-[#000000b3] text-base sm:text-sm font-normal'> From twinkling lights to vibrant baubles and wreaths, our collections are crafted to create a magical atmosphere.</p>
        </div>
        <div className='bg-[#f0f5f0] flex flex-col justify-between  w-full rounded-2xl p-7'>
          <h2 className='font-medium text-2xl sm:text-lg'>Gift Items</h2>
          <img src={img1} className='w-[200px] my-5 object-cover' alt="Our Mission" />
          <p className='text-[#000000b3] sm:text-sm text-base font-normal'>Thoughtful gifts and keepsakes that are perfect for family, friends, and colleagues.</p>
        </div>
      </section>
     <div className='w-fit mx-auto flex justify-center  mt-10 '>
        {window.location.pathname === "/products" ? "" : <button className='bg-[#067b22]  text-white ml-3 w-fit mx-auto my-auto text-sm font-normal h-[49px] px-5 rounded-xl'>Explore our collections</button>}
     
     </div>
      
    </section>
  )
}

export default OurSection