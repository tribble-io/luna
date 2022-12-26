import React, { useState, useEffect } from 'react'
import { api } from '../api/index'
import { uniqueBy, getDateStr } from '../assets/utils/usable-function'

import {
  Slider,
  Calendar,
  VideoBlock,
  News,
  Partners,
} from '../components/mainPage'
import Loader from '../components/loader'

// We create a link of a /embed/ format for the correct display of the video by API
function getVideoLink(link) {
  if (link) {
    const linkSplit = link.split(['/watch?v='])
    const newLink = linkSplit[0] + '/embed/' + linkSplit[1]

    return newLink
  } else {
    return ''
  }
}

function createTicketData(arr) {
  if (arr !== null) {
    // Display only first 3 items
    const ticketData = arr.slice(0, 3).map((data) => {
      return {
        item: data,
        id: data.id,
        date: getDateStr(data?.date).date,
        time: data?.time,
        month: getDateStr(data?.date).month_name,
        day: getDateStr(data?.date).day_of_week,
        title: data?.play?.title,
        isPremiere: data?.play?.isPremiere,
        place: data?.play?.scene.name,
        rating: data?.play?.rating,
        buy: data?.tickets_link,
      }
    })
    return ticketData
  } else {
    return []
  }
}

export function Home() {
  const [itemsSlider, setItemsSlider] = useState([])
  const [itemsAffiche, setItemsAffiche] = useState([])
  const [videoLink, setvideoLink] = useState('')
  const [itemsNews, setItemsNews] = useState([])
  const [partners, setpartners] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [firstDate, setFirstDate] = useState()

  const [ticketPlayID, setTicketPlayID] = useState(null)
  const [ticketData, setTicketData] = useState(null)

  useEffect(() => {
    Promise.all([api.exportMainPage(), api.exportShows(), api.exportArticles()])
      .then((values) => {
        setItemsSlider(values[0].plays)
        setvideoLink(getVideoLink(values[0].youtubeLink))
        setpartners(values[0].partners)
        setItemsAffiche(
          uniqueBy(
            values[1],
            (o1, o2) => o1.play.id === o2.play.id && o1.date === o2.date
          )
        )
        setItemsNews(values[2])
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

  return (
    <>
      <Slider
        firstDate={firstDate}
        items={itemsSlider}
        setTicketPlayID={setTicketPlayID}
        ticketData={ticketData}
      />
      <main>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Calendar
              setFirstDate={setFirstDate}
              items={itemsAffiche}
              setTicketPlayID={setTicketPlayID}
              ticketData={ticketData}
            />
            <VideoBlock link={videoLink} />
            <News itemsNews={itemsNews} />
            <Partners partners={partners} />
          </>
        )}
      </main>
    </>
  )
}
