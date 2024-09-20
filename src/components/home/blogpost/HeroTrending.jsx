import React, {useState, useEffect} from 'react'
import darkBlue from '../../../assets/hero/Dark blue home screen aesthetic.jpeg'
import { Link } from 'react-router-dom'
import { data } from './testData'
import Truncate from './truncate'

const HeroTrending = ({data}) => {
    const [index, setIndex] = useState(2)

    useEffect(() => {
        const switchBlog = () => {
            setTimeout(() => {
                if (index <= data.length - 5) {
                    setIndex(index + 1)
                } else {
                    setIndex(2)
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
            <Link to={`/blogpost/${data.length != 0 && data[index]._id}`}><h2 className='blog_title'>{data.length != 0 && data[index].title}</h2></Link>
                <p className='thumb_content'><Truncate content={data.length != 0 && data[index].body}/><Link to={'/blogpost'}><span class="p2">...read more</span></Link></p>
                <div className='hashtag'>
                    {data.length != 0 && data[index].tag.map((tag) => (<div className='tag_content'>#{tag}</div>))}

                </div>
                </div>
                <div className='slide_bar_container'>
                    <div className='slide_bar' style={{backgroundColor: index === 0 && "green"}} onClick = {() => setIndex(0)}/>
                    <div className='slide_bar' style={{backgroundColor: index === 1 && "green"}} onClick = {() => setIndex(1)}/>
                    <div className='slide_bar' style={{backgroundColor: index === 2 && "green"}} onClick = {() => setIndex(2)}/>
                </div>
            </div>
            <div key={index} style={{backgroundImage: `url(${data.length != 0 && data[index].preview})`}} className='hero_sliding_image'/>
      </div>
    </div>
  )
}

// I need a way to change the color of each of the slider when an equilivalent tab is used

export default HeroTrending
