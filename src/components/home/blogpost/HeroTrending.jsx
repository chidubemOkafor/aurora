import React, {useState, useEffect} from 'react'
import darkBlue from '../../../assets/hero/Dark blue home screen aesthetic.jpeg'
import { Link } from 'react-router-dom'
import { data } from './testData'

const HeroTrending = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const switchBlog = () => {
            // this should change the index of the blog in a certain interval of time
            setTimeout(() => {
                if (index <= data.length - 2) {
                    setIndex(index + 1)
                } else {
                    setIndex(0)
                }
            }, 5000)
        }
        switchBlog()
    },[index])
    
  return (
    <div>
      <div className= "heroDiv" style={{backgroundImage: darkBlue}}> 
            <div className='heroBlogPost'>
            <div>
            <Link to={'/blogpost'}><h2 className='blog_title'>{data[index].title}</h2></Link>
                <p className='thumb_content'>{data[index].body}<Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                <div className='hashtag'>
                    <div className='tag_content'>#meditation</div>
                    <div className='tag_content'>#mentalhealth</div>
                    <div className='tag_content'>#food</div>
                </div>
                </div>
                <div className='slide_bar_container'>
                    <div className='slide_bar' style={{backgroundColor: index === 0 && "green"}} onClick = {() => setIndex(0)}/>
                    <div className='slide_bar' style={{backgroundColor: index === 1 && "green"}} onClick = {() => setIndex(1)}/>
                    <div className='slide_bar' style={{backgroundColor: index === 2 && "green"}} onClick = {() => setIndex(2)}/>
                </div>
            </div>
            <div key={index} style={{backgroundImage: `url(${data[index].thumbnail})`}} className='hero_sliding_image'/>
      </div>
    </div>
  )
}

// I need a way to change the color of each of the slider when an equilivalent tab is used

export default HeroTrending
