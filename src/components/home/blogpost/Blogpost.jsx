import React,{useEffect, useState} from 'react'
import "./blogpost.css"
import { Link } from 'react-router-dom'
import HeroTrending from './HeroTrending'
import AllBlogPosts from './AllBlogPosts'
import axios from 'axios'

const Blogpost = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchPost = async() => {
            try {
                const response = await axios.get("http://localhost:8090/api/v1/getPost?recent=true")
                console.log(response.data.data)
                setData(response)
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
            <HeroTrending/>
            <div className='main_blog_container'>
                <div className='data_username'>
                    <p className='p3'>
                        27 MAY
                    </p>
                    <p className='tag'>@okaforChidex7</p>
                </div>
                <div  className='blog_thumbnail' style={{backgroundImage: "url(https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}}/>
                <div className='blog_post_content'>
                    <div>
                        <Link to={'/blogpost'}><h2 className='blog_title'>15 Disadvantages Of Freedom And How You Can Workaround It.</h2></Link>
                        <p className='thumb_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                        <div className='hashtag'>
                            <div className='tag_content'>#meditation</div>
                            <div className='tag_content'>#mentalhealth</div>
                            <div className='tag_content'>#food</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main_blog_container'>
                <div className='blog_post_content'>
                    <div>
                        <Link to={'/blogpost'}><h2 className='blog_title'>15 Disadvantages Of Freedom And How You Can Workaround It.</h2></Link>
                        <p className='thumb_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum <Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                        <div className='hashtag'>
                            <div className='tag_content'>#meditation</div>
                            <div className='tag_content'>#mentalhealth</div>
                            <div className='tag_content'>#food</div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: "url(https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"}} className='blog_thumbnail2' />
                <div className='data_username'>
                    <p className='p3'>
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