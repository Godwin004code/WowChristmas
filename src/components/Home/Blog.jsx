import React from 'react'
import img from "../../assets/ser-1.png"
import {Link} from "react-router-dom"

const Blog = () => {
  return (
    <div className='mb-20'> 
         
        <div className='w-[90%] mx-auto gap-10 flex justify-between sm:flex-col md:w-full'>
                <img src={img} alt="" className='h-[450px] sm:h-[200px] w-full rounded-[20px] object-cover' />
                <div className='flex mt-3'>
                    
                </div>
                <div className='my-auto'>
                <h2 className='text-[#252641] font-medium text-2xl mt-3'>Stories to Inspire Your Holiday Spirit</h2>
                <p className='text-base font-normal text-[#555454] my-4'>Visit “The Christmas Stories” blog for heartwarming tales about love, hope, family, and the magic of the season. We share stories that remind us all of what Christmas is truly about.
                </p>
          <Link to="/blog">
          <button className='text-[#067b22] font-normal text-[22px] md:mb-10' style={{borderBottom: '1px solid #067b22'}}>Read the Stories</button></Link>
                </div>
            </div>
    </div>
  )
}

export default Blog