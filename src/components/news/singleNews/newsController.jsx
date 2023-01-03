import React from 'react'
import { useLocation } from 'react-router-dom'
import SingleNews from '.'

let NewsController = () => {
  const location = useLocation()
  const newsContState = location.state

  return (
    <div>
      <SingleNews stateNew={newsContState} />
    </div>
  )
}

export default NewsController
