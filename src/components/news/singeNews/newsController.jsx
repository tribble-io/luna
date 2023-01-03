import React from 'react'
import { useLocation } from 'react-router-dom'
import SingeNews from '.'

let NewsConroller = () => {
  const location = useLocation()
  const newsContState = location.state

  return (
    <div>
      <SingeNews stateNew={newsContState} />
    </div>
  )
}

export default NewsConroller
