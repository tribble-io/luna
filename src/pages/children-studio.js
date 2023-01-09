import React, { useState, useEffect } from 'react'
import { api, API_URL } from '../api/index'
import { getDateStr } from '../assets'
import { TicketPopUp } from '../components/ticketPopup'

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
    const formatDate = getDateStr(item?.datetime)
    return {
      item: item,
      id: item?.play?.id,
      date: formatDate.date,
      time: item?.datetime.slice(11, 16),
      month: formatDate.month_name_case,
      day: formatDate.day_of_week,
      title: item?.play?.title,
      isPremiere: item?.play?.isPremiere,
      scene: item?.play?.scene?.name,
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
      original: API_URL + item.media?.url,
      preview: item.media?.formats,
      caption: item.caption ?? '',
    }
  })
  return photo
}

export function ChildrenStudio() {
  const [isLoading, setIsLoading] = useState(true)
  const [nextShows, setNextShows] = useState({})
  const [scene, setScene] = useState({})
  const [photo, setPhoto] = useState({})
  const [open, setOpen] = useState(false)
  //popUp
  const [ticketPlayID, setTicketPlayID] = useState(null)
  const [ticketData, setTicketData] = useState(null)

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

  useEffect(() => {
    setTicketData(null)
    ticketPlayID
      ? setTicketData(
          nextShows.filter((item) => item.id === ticketPlayID).slice(0, 3)
        )
      : null
  }, [ticketPlayID])

  const popupOpen = (playID) => {
    setTicketPlayID(playID)
    setOpen(true)
  }

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
        <ChildrenScene id='little_moon' items={scene} popupOpen={popupOpen} />
      )}
      <ChildrenRecording id='recording' />
      {isLoading ? <Loader /> : <ChildrenPhoto id='photo' items={photo} />}
      <TicketPopUp
        closePopup={() => setOpen(false)}
        open={open}
        data={ticketData}
      />
    </main>
  )
}
