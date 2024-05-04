import React, { useState } from 'react'
import googleIcon from '../../../assets/google.svg'
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup } from 'firebase/auth'

const Button = (prop) => {
    const [loading, setLoading] = useState(false)
    const authWithGoogle = async () => {
        setLoading(true)
        const provider = new GoogleAuthProvider()
        provider.addScope("profile")
        provider.addScope("email")
        try {
            await signInWithRedirect(prop.auth, provider)
            // I will send the user credentials to local storage first
        } catch (error) {
            console.error(error)
        } finally {
                setLoading(false)
        }
    }
    if (prop.action === "login") {
        return (
            <div>
                <button disabled={loading} className='google_button' onClick={authWithGoogle}>{loading ? <AiOutlineLoading3Quarters className='loading_style' /> : <><img src={googleIcon} className='google_icon' /> Login with Google</>}</button>
            </div>
        )
    }
    else if (prop.action === "signup") {
        return (
            <div>
                <button disabled={loading} className='google_button' onClick={authWithGoogle}>{loading ? <AiOutlineLoading3Quarters className='loading_style' /> : <><img src={googleIcon} className='google_icon' /> Sign in with Google</>}</button>
            </div>
        )
    } 
}

export default Button
