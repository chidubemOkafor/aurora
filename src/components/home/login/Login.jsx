import React, { useState, useContext, useEffect } from 'react'
import "../signup/signup_and_login.css"
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from "axios"
import { IsLoggedinContext, AccountContext } from '../../../contexts/myContexts'
import { auth } from '../../../../firebase_config/firebase_config'
import { signInWithEmailAndPassword, getRedirectResult } from 'firebase/auth'
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import Button from "../signup/Button"
import Cookies from 'js-cookie'

const Login = () => {
  const navigate = useNavigate()

  //==============================================================
  const {account, setAccount} = useContext(AccountContext)
  const { setLoggedIn } = useContext(IsLoggedinContext)
  //===============================================================

  const [inputError, setInputError] = useState("")
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [LoginStatus, setLoginStatus] = useState(false)
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  const getUser = async() => {
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      return userCredentials.user

    } catch(error) {
      throw error
    }
  }

  useEffect(() => {
    const getRediredResult = async() => {
      try {
        const result = await getRedirectResult(auth)
        if (result != null) {
          const result2 = result.user
          console.log("this is the result: ", result2)
          login(null,"googleAuth",result2)
        }
      } catch (error) {
        console.error(error)
      }
    }
    getRediredResult()
  },[])

  const login = async (e, type, prop) => {
    if (type != "googleAuth") {
      e.preventDefault()
    }
    
    try {
      setIsButtonDisabled(true)
      let firebaseUid
      let user = ""
      if(type != "googleAuth") {
        user = await getUser()
        console.log("this is the user: ",user)
        // save cookie to cookie storage
        Cookies.set("accessToken", user.accessToken)
        firebaseUid = user.uid
      } else {
        firebaseUid = prop.uid
      }
      console.log(firebaseUid)
      
      if(user != null) {
        const response = await axios.post(`http://localhost:8090/api/v1/login/${firebaseUid}`);
        console.log(response)
        if(response.data.message === "User found") {
          setAccount({user_name: response.data.response.user_name, email: user.email})
          setLoginStatus(true)
          setLoggedIn(true)
          setTimeout(() => {
            navigate("/")
          },2000)
        }
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
    } finally {
      setIsButtonDisabled(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value
    }))
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
          {LoginStatus && <div className='loggedInSuccessful'>Sign in successful</div>}
           <div> <input className={inputError === "email already exists" ? 'errorInput' : ''} type='email' placeholder='Enter your email' name='email' value={credentials.email} onChange={(e) => {
              handleChange(e)
              inputError === "email already exists" && setInputError("")
             }} required/>
             {inputError === "email already exists" && <p className='input_error'>Invalid email</p>}
             </div>
            <input type='password' placeholder='Enter password' name='password' value={credentials.password} onChange={handleChange} />
            <div className='buttondiv'>
            <button type='submit' className={`submit ${isButtonDisabled && "disabledButton"}` }disabled={isButtonDisabled}>{isButtonDisabled ?<AiOutlineLoading3Quarters className='loading_style' /> : "LOGIN"}</button>
              <div className='p1_container'><p className='p1'>don't have an account? <Link to={'/signup'}><span className='login_span'>Sign-up</span></Link></p></div>
            </div>
          </form>
          <div className='or_div'>
            <div className='or'>or</div>
            <div className='line'/>
          </div>
          <Button action={"login"} auth={auth}/>
        </div>
      </div>
    </div>
  )
}

export default Login