import React, { useEffect, useState } from 'react'
import { api, API_URL } from '../api/index'

import { SceneBlock } from '../components/scenes'

function findSceneDoc(arr, index) {
  const docs = arr.find((item) => item.id === index)
  return docs.file.url
}

function getSceneDoc(arr) {
  if (arr !== null) {
    const sceneDoc = {
      big: {
        techn_plan: API_URL + findSceneDoc(arr, 1),
        light_scheme: API_URL + findSceneDoc(arr, 2),
        sound_scheme: API_URL + findSceneDoc(arr, 3),
      },
      small: {
        techn_plan: API_URL + findSceneDoc(arr, 4),
        light_scheme: API_URL + findSceneDoc(arr, 5),
        sound_scheme: API_URL + findSceneDoc(arr, 6),
      },
      luna: {
        techn_plan: API_URL + findSceneDoc(arr, 7),
        sound_scheme: API_URL + findSceneDoc(arr, 8),
      },
    }
    return sceneDoc
  } else {
    return []
  }
}

export function Scenes() {
  const [items, setItems] = useState({
    big: { techn_plan: '', light_scheme: '', sound_scheme: '' },
    small: { techn_plan: '', light_scheme: '', sound_scheme: '' },
    luna: { techn_plan: '', sound_scheme: '' },
  })
  useEffect(() => {
    api
      .exportSceneDocs()
      .then((response) => {
        setItems(getSceneDoc(response))
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
