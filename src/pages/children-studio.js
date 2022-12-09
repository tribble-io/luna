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
      date: parseInt(item.attributes?.date_str.match(/\d+/)),
      time: item.attributes?.time,
      month: item.attributes?.date_str.match(/[^\s\d]+/),
      day: getWeekDay(item.attributes?.date),
      title: item.attributes?.play?.data?.attributes?.title,
      isPremiere: item.attributes?.play?.data?.attributes?.isPremiere,
      place: item.attributes?.place,
      rating: item.attributes?.play?.data?.attributes?.rating,
      buy: item.attributes?.tickets_link,
    }
  })
  return nextShowData
}

function getStudioScene(arr) {
  const scenedData = arr.map((item) => {
    return {
      id: item.id,
      src: API_URL + item.attributes?.cover?.data?.attributes?.url,
      title: item.attributes?.title,
      rating: item.attributes?.rating,
      description: item.attributes?.description,
      scene: item.attributes?.scene,
      isPremiere: item.attributes?.isPremiere,
    }
  })
  return scenedData
}

function getStudioPhoto(arr) {
  const photo = arr.map((item) => {
    return {
      id: item.id,
      href: API_URL + item.media.data?.attributes?.formats?.medium?.url,
      src: API_URL + item.media.data?.attributes?.formats?.small?.url,
      caption: item.caption,
    }
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
        setNextShows(getNextShow(values[0]))
        setScene(getStudioScene(values[1]))
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
