import React from 'react'
import Sidebar from '../../components/home/sidebar/Sidebar'
import Blogpost from '../../components/home/blogpost/Blogpost'
import "./home.css"
const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <Blogpost />
    </div>
  )
}

export default Home
