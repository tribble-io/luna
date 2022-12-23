import React from 'react'
import { useLocation } from 'react-router-dom'
import OneOageNews from '.'

let NewsConroller = () => {
  const location = useLocation()
  const newsContState = location.state

  return (
    <div>
      <OneOageNews stateNew={newsContState} />
    </div>
  )
}

export default NewsConroller
