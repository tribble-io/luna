import React, { useState, useEffect } from 'react'
import { api } from '../api/index'

import { ShowsFilter, ShowsCards } from '../components/plays'
import Loader from '../components/loader'

function Plays() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [editValue, setEditValue] = useState({
    title: '',
    scene: '',
    rating: false,
    isPremiere: false,
  })

  useEffect(() => {
    api
      .exportPlayShows(editValue)
      .then((response) => {
        setItems(response)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [editValue])

  return (
    <main>
      <ShowsFilter setEditValue={setEditValue} editValue={editValue} />
      {isLoading ? <Loader /> : <ShowsCards items={items} />}
    </main>
  )
}

export default Plays
