import React,{useState,useContext} from 'react'
import "./signup_and_login.css"
import { Link } from 'react-router-dom'
import { IsLoggedinContext } from '../../../contexts/myContexts'
import Loginnotif from '../login/Loginnotif'
import Errornotif from '../login/Errornotif'
import Incompledata from '../login/Incompledata'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../../../firebase_config/firebase_config'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { AccountContext } from '../../../contexts/myContexts'


const Signup = () => {
  const navigate = useNavigate()

//================================================================//
  const {account, setAccount} = useContext(AccountContext)
  const {loggedIn, setLoggedIn} = useContext(IsLoggedinContext)
//================================================================//
  const [credentials, setCredentials]= useState({
    user_name: "",
    email: "",
    password: "",
  })

  const [LoginStatus, setLoginStatus] = useState(false)
  const [errorStatus, setErrorStatus] = useState(false)
  const [text, setText] = useState("")
//================================================================//

const handleChange = (e) => {
  e.preventDefault();
  const {name, value} = e.target;
  setCredentials((prevData) => ({
    ...prevData,
    [name] : value
  }))
  console.log(credentials)
}
 
  const signin = async(e) => {
    e.preventDefault()
    try {
      // create account in firebase first
      const createNewUser = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      const user = createNewUser.user

      if(!user) {
        console.log("bad network")
      }

      const firebase_uid = user.uid
      console.log(firebase_uid)
      //=======================================================================//
      const data = {
        user_name: credentials.user_name,
        firebase_uid
      }
      
      const response = await axios.post("http://localhost:8090/api/signup", data)
      console.log(response)
      if(response.data.message === "User Created") {
        setLoggedIn(true)
        setLoginStatus(true)
        setAccount({user_name: response.data.response.user_name, email: credentials.email})
        console.log(account)
        setTimeout(()=> {
          navigate("/")
        },2000)
      } else {
        setStatus()
      }
    } catch(error) {
      if(error.code === "auth/email-already-in-use") {
        setText("email already in use")
        setLoginStatus(false)
        setErrorStatus(true)
      }
       console.error(error)
    }
   }
   

  return (
    <div className='login_and_signup_main'>
      {LoginStatus && <Loginnotif/>}
      {errorStatus && <Errornotif text={text}/>}
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
          <form onSubmit={signin}>
             <input type='text' placeholder='Enter your name' value={credentials.user_name} name='user_name' onChange={handleChange} required/>
             <input type='email' placeholder='Enter your email' value={credentials.email} name='email' onChange={handleChange} required/>
             <input type='password' placeholder='Enter password' value={credentials.password} name='password' onChange={handleChange} required/>
             <div className='buttondiv'>
             <button type='submit' className='submit'>SUBMIT</button>
             <div className='p1_container'><p className='p1'>already have an account? <Link to={'/login'}><span className='login_span'>log-in</span></Link></p></div>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup