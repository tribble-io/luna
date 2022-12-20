import React, { useState, useEffect } from 'react'
import { api, API_URL } from '../api/index'
import { getDateStr } from '../assets'

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

function getNextShow(arr) {
  const nextShowData = arr.map((item) => {
    return {
      item: item,
      id: item.id,
      date: getDateStr(item?.date).date,
      time: item?.time,
      month: getDateStr(item?.date).month_name_case,
      day: getDateStr(item?.date).day_of_week,
      title: item?.play?.title,
      isPremiere: item?.play?.isPremiere,
      place: item?.play.scene.name,
      rating: item?.play?.rating,
      buy: item?.tickets_link,
    }
  })
  return nextShowData
}

function getStudioScene(arr) {
  const scenedData = arr.map((item) => {
    return {
      id: item.id,
      src: API_URL + item?.cover?.url,
      title: item?.title,
      rating: item?.rating,
      description: item?.description,
      scene: item?.scene?.name,
      isPremiere: item?.isPremiere,
    }
  })
  return scenedData
}

function getStudioPhoto(arr) {
  const photo = arr.map((item) => {
    return {
      id: item.id,
      href: API_URL + item.media?.formats?.medium?.url,
      src: API_URL + item.media?.formats?.small?.url,
      caption: item.caption,
    }
  })
  return photo
}

export function ChildrenStudio() {
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
        setNextShows(getNextShow(values[0]))
        setScene(getStudioScene(values[1]))
        setPhoto(getStudioPhoto(values[2].gallery))
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
