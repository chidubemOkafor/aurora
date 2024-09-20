import { useState } from 'react';
import { IsLoggedinContext, AccountContext } from './contexts/myContexts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import BlogPost from './pages/blogpost/BlogPost';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import './App.css';
import CreatePost_page from './pages/createpost/CreatePost_page';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState({})

  return (
    <div className='app'>
      <AccountContext.Provider value={{account, setAccount}}>
        <IsLoggedinContext.Provider value={{ loggedIn, setLoggedIn }}>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/blogpost/:id' element={<BlogPost />} />
              <Route path='/signup' element={<Signup/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/createpost' element={<CreatePost_page/>} />
            </Routes>
          </Router>
        </IsLoggedinContext.Provider>
      </AccountContext.Provider>
    </div>
  );

  }
export default App;
