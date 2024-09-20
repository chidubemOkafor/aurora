import React,{useEffect,useState,useMemo} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {FaRegCommentDots} from "react-icons/fa"
import {AiOutlineLike,AiOutlineDislike,AiFillLike,AiFillDislike} from "react-icons/ai"
import "./realblog.css"
const RealBlog = () => {
  const [data, setData] = useState([])
  const {id} = useParams() 
  useEffect(() => {
    const getBlogPost = async() => {
      try {
        const response = await axios.get(`http://localhost:8090/api/v1/getblogpost/${id}`)
        setData(response.data.data)
      } catch (error) {
        console.error(error)
      }
    }
    getBlogPost()
  },[])
  const cachedData = useMemo(() => data, [data])

  const div = document.createElement('div')
 const divcontent = div.innerHTML = cachedData.length != 0 && cachedData[0].content

  return (
    <div className='realblog_master'>
      <div className='realblog_main'>
        <div className='blog_header_div'>
            <h3>{cachedData.length != 0 && cachedData[0].title}</h3>
            <p className='p4'>written by @samurai2099 on 27 may 2022</p>
        </div>
        <div className='blogPreview' style={{backgroundImage: `url(${cachedData.length != 0 && cachedData[0].preview})`}} />
        
        
          <div dangerouslySetInnerHTML={{ __html: cachedData.length != 0 && cachedData[0].content }} ></div>
        
      </div>
      <div>
      <div className='topbar'/>
      <h3 className='title'>Related Post</h3>
            <div className='blog_post_content'>
                <div>
                    <h2>15 Disadvantages Of Freedom And How You Can Workaround It.</h2>
                    <p className='p1'>Lorem ipsum dolor sit amet,lor in reprehenderit in voluptate velit esse  <span class="p2">...read more</span></p>
                    <p className='p4'>@okaforChidex7</p>
                </div>
            </div>
            <div className='blog_post_content'>
                <div>
                    <h2>15 Disadvantages Of Freedom And How You Can Workaround It.</h2>
                    <p className='p1'>Lorem ipsum dolor sit amet,lor in reprehenderit in voluptate velit esse  <span class="p2">...read more</span></p>
                    <p className='p4'>@okaforChidex7</p>
                </div>
            </div>
            <div className='blog_post_content'>
                <div>
                    <h2>15 Disadvantages Of Freedom And How You Can Workaround It.</h2>
                    <p className='p1'>Lorem ipsum dolor sit amet,lor in reprehenderit in voluptate velit esse  <span class="p2">...read more</span></p>
                    <p className='p4'>@okaforChidex7</p>
                </div>
            </div>
      </div>
    </div>
  )
}

export default RealBlog
