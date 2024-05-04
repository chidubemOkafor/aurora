import React from 'react'
import { Link } from 'react-router-dom'
import darkBlue from "../../../assets/hero/Dark blue home screen aesthetic.jpeg";
import coverPAge from "../../../assets/hero/COVERPAGE.jpeg";
import freeVector from "../../../assets/hero/Free Vector _ Spot light background.jpeg";

const AllBlogPosts = () => {
  return (
    <div className='all_blogs_main_container'>
        <div className='all_blog_posts_grid'>
            <div className='all_blog_container'>
                <div style={{backgroundImage: "url(https://images.pexels.com/photos/247851/pexels-photo-247851.jpeg?auto=compress&cs=tinysrgb&w=600)"}} className='all_blogs_image'/>
                <Link to={'/blogpost'}><h2 className='all_blog_title'>15 Disadvantages Of Freedom And How You Can Workaround It.</h2></Link>
                <p className='thumb_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Loremex ea commodo consequat. n culpa qui officia deserunt mollit anim id est laborum <Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                <div className='hashtag'>
                    <div className='tag_content'>#meditation</div>
                    <div className='tag_content'>#mentalhealth</div>
                </div>
            </div>
            <div className='all_blog_container'>
                <div style={{backgroundImage: "url(https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=600)"}} className='all_blogs_image'/>
                <Link to={'/blogpost'}><h2 className='all_blog_title'>15 Disadvantages Of Freedom And How You Can Workaround It.</h2></Link>
                <p className='thumb_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Loremex ea commodo consequat. n culpa qui officia deserunt mollit anim id est laborum <Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                <div className='hashtag'>
                    <div className='tag_content'>#meditation</div>
                    <div className='tag_content'>#mentalhealth</div>
                </div>
            </div>
            <div className='all_blog_container'>
                <div style={{backgroundImage: "url(https://media.istockphoto.com/id/1633802041/photo/modern-woman-in-virtual-reality-goggles-on-dark-background.jpg?s=612x612&w=0&k=20&c=QAVJ5X0Bix67lArAbPSy8eNxEUui28dLb2wZaKrAPAQ=)"}} className='all_blogs_image'/>
                <Link to={'/blogpost'}><h2 className='all_blog_title'>15 Disadvantages Of Freedom And How You Can Workaround It.</h2></Link>
                <p className='thumb_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Loremex ea commodo consequat. n culpa qui officia deserunt mollit anim id est laborum <Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                <div className='hashtag'>
                    <div className='tag_content'>#meditation</div>
                    <div className='tag_content'>#mentalhealth</div>
                </div>
            </div>
            <div className='all_blog_container'>
                <div style={{backgroundImage: "url(https://media.istockphoto.com/id/1372085619/photo/electric-car-power-charging-charging-technology-clean-energy-filling-technology.jpg?s=612x612&w=0&k=20&c=52qjrwxiL-yy4kf2g3dgU8_Pqb5M_BhBfkJCjlXC2os=)"}} className='all_blogs_image'/>
                <Link to={'/blogpost'}><h2 className='all_blog_title'>15 Disadvantages Of Freedom And How You Can Workaround It.</h2></Link>
                <p className='thumb_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Loremex ea commodo consequat. n culpa qui officia deserunt mollit anim id est laborum <Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                <div className='hashtag'>
                    <div className='tag_content'>#meditation</div>
                    <div className='tag_content'>#mentalhealth</div>
                </div>
            </div>
            <div className='all_blog_container'>
                <div style={{backgroundImage: "url(https://images.pexels.com/photos/9408469/pexels-photo-9408469.jpeg?auto=compress&cs=tinysrgb&w=600)"}}  className='all_blogs_image'/>
                <Link to={'/blogpost'}><h2 className='all_blog_title'>15 Disadvantages Of Freedom And How You Can Workaround It.</h2></Link>
                <p className='thumb_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Loremex ea commodo consequat. n culpa qui officia deserunt mollit anim id est laborum <Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                <div className='hashtag'>
                    <div className='tag_content'>#meditation</div>
                    <div className='tag_content'>#mentalhealth</div>
                </div>
            </div>
            <div className='all_blog_container'>
                <div style={{backgroundImage: "url(https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600)"}} className='all_blogs_image'/>
                <Link to={'/blogpost'}><h2 className='all_blog_title'>15 Disadvantages Of Freedom And How You Can Workaround It.</h2></Link>
                <p className='thumb_content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore Loremex ea commodo consequat. n culpa qui officia deserunt mollit anim id est laborum <Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                <div className='hashtag'>
                    <div className='tag_content'>#meditation</div>
                    <div className='tag_content'>#mentalhealth</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllBlogPosts