import React from 'react'
import "../signup/signup_and_login.css"
import { Link } from 'react-router-dom'

const Login = () => {
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
          <form>
             <input type='email' placeholder='Enter your email'/>
             <input type='password' placeholder='Enter password'/>
             <div className='buttondiv'>
             <button className='submit'>LOGIN</button>
             <div className='p1_container'><p className='p1'>don't have an account? <Link to={'/signup'}><span className='login_span'>Sign-up</span></Link></p></div>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
