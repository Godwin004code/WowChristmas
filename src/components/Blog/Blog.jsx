import React from 'react'
import Nav from '../Global/Nav'
import Footer from '../Global/Footer'
import Posts from './AllPosts.jsx'
import posts from './posts'

const Blog = () => {
  return (
    <div className='bg-[#f0f5f0] w-full pt-7 h-full'>
        <Nav />
        <Posts posts={posts} />
        <Footer />
    </div>
  )
}

export default Blog