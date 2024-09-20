import React,{useEffect, useState, useMemo} from 'react'
import "./blogpost.css"
import { Link } from 'react-router-dom'
import HeroTrending from './HeroTrending'
import AllBlogPosts from './AllBlogPosts'
import axios from 'axios'
import Truncate from './truncate'

const Blogpost = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchPost = async() => {
            try {
                const response = await axios.get("http://localhost:8090/api/v1/getPost?recent=true")
                console.log("this is the response:", response)
                setData(response.data.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchPost()
    },[])
    
    const cachedData = useMemo(() => data, [data]);
    console.log("this is the id",cachedData[0]._id)

    return (
    <div className='main_div'>
        <div className='blog_div'>
            <div className='title_container'>
            <div className='topbar'/>
                <h3 className='title'>Latest</h3>
            </div>
            <HeroTrending data={cachedData}/>
            <div className='main_blog_container'>
                <div className='data_username'>
                    <p className='p3'>
                        27 MAY
                    </p>
                    <p className='tag'>@okaforChidex7</p>
                </div>
                <div className='blog_thumbnail' style={{backgroundImage: `url(${cachedData.length != 0 && cachedData[0].preview})`}}/>
                <div className='blog_post_content'>
                    <div className='blog_content'>
                        <Link to={`/blogpost/${cachedData.length != 0 && cachedData[0]?._id}`}><h2 className='blog_title'>{cachedData.length != 0 && cachedData[0].title}</h2></Link>
                        <p className='thumb_content'><Truncate content={cachedData.length != 0 && cachedData[0].body}/><Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                        <div className='hashtag'>
                            {cachedData.length != 0 && cachedData[0].tag.map((tag) => (<div className='tag_content'>#{tag}</div>))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='main_blog_container'>
                <div className='blog_post_content2'>
                    <div className='blog_content'>
                        <Link to={`/blogpost/${cachedData.length != 0 && cachedData[1]._id}`}><h2 className='blog_title'>{cachedData.length != 0 && cachedData[1].title}</h2></Link>
                        <p className='thumb_content'><Truncate content={cachedData.length != 0 && cachedData[1].body}/><Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                        <div className='hashtag'>
                            {cachedData.length != 0 && cachedData[1].tag.map((tag) => (<div className='tag_content'>#{tag}</div>))}
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${cachedData.length != 0 && cachedData[1].preview})`}} className='blog_thumbnail2' />
                <div className='data_username'>
                    <p className='p32'>
                        27 MAY
                    </p>
                    <p className='tag'>@okaforChidex7</p>
                </div>
            </div>
            <div className='title_container'>
                <div className='topbar'/>
                <h3 className='title'>All blog posts</h3>
            </div>
            <AllBlogPosts/>
        </div>
    </div>
    )
}

export default Blogpost