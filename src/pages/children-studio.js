import React, { useState, useEffect } from 'react'
import { api, API_URL } from '../api/index'

import {
  ChildrenTitle,
  ChildrenDescription,
  ChildrenStudioTask,
  ChildrenRecording,
  ChildrenNextShows,
  ChildrenStudioFounder,
  ChildrenScene,
  ChildrenPhoto,
} from '../components/childrensStudio'
import Loader from '../components/loader'

function getStudioPhoto(arr) {
  const photo = []
  arr.map((item) => {
    photo.push({
      id: item.id,
      href: API_URL + item.media.data.attributes.formats.medium.url,
      src: API_URL + item.media.data.attributes.formats.small.url,
      caption: item.caption,
    })
  })
  return photo
}

function ChildrenStudio() {
  const [isLoading, setIsLoading] = useState(true)
  const [nextShows, setNextShows] = useState({})
  const [scene, setScene] = useState({})
  const [photo, setPhoto] = useState({})

  useEffect(() => {
    Promise.all([
      api.exportChildrenStudioNextShow(),
      api.exportChildrenStudioScene(),
      api.exportChildrenStudioPhoto(),
    ])
      .then((values) => {
        setNextShows(values[0])
        setScene(values[1])
        setPhoto(getStudioPhoto(values[2].attributes.gallery))
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  return (
    <main>
      <ChildrenTitle />
      <ChildrenDescription />
      {isLoading ? (
        <Loader />
      ) : (
        <ChildrenNextShows id='nextShow' items={nextShows} />
      )}
      <ChildrenStudioTask id='studio_task' />
      <ChildrenStudioFounder id='founder' />

      {isLoading ? (
        <Loader />
      ) : (
        <ChildrenScene id='little_moon' items={scene} />
      )}
      <ChildrenRecording id='recording' />
      {isLoading ? <Loader /> : <ChildrenPhoto id='photo' items={photo} />}
    </main>
  )
}

export default ChildrenStudio
