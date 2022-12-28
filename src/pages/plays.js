import React, { useState, useEffect } from 'react'
import { api, API_URL } from '../api/index'
import { TicketPopUp } from '../components/ticketPopup'
import { ShowsFilter, ShowsCards } from '../components/plays'
import Loader from '../components/loader'
import { getDateStr, TODAY_DAY } from '../assets/utils/usable-function'

function createPopupData(item, shows) {
  if (shows !== null && shows.length > 0) {
    const ShowData = shows
      ?.filter((show) => show.date >= TODAY_DAY)
      .map((show) => {
        return {
          id: show.id,
          title: item?.title,
          isPremiere: item?.isPremiere,
          scene: item?.scene.name,
          rating: item?.rating,
          full_date: show?.date,
          date: getDateStr(show?.date).date,
          month: getDateStr(show?.date).month_name,
          day_of_week: getDateStr(show?.date).day_of_week,
          time: show?.time.slice(0, -3),
          buy: show?.tickets_link,
        }
      })
    return ShowData
  } else {
    return []
  }
}

function createPlayData(arr) {
  if (arr !== null) {
    const playCardData = arr.map((item) => {
      return {
        id: item.id,
        src: API_URL + item?.cover?.url,
        title: item?.title,
        rating: item?.rating,
        description: item?.description,
        scene: item?.scene,
        isPremiere: item?.isPremiere,
        shows: createPopupData(item, item.shows),
      }
    })
    return playCardData
  } else {
    return []
  }
}

export function Plays() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [editValue, setEditValue] = useState({
    title: '',
    scene: '',
    rating: false,
    isPremiere: false,
  })

  const [ticketPlayID, setTicketPlayID] = useState(null)
  const [ticketData, setTicketData] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    api
      .exportPlayShows(editValue)
      .then((response) => {
        setItems(createPlayData(response))
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [editValue])

  useEffect(() => {
    ticketPlayID
      ? setTicketData(
          items.filter((item) => item.id === ticketPlayID).slice(0, 3)[0].shows
        )
      : null
  }, [ticketPlayID])

  const popupOpen = (playID) => {
    setTicketPlayID(playID)
    setOpen(true)
  }

  return (
    <main>
      <ShowsFilter setEditValue={setEditValue} editValue={editValue} />
      {isLoading ? (
        <Loader />
      ) : (
        <ShowsCards items={items} popupOpen={popupOpen} />
      )}
      <TicketPopUp
        closePopup={() => setOpen(false)}
        open={open}
        data={ticketData}
      />
    </main>
  )
}
