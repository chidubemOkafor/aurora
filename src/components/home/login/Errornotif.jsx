import React from 'react'
import {TbBellRinging} from 'react-icons/tb'
const Errornotif = () => {
  return (
    <div>
      <div className='notification_error'>
        <div>
        <p>FAILED</p>
        <p>Sign-up failed. Please try again.</p>
        </div>
        <TbBellRinging className='bell'/>
      </div>
    </div>
  )
}

export default Errornotif
