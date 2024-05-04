import React,{useState,useContext,useEffect} from 'react'
import "./signup_and_login.css"
import { Link } from 'react-router-dom'
import { IsLoggedinContext, AccountContext } from '../../../contexts/myContexts'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../../../firebase_config/firebase_config'
import {createUserWithEmailAndPassword, getRedirectResult} from 'firebase/auth'
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import Button from './Button'


const Signup = () => {
  const navigate = useNavigate()

//================================================================//
  const {setAccount} = useContext(AccountContext)
  const {loggedIn, setLoggedIn} = useContext(IsLoggedinContext)
//================================================================//
  const [credentials, setCredentials]= useState({
    user_name: "",
    email: "",
    password: "",
  })

  const [LoginStatus, setLoginStatus] = useState(false)
  const [inputError, setInputError] = useState("")
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
//================================================================//

const handleChange = (e) => {
  e.preventDefault();
  const {name, value} = e.target;
  setCredentials((prevData) => ({
    ...prevData,
    [name] : value
  }))
}

useEffect(() => {
  const getRediredResult = async() => {
    try {
      const result = await getRedirectResult(auth)
      if (result != null) {
        const result2 = result.user
        console.log("this is the result: ", result2)
        signin(null,"googleAuth",result2)
      }
    } catch (error) {
      console.error(error)
    }
  }
  getRediredResult()
},[])
 
 const getFirebaseUID = async() => {
  try {
    const createNewUser = await createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
    const user = createNewUser.user
    return user.uid
  } catch (error) {
    throw error
  }
 }
  const signin = async(e, type, prop) => {
    console.log("this is the prop: ",prop)
    if(type != "googleAuth") {
      e.preventDefault()
    }
    try {
      setIsButtonDisabled(true)
      let firebase_uid;
      let profile_picture;
      if(type !=  "googleAuth") {
        firebase_uid = await getFirebaseUID()
        profile_picture = ""
      } else {
        firebase_uid = prop.uid
        profile_picture = prop.photoURL
      }

      console.log("this is the uid: ", firebase_uid)
      //=======================================================================//
      const data = {
        user_name: type != "googleAuth" ? credentials.user_name : prop.displayName,
        firebase_uid,
        profile_picture
      }
      
      const response = await axios.post("http://localhost:8090/api/v1/signup", data)
      console.log(response)
      if(response.data.message === "User Created") {
        setLoggedIn(true)
        setLoginStatus(true)
        setAccount({user_name: response.data.response.user_name, email: credentials.email})
        setInterval(() => {
          navigate("/")
        },2000)
      }
    } catch(error) {
      if(error.code === "auth/email-already-in-use") {
        console.log("email already in use")
        setInputError("email already exists")
      } else if (error.code === "auth/weak-password") {
        setInputError("invalid password")
      } else {
        setInputError("something went wrong")
        console.error(error)
      }
    } finally {
      setIsButtonDisabled(false)
    }
   }
   

  return (
    <div className='login_and_signup_main'>
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
          {inputError === "something went wrong" && <div className='generalError'>Something went wrong. Please try again</div>}
          {LoginStatus && <div className='loggedInSuccessful'>Sign in successful</div>}
             <input type='text' placeholder='Enter your name' value={credentials.user_name} name='user_name' onChange={handleChange} required/>
             <div>
             <input className={inputError === "email already exists" ? 'errorInput' : ''} type='email' placeholder='Enter your email' value={credentials.email} name='email' onChange={(e) => {
              handleChange(e)
              inputError === "email already exists" && setInputError("")
              }} required/>
              {inputError === "email already exists" && <p className='input_error'>Email has been registered</p>}
              </div>
              <div>
             <input className={inputError === "invalid password" ? 'errorInput' : ''} type='password' placeholder='Enter password' value={credentials.password} name='password' onChange={(e) => {
              handleChange(e)
              inputError === "invalid password" && setInputError("")
            }} required/>
            {inputError === "invalid password" && <p className='input_error'>Password should be at least 6 characters</p>}
             </div>
             <div className='buttondiv'>
             <button type='submit' className={`submit ${isButtonDisabled && "disabledButton"}` }disabled={isButtonDisabled}>{isButtonDisabled ?<AiOutlineLoading3Quarters className='loading_style' /> : "SUBMIT"}</button>
             <div className='p1_container'><p className='p1'>already have an account? <Link to={'/login'}><span className='login_span'>log-in</span></Link></p></div>
             </div>
          </form>
          <div className='or_div'>
            <div className='or'>or</div>
            <div className='line' />
          </div>
          <Button action={"signup"} auth={auth} />
        </div>
      </div>
    </div>
  )
}

export default Signup