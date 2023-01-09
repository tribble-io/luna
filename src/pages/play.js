import React, { useState, useEffect, useRef } from 'react'
import { API_URL, api } from '../api/index'
import { useLocation, useMatch } from 'react-router-dom'
import { getDateStr } from '../assets'
import noPhoto from '../assets/img/no-photo-actor.jpg'

import {
  TitleBlock,
  About,
  Actors,
  ComingShow,
  Press,
  ShowPhoto,
  Review,
  CommentForm,
} from '../components/play'
import Loader from '../components/loader'

function getShowData(item) {
  return {
    bgImage: API_URL + item?.cover?.url,
    title: item?.title,
    description: item?.description,
    rating: item?.rating,
    durationStr: item?.durationStr,
    premiereDateStr: item?.premiereDateStr,
    scene: item?.scene?.name,
    body: item?.body,
    directors: item?.directors,
  }
}
function getShowRoles(arr) {
  if (arr !== null) {
    const roles = arr.map((role) =>
      role.actors.map((actor) => {
        return {
          id: actor.id,
          role: role.roleTitle,
          name: actor.fullname,
          src: actor.cover !== null ? API_URL + actor.cover?.url : noPhoto,
        }
      })
    )
    return roles.flat()
  } else {
    return []
  }
}

function getShowPhoto(arr) {
  if (arr !== null) {
    const photo = arr.map((item) => {
      return {
        id: item.id,
        original: API_URL + item?.url,
        preview: item?.formats,
        caption: item?.caption,
      }
    })
    return photo
  } else {
    return []
  }
}

const getFullDateMonth = (date) => {
  return `${getDateStr(date).date} ${getDateStr(date).month_name_case} ${
    getDateStr(date).year
  }`
}

const getFullDate = (date) => {
  return `${getDateStr(date).date}.${getDateStr(date).month}.${
    getDateStr(date).year
  }`
}

function getShowReview(arr) {
  if (arr !== null) {
    const review = arr.map((item) => {
      return {
        id: item.id,
        name: item?.name,
        title: item?.title,
        text: item?.text,
        createdAt: getFullDateMonth(item?.createdAt),
        updatedAt: getFullDateMonth(item?.updatedAt),
        theaterAnswer: item?.theaterAnswer,
      }
    })
    return review
  } else {
    return []
  }
}

function getPlayPress(arr) {
  if (arr !== null) {
    const review = arr.map((item) => {
      return {
        id: item.id,
        title: item.title,
        publisher: item.publisher,
        date: getFullDate(item.date),
        link: item.link,
      }
    })
    return review
  } else {
    return []
  }
}

function getComingShow(arr) {
  if (arr !== null && arr.length > 0) {
    const comingShow = arr.map((item) => {
      const formatDate = getDateStr(item?.datetime)
      return {
        item: item,
        id: item?.play?.id,
        show_id: item?.id,
        date: formatDate.date,
        time: item?.datetime.slice(11, 16),
        month: formatDate.month_name,
        day_of_week: formatDate.day_of_week,
        title: item?.play?.title,
        isPremiere: item?.play?.isPremiere,
        scene: item?.play?.scene?.name,
        rating: item?.play?.rating,
        buy: item?.tickets_link,
      }
    })
    return comingShow
  } else {
    return []
  }
}

export function Play() {
  const match = useMatch('/play/:id')
  const showID = match.params.id
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()
  const mainSliderInfo = location.state ?? null
  const aboutRef = useRef(null)

  const [showData, setShowData] = useState({
    bgImage: '',
    title: '',
    description: '',
    tickets_link: '',
    rating: '',
    durationStr: '',
    premiereDateStr: '',
    scene: '',
    body: '',
    directors: '',
  })

  const [showItems, setShowItems] = useState({})
  const [roles, setRoles] = useState({})
  const [press, setPress] = useState({})
  const [photo, setPhoto] = useState({})
  const [review, setReview] = useState({})

  useEffect(() => {
    Promise.all([api.exportComingShow(showID), api.exportShowData(showID)])
      .then((values) => {
        setShowItems(getComingShow(values[0]))

        setShowData(getShowData(values[1]))
        setRoles(getShowRoles(values[1]?.roles))
        setPress(getPlayPress(values[1]?.pressItems))
        setPhoto(getShowPhoto(values[1]?.gallery))
        setReview(getShowReview(values[1]?.comments))
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
    scrollToAbout()
  }, [])

  //If user moved to this page from a (Big) Slider on the main, then we should scroll the page to About block
  function scrollToAbout() {
    mainSliderInfo?.from &&
      aboutRef.current &&
      aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <TitleBlock data={showData} mainSliderInfo={mainSliderInfo} />
      <About data={showData} aboutRef={aboutRef} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ComingShow items={showItems} />
          <Actors roles={roles} title={'Действующие лица и исполнители'} />
          <Press press={press} />
          <ShowPhoto photo={photo} tage={'ФОТОГРАФИИ СО СПЕКТАКЛЯ'} />
          <Review review={review} />
        </>
      )}
      <CommentForm showID={showID} />
    </main>
  )
}
