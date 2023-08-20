import { useState } from 'react';
import { IsLoggedinContext } from './contexts/myContexts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import BlogPost from './pages/blogpost/BlogPost';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className='app'>
      <IsLoggedinContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/blogpost' element={<BlogPost />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </Router>
      </IsLoggedinContext.Provider>
    </div>
  );
}

export default App;
