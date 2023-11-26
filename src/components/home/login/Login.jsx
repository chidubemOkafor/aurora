import React,{useState, useContext} from 'react'
import "../signup/signup_and_login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { IsLoggedinContext } from '../../../contexts/myContexts'
import Loginnotif from './Loginnotif'
import Errornotif from './Errornotif'

const Login = () => {
  const navigate = useNavigate()
  const {loggedIn, setLoggedIn} = useContext(IsLoggedinContext)
  const [credentials, setCredentials] = useState({
    email : "",
    password: ""
  })
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  
  async function login() {
    const data = {
      email: credentials.email,
      password: credentials.password,
    };

    try {
      const response = await axios.post("http://localhost:8090/api/login", data, {
        withCredentials: true, // Include cookies in the request
      });
      if (response.data.message === "login successful") {
        setLoggedIn(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        console.log("not logged in");
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value
    }))
    console.log(credentials)
  }

 
  return (
    <div className='login_and_signup_main'>
    {loggedIn ? <Loginnotif/>: <Errornotif/>}
      <div className='login_and_signup_background_image'>
        <div className='inside'>
          <p className='p6'>Login</p>
        </div>
      </div>
      <div className='main_form_div'>
        <div className='form_div'>
          <div>
            <h2 className='superh2'>Welcome</h2>
            <p className='p4'>Let's log you in quickly</p>
          </div>
          <form>
             <input type='email' placeholder='Enter your email' name='email' value={credentials.email} onChange={handleChange} />
             <input type='password' placeholder='Enter password' name='password' value={credentials.password} onChange={handleChange}/>
             <div className='buttondiv'>
             <button className='submit' type='button' onClick={login}>LOGIN</button>
             <div className='p1_container'><p className='p1'>don't have an account? <Link to={'/signup'}><span className='login_span'>Sign-up</span></Link></p></div>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
