import React from 'react'
import {TbBellRinging} from "react-icons/tb"
const Incompledata = () => {
  return (
    <div>
       <div className='notification_error'>
        <div>
        <p>FAILED</p>
        <p>Incomplete input</p>
        </div>
        <TbBellRinging className='bell'/>
      </div>
    </div>
  )
}

export default Incompledata
