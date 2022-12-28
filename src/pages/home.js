import React, { useState, useEffect } from 'react'
import { api } from '../api/index'
import {
  uniqueBy,
  getDateStr,
  TODAY_DAY,
} from '../assets/utils/usable-function'
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

function getAfficheData(arr) {
  if (arr !== null) {
    const afficheData = arr.map((item) => {
      return {
        item: item,
        play: item.play,
        id: item?.id,
        play_id: item?.play?.id,
        full_date: item?.date,
        date: getDateStr(item?.date).date,
        time: item?.time.slice(0, -3),
        monthNum: getDateStr(item?.date).month,
        month: getDateStr(item?.date).month_name_case,
        day: getDateStr(item?.date).day_of_week,
        title: item?.play?.title,
        isPremiere: item?.play?.isPremiere,
        scene: item?.play?.scene?.name,
        rating: item?.play?.rating,
        buy: item?.tickets_link,
      }
    })
    return afficheData
  } else {
    return []
  }
}

function getSliderData(arr) {
  if (arr !== null) {
    const sliderData = arr.map((play) => {
      const sliderShows = play?.shows
        ?.filter((show) => show.date >= TODAY_DAY)
        ?.map((show) => {
          return {
            id: show.id,
            title: play?.title,
            isPremiere: play?.isPremiere,
            scene: play?.scene?.name,
            rating: play?.rating,
            full_date: show?.date,
            date: getDateStr(show?.date).date,
            time: show?.time.slice(0, -3),
            month: getDateStr(show?.date).month_name_case,
            day: getDateStr(show?.date).day_of_week,
            buy: show?.tickets_link,
          }
        })
      return {
        ...play,
        shows: sliderShows,
      }
    })
    return sliderData
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
        setItemsSlider(getSliderData(values[0].plays))
        setvideoLink(getVideoLink(values[0].youtubeLink))
        setpartners(values[0].partners)
        setItemsAffiche(getAfficheData(values[1]))
        setItemsNews(values[2])
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    setTicketData(null)
    setTicketData(createTicketData)
  }, [ticketPlay])

  function createTicketData() {
    if (ticketPlay.type === 'affiche') {
      return itemsAffiche
        .filter(
          (item) =>
            item.play_id === ticketPlay.id && item.full_date === ticketPlay.date
        )
        .slice(0, 3)
    } else if (ticketPlay.type === 'slider') {
      return itemsSlider
        .filter((item) => item.id === ticketPlay.id)
        .slice(0, 3)[0].shows
    }
  }

  const afficheFilter = uniqueBy(
    itemsAffiche,
    (o1, o2) => o1.play_id === o2.play_id && o1.full_date === o2.full_date
  )

  const popupOpen = (id, type, date) => {
    setTicketPlay({ date: date ?? null, type, id })
    setOpen(true)
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
              items={afficheFilter}
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
