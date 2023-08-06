import { useState } from 'react';
import { isLoggedinContext } from './contexts/myContexts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import BlogPost from './pages/blogpost/BlogPost';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState('');

  return (
    <div className='app'>
      <isLoggedinContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blogpost' element={<BlogPost />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </Router>
      </isLoggedinContext.Provider>
    </div>
  );
}

export default App;
