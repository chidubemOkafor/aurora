import React, { useState, useContext } from 'react'
import "../signup/signup_and_login.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import { IsLoggedinContext } from '../../../contexts/myContexts'
import { auth } from '../../../../firebase_config/firebase_config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import Button from "../signup/Button"
import Cookies from 'js-cookie'

const Login = () => {
  const navigate = useNavigate()
  const { loggedIn, setLoggedIn } = useContext(IsLoggedinContext)
  const [inputError, setInputError] = useState("")
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  async function login(e) {
    e.preventDefault()
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      console.log(userCredentials)
      const user = userCredentials.user
      console.log(user)
      // save cookie to cookie storage
      Cookies.set("accessToken", user.accessToken)
      const firebaseUid = user.uid
      console.log(firebaseUid)
      
      if(!userCredentials) {
        const response = await axios.post(`http://localhost:8090/api/v1/login/:${firebaseUid}`);
        console.log(response)
      }
    } catch (error) {
      if(error.code === "auth/invalid-credential") {
        setInputError("Invalid email and password combination")
      } else if (error.code === "auth/invalid-email") {
        setInputError("email already exists")
      } else {
        console.error(error)
        setInputError("something went wrong")
      }
      console.error(error);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value
    }))
    console.log(credentials)
  }


  return (
    <div className='login_and_signup_main'>
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
          <form onSubmit={login}>
          {inputError === "something went wrong" && <div className='generalError'>Something went wrong. Please try again</div>}
          {inputError === "Invalid email and password combination" && <div className='generalError'>{inputError}</div>}
           <div> <input className={inputError === "email already exists" ? 'errorInput' : ''} type='email' placeholder='Enter your email' name='email' value={credentials.email} onChange={(e) => {
              handleChange(e)
              inputError === "email already exists" && setInputError("")
             }} required/>
             {inputError === "email already exists" && <p className='input_error'>Invalid email</p>}
             </div>
            <input type='password' placeholder='Enter password' name='password' value={credentials.password} onChange={handleChange} />
            <div className='buttondiv'>
              <button className='submit' type='submit'>LOGIN</button>
              <div className='p1_container'><p className='p1'>don't have an account? <Link to={'/signup'}><span className='login_span'>Sign-up</span></Link></p></div>
            </div>
          </form>
          <div className='or_div'>
            <div className='or'>or</div>
            <div className='line' />
          </div>
          <Button action={"login"} />
        </div>
      </div>
    </div>
  )
}

export default Login
