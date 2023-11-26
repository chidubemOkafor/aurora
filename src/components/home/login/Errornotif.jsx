import React from 'react'
import {TbBellRinging} from 'react-icons/tb'
const Errornotif = (prop) => {
  return (
    <div>
      <div className='notification_error'>
        <div>
        <p>FAILED</p>
        <p>{prop.text}</p>
        </div>
        <TbBellRinging className='bell'/>
      </div>
    </div>
  )
}

export default Errornotif
