import React,{useState,useContext} from 'react'
import "./signup_and_login.css"
import { Link } from 'react-router-dom'
import { IsLoggedinContext } from '../../../contexts/myContexts'
import Loginnotif from '../login/Loginnotif'
import Errornotif from '../login/Errornotif'
import Incompledata from '../login/Incompledata'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

//================================================================//
  const {loggedIn, setLoggedIn} = useContext(IsLoggedinContext)
//================================================================//
  const {credentials, setCredentials} = useState({
    user_name: "",
    email: "",
    password: "",
  })

  const [LoginStatus, setLoginStatus] = useState(false)
//================================================================//

const handleChange = (e) => {
  e.preventDefault();
  const {name, value} = e.target;
  setCredentials((prevData) => ({
    ...prevData,
    [name] : value
  }))
}
 
  const signin = async() => {
    const data = {
      user_name,
      email,
      password
    }
    try {
      const response = await axios.post("http://localhost:8090/api/signup", data, {
        withCredentials: true
      })
      if(response.data.message === "account created") {
        setLoggedIn(true)
        setTimeout(()=> {
          navigate("/")
        },2000)
      } else {
        setStatus()
      }
    } catch(e) {
       console.error(e)
    }
   }
   

  return (
    <div className='login_and_signup_main'>
      {LoginStatus ? <Loginnotif/>: <></>}
      {/* <Loginnotif/> */}
      <div className='login_and_signup_background_image'>
        <div className='inside'>
          <p className='p6'>Sign Up</p>
        </div>
      </div>
      <div className='main_form_div'>
        <div className='form_div'>
          <div>
            <h2 className='superh2'>Welcome</h2>
            <p className='p4'>Let’s sign you up quickly</p>
          </div>
          <form>
             <input type='text' placeholder='Enter your name' value={credentials.user_name} name='user_name' onChange={handleChange}/>
             <input type='email' placeholder='Enter your email' value={credentials.email} name='email' onChange={handleChange}/>
             <input type='password' placeholder='Enter password' value={credentials.password} name='password' onChange={handleChange}/>
             <div className='buttondiv'>
             <button type='button' className='submit' onClick={signin}>SUBMIT</button>
             <div className='p1_container'><p className='p1'>already have an account? <Link to={'/login'}><span className='login_span'>log-in</span></Link></p></div>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup