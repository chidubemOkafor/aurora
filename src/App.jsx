import { useState } from 'react'
import {isLoggedinContext} from "./contexts/myContexts"
import Home from './pages/home/Home'
import BlogPost from './pages/blogpost/BlogPost'
import './App.css'


function App() {
  const [loggedIn, setLoggedIn] = useState("") 

  return (
    <div className='app'>
    <isLoggedinContext.Provider value = {{loggedIn, setLoggedIn}}>
      <Home />
      <BlogPost/>
    </isLoggedinContext.Provider>
    </div>
  )
}

export default App
