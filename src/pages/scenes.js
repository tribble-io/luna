import React, { useEffect, useState } from 'react'
import { api, API_URL } from '../api/index'
import Loader from '../components/loader'

import { SceneBlock, SceneContainer } from '../components/scenes'

const getScene = (scenes) => {
  return {
    docs: scenes?.docs?.map((doc) => {
      return {
        id: doc?.id,
        title: doc?.title,
        url: API_URL + doc?.file?.url,
      }
    }),
    photos: scenes?.photos?.map((photo) => {
      return {
        id: photo?.id,
        href: API_URL + photo?.url,
        src: API_URL + photo?.formats?.thumbnail?.url,
        caption: photo.caption ? photo?.caption : '',
      }
    }),
  }
}

const getScenesData = (arr) => {
  if (arr !== null) {
    return {
      bigScene: getScene(arr.bigScene),
      smallScene: getScene(arr.smallScene),
      childrenScene: getScene(arr.childrenScene),
    }
  } else {
    return []
  }
}

export function Scenes() {
  const [items, setItems] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    api
      .exportSceneDocs()
      .then((response) => {
        setItems(getScenesData(response))
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <SceneContainer>
          <SceneBlock items={items.bigScene} title='Большая сцена' />
          <SceneBlock items={items.smallScene} title='малая сцена' />
          <SceneBlock
            items={items.childrenScene}
            title='сцена «маленькая луна»'
          />
        </SceneContainer>
      )}
    </main>
  )
}
