import React from 'react'
import {TbBellRinging} from 'react-icons/tb'
const Loginnotif = () => {
  return (
    <div>
      <div className='notification'>
        <div>
        <p>SUCCESS</p>
        <p>You can Log-in now.</p>
        </div>
        <TbBellRinging className='bell'/>
      </div>
    </div>
  )
}

export default Loginnotif
