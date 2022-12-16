import React, { useEffect, useState } from 'react'
import { api } from '../api/index'

import { SceneBlock } from '../components/scenes'

export function Scenes() {
  const [items, setItems] = useState([])
  useEffect(() => {
    api
      .exportSceneDocs()
      .then((response) => {
        setItems(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <main>
      <SceneBlock docs={items} />
    </main>
  )
}
