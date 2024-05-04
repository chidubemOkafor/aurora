import { useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import "./sidebar.css"
import { HiTrendingUp, HiOutlineSearch } from "react-icons/hi"
import { IoMdAddCircleOutline } from "react-icons/io"
import { IsLoggedinContext } from '../../../contexts/myContexts';

const Sidebar = () => {
  //========================context===========================//
  const {loggedIn, setLoggedIn} = useContext(IsLoggedinContext)
  //==========================================================//
  const navigate = useNavigate()
  const addBlog = () => {
    if(!loggedIn) {
      navigate("/login")
    } else {
      navigate('/profile')
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
          <p className='sideBarText'>Search</p>
        </div>
  
        <div className='dev'>
          <HiTrendingUp className='uptrend'/>
          <p className='sideBarText'>Trending</p>
        </div>
        </div>
        
        <div className='dev'>
          <Link to={'/createpost'}><IoMdAddCircleOutline className='circle'/></Link>
          <p className='sideBarText'>Create</p>
        </div>

        </div>
        </div>
    </div>
  )
}

export default Sidebar
