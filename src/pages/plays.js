import React, { useState, useEffect } from 'react'
import { api, API_URL } from '../api/index'
import { TicketPopUp } from '../components/ticketPopup'
import { ShowsFilter, ShowsCards } from '../components/plays'
import Loader from '../components/loader'
import { getDateStr } from '../assets/utils/usable-function'

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

function createPlayData(arr) {
  if (arr !== null) {
    const playCardData = arr.map((item) => {
      return {
        id: item.id,
        src: API_URL + item.cover.url,
        title: item.title,
        rating: item.rating,
        description: item.description,
        scene: item.scene,
        isPremiere: item.isPremiere,
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
