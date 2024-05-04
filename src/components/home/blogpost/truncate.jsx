import LinesEllipsis from "react-lines-ellipsis"


import React from 'react'

const Truncate = (prop) => {
  const div = document.createElement('div')
  div.innerHTML = prop.content
  const textContent = div.textContent
  return (
    <LinesEllipsis
        className="truncColor"
        text={textContent}
        maxLine='5'
        ellipsis='...'
        trimRight
        basedOn='letters'
  />
  )
}

export default Truncate
