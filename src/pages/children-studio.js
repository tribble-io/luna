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

const getWeekDay = (date) => {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  let dates = new Date(date)
  return days[dates.getDay()]
}

function getNextShow(arr) {
  const nextShowData = arr.map((item) => {
    return {
      item: item,
      id: item.id,
      date: parseInt(item?.date_str.match(/\d+/)),
      time: item?.time,
      month: item?.date_str.match(/[^\s\d]+/),
      day: getWeekDay(item?.date),
      title: item?.play?.title,
      isPremiere: item?.play?.isPremiere,
      place: item?.place,
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
      scene: item?.scene,
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
