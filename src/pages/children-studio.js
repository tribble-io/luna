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

function createTicketData(arr) {
  if (arr !== null) {
    // Display only first 3 items
    const ticketData = arr.slice(0, 3).map((data) => {
      return {
        item: data,
        id: data.id,
        date: getDateStr(data?.date).date,
        time: data?.time.slice(0, -3),
        month: getDateStr(data?.date).month_name,
        day_of_week: getDateStr(data?.date).day_of_week,
        title: data?.play?.title,
        isPremiere: data?.play?.isPremiere,
        scene: data?.play?.scene.name,
        rating: data?.play?.rating,
        buy: data?.tickets_link,
      }
    })
    return ticketData
  } else {
    return []
  }
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
    ticketPlayID
      ? (setTicketData(null),
        api
          .exportTicketData(ticketPlayID)
          .then((response) => {
            setTicketData(createTicketData(response))
          })
          .catch((error) => {
            console.log(error)
          }))
      : null
  }, [ticketPlayID])

  const popupOpen = (playID) => {
    setOpen(true)
    setTicketPlayID(playID)
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
