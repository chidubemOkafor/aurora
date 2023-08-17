import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./sidebar.css"
import {HiTrendingUp,HiOutlineSearch} from "react-icons/hi"
import {IoMdAddCircleOutline} from "react-icons/io"


const Sidebar = () => {
  const loggedin = false
  const navigate = useNavigate()
  const addBlog = () => {
    if(!loggedin) {
      navigate("/login")
    }
  }
  return (
    <div className='sidebar_container'>
      <div className='sidebar'>
        <div className='innerSiderBarDiv'>
        <div className='sidebar_2'>
        <div onClick={addBlog} className='profile'>S</div>
        <div className='dev'>
          <HiOutlineSearch className='search'/>
          <p>search</p>
        </div>
  
        <div className='dev'>
          <HiTrendingUp className='uptrend'/>
          <p>trending</p>
        </div>
        </div>
        
        <div onClick={addBlog} className='dev'>
          <IoMdAddCircleOutline className='circle'/>
          <p>create</p>
        </div>
   
        </div>
        </div>
    </div>
  )
}

export default Sidebar
