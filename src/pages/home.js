import React, { useState, useEffect } from 'react'
import { api } from '../api/index'
import { uniqueBy, getDateStr } from '../assets/utils/usable-function'
import { TicketPopUp } from '../components/ticketPopup'
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

function createTicketData(arr, type, ticketDate) {
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
    return type === 'affiche'
      ? ticketData.filter((data) => data.item.date === ticketDate)
      : ticketData
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

  const [ticketData, setTicketData] = useState(null)
  const [ticketPlay, setTicketPlay] = useState({
    date: '',
    type: '',
    id: '',
  })
  const [open, setOpen] = useState(false)

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
    ticketPlay.id
      ? api
          .exportTicketData(ticketPlay.id)
          .then((response) => {
            setTicketData(
              createTicketData(response, ticketPlay.type, ticketPlay.date)
            )
          })
          .catch((error) => {
            console.log(error)
          })
      : null
  }, [ticketPlay])

  const popupOpen = (id, type, date) => {
    setTicketPlay({ date: date ?? null, type, id })

    //timeout for smooth display popup
    setTimeout(() => {
      setOpen(true)
    }, 400)
  }

  return (
    <>
      <Slider firstDate={firstDate} items={itemsSlider} popupOpen={popupOpen} />
      <main>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Calendar
              setFirstDate={setFirstDate}
              items={itemsAffiche}
              popupOpen={popupOpen}
            />
            <VideoBlock link={videoLink} />
            <News itemsNews={itemsNews} />
            <Partners partners={partners} />
          </>
        )}
      </main>

      <TicketPopUp
        closePopup={() => setOpen(false)}
        open={open}
        data={ticketData}
      />
    </>
  )
}
