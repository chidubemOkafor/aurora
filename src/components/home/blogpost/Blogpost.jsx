import React,{useEffect, useState} from 'react'
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
                setData(response.data.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchPost()
    },[])

    console.log(data)

    return (
    <div className='main_div'>
        <div className='blog_div'>
            <div className='title_container'>
            <div className='topbar'/>
                <h3 className='title'>Latest</h3>
            </div>
            <HeroTrending data={data}/>
            <div className='main_blog_container'>
                <div className='data_username'>
                    <p className='p3'>
                        27 MAY
                    </p>
                    <p className='tag'>@okaforChidex7</p>
                </div>
                <div  className='blog_thumbnail' style={{backgroundImage: `url(${data.length != 0 && data[3].preview})`}}/>
                <div className='blog_post_content'>
                    <div className='blog_content'>
                        <Link to={'/blogpost'}><h2 className='blog_title'>{data.length != 0 && data[3].title}</h2></Link>
                        <p className='thumb_content'><Truncate content={data.length != 0 && data[3].body}/><Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                        <div className='hashtag'>
                        {data.length != 0 && data[3].tag.map((tag) => (<div className='tag_content'>#{tag}</div>))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='main_blog_container'>
                <div className='blog_post_content2'>
                    <div className='blog_content'>
                        <Link to={'/blogpost'}><h2 className='blog_title'>{data.length != 0 && data[4].title}</h2></Link>
                        <p className='thumb_content'><Truncate content={data.length != 0 && data[4].body}/><Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                        <div className='hashtag'>
                            {data.length != 0 && data[4].tag.map((tag) => (<div className='tag_content'>#{tag}</div>))}
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${data.length != 0 && data[4].preview})`}} className='blog_thumbnail2' />
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