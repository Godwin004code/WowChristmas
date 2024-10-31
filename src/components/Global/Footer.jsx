import React from 'react'
import {Link} from 'react-router-dom'
import logo from "../../assets/images-removebg-preview.png"
import { FaInstagram, FaTwitter , FaFacebook, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <div  className='bg-white mb-10'>
        <section className='flex justify-between w-[90%] mx-auto pt-10'>
        <div className='my-auto'>
       <div className='flex gap-3'>
       <img src={logo} className='w-[68px] h-[68px]' alt="Logo" />
       </div>
        </div>
        <nav className='my-auto sm:hidden'>
  <ul className='flex gap-8'>
    <li>
      <Link href="/about" className={  "text-[#000000cc] font-medium text-base"}>About us</Link>
    </li>
    <li>
      <Link href="/service-provider" className={  "text-[#000000cc] font-medium text-base"}>Products</Link>
    </li>
    <li>
      <Link href="/contact" className={ "text-[#000000cc] font-medium text-base"}>Blog</Link>
    </li>
    <li>
      <Link href="/service-provider" className={  "text-[#000000cc] font-medium text-base"}>Contact</Link>
    </li>
  </ul>
</nav>
        <div className='flex gap-5 my-auto'>
          <div className='bg-[#067b22c4] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <FaInstagram color='white' size={24} />
          </div>
          <div className='bg-[#067b22c4] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <FaTwitter color='white' size={24}  />
          </div>
          <div className='bg-[#067b22c4] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <FaFacebook color='white' size={24}  />
          </div>
          <div className='bg-[#067b22c4] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <FaYoutube color='white' size={24}  />
          </div>
        </div>
      </section>
      <div className='  w-[90%] mx-auto my-10 sm:flex justify-between hidden'>
  <ul className='flex flex-col gap-8'>
    <li>
      <Link href="/" className={  "text-[#000000cc] font-medium text-base"}>Home</Link>
    </li>
    <li>
      <Link href="/about" className={  "text-[#000000cc] font-medium text-base"}>About us</Link>
    </li>
    <li>
      <Link href="/service-provider" className={  "text-[#000000cc] font-medium text-base"}>Service providers</Link>
    </li>
   
  </ul>
  <ul className='flex flex-col gap-8'>
    
   
    <li>
      <Link href="/contact" className={ "text-[#000000cc] font-medium text-base"}>Contact us</Link>
    </li>
    <li>
      <Link href="/service-provider" className={  "text-[#000000cc] font-medium text-base"}> Partners</Link>
    </li>
    <li>
      <Link href="/service-provider" className={  "text-[#000000cc] font-medium text-base"}>FAQs </Link>
    </li>
  </ul>
</div>
      <section className='flex sm:flex-col justify-between sm:justify-center w-[90%] mx-auto pt-8 mt-8' style={{borderTop: "1px solid #0000001a"}}>
      <div className='flex sm:justify-center sm:text-center sm:mb-7 gap-3'>
        <p className='sm:text-sm sm:text-center'>&copy; All right reserved</p> <span className='bg-black my-auto w-[5px] h-[5px] rounded-full'></span>
        <p className='sm:text-sm sm:text-center'>WOW CHRISTMAS</p>
      </div>
      <div>
        <ul className='flex sm:justify-between gap-5'>
          <li>
            <Link href="/terms-and-condition" className="underline sm:text-sm font-normal text-base">Terms & Condition</Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="underline sm:text-sm font-normal text-base">Privacy Policy</Link>
          </li>
        </ul>
      </div>
      </section>
    </div>
  )
}

export default Footer