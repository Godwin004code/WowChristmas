import React, {useState} from 'react'
import logo from "../../assets/images-removebg-preview.png"
import { Link } from 'react-router-dom'
import { FaInstagram, FaTwitter , FaFacebook, FaCheck } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Nav = () => {
  const pathName = window.location.pathname;
  const [mobileShown, setMobileShown] = useState(false);
  const [showPopup, setShowPopup] = useState(false)
  function toggleNav() {
    setMobileShown(!mobileShown);
  }
  return (<>
    <header className='flex bg-white w-fit sm:w-[90%] sm:justify-between sm:p-0 sm:bg-transparent border  sm:border-0  mx-auto p-2 justify-center rounded-2xl'>
<div>
<Link to="/">  <img src={logo} className='w-[60px]  h-[60px]' alt="Logo" /></Link>
</div>
<nav className='my-auto mx-8 sm:hidden'>
  <ul className='flex gap-8'>
    <li>
      <Link to="/" className={pathName === "/" ? "text-[#067b22] font-medium text-base" : "text-[#000000cc] font-medium text-base"}>Home</Link>
    </li>
    <li>
      <Link to="/about" className={pathName === "/about" ? "text-[#067b22] font-medium text-base" : "text-[#000000cc] font-medium text-base"}>About us</Link>
    </li>
    <li>
      <Link to="/products" className={pathName === "/products" ? "text-[#067b22] font-medium text-base" : "text-[#000000cc] font-medium text-base"}>Products</Link>
    </li>
    <li>
      <Link to="/blog" className={pathName === "/blog" ? "text-[#067b22] font-medium text-base" : "text-[#000000cc] font-medium text-base"}>Blog</Link>
    </li>
    <li>
      <Link to="/contact" className={pathName === "/contact" ? "text-[#067b22] font-medium text-base" : "text-[#000000cc] font-medium text-base"}>Contact</Link>
    </li>
   
  </ul>
</nav>
<button className='bg-[#067b22] sm:hidden text-white my-auto text-sm font-normal h-[49px] px-5 rounded-xl' onClick={() => setShowPopup(true)}>Explore</button>
<div className='my-auto hidden sm:block' onClick={toggleNav}>
<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12H30M6 24H30" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</div>
<div
          className={`${
            mobileShown
              ? "left-[0%] pointer-events-auto"
              : "left-[100%] pointer-events-none"
          } fixed bg-[#f8f8ff] h-full w-full z-[100] overflow-auto left-0 top-0 text-black duration-500 ease-in-out`}
        >
          {/* Container for logo and cross button */}
          <div className="w-[90%] mx-auto py-10 mb-[40px] flex justify-between">
            <Link to="/">
              {" "}
              <img src={logo} className="w-[55px] h-[55px]" alt="logo" />
            </Link>
            <button onClick={toggleNav}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.137 25.8638L18.0015 17.9993L25.866 25.8638M25.866 10.1348L18 17.9993L10.137 10.1348" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
          </div>

          <ul className="flex justify-center text-center my-auto gap-16 w-[90%] mx-auto flex-col text-3xl sm:text-xl sm:gap-8">
            <li>
              <Link to="/" className="font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="font-medium">
                About Us
              </Link>
            </li>
           
            <li>
              <Link to="/Products" className="font-medium">
                Products
              </Link>
            </li>
            <li>
              <Link to="/blog" className="font-medium">
                 Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-medium">
                Contact Us
              </Link>
            </li>

            <div className='flex w-full justify-center mt-10 gap-10 my-auto'>
          <div className='bg-[#067b22c4] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <FaInstagram color='white' size={24} />
          </div>
          <div className='bg-[#067b22c4] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <FaTwitter color='white' size={24}  />
          </div>
          <div className='bg-[#067b22c4] w-[40px] h-[40px] rounded-full flex justify-center items-center'>
            <FaFacebook color='white' size={24}  />
          </div>
        </div>
          </ul>
        </div>
    </header>
   
    </>
  )
}

export default Nav