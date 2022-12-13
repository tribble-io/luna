import React, { useState, useEffect } from 'react'
import { api } from '../api/index'

import { PressFilters, PressCards } from '../components/press'
import Loader from '../components/loader'

function getPressData(arr) {
  if (arr !== null) {
    const data = arr.map((item) => {
      return {
        id: item.id,
      }
    })
    return data
  } else {
    return []
  }
}

export function Press() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    api
      .exportPressData()
      .then((response) => {
        setItems(getPressData(response))
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  return (
    <main>
      <PressFilters />
      {isLoading ? <Loader /> : <PressCards item={items} />}
    </main>
  )
}
