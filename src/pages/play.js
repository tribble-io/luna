import React, { useState, useEffect } from 'react'
import { API_URL, api } from '../api/index'
import { useMatch } from 'react-router-dom'
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
      return {
        item: item,
        id: item?.play?.id,
        show_id: item?.id,
        date: getDateStr(item?.date).date,
        time: item?.time.slice(0, -3),
        month: getDateStr(item?.date).month_name,
        day_of_week: getDateStr(item?.date).day_of_week,
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
  })

  const [showItems, setShowItems] = useState({})
  const [roles, setRoles] = useState({})
  const [directors, setDirectors] = useState({})
  const [press, setPress] = useState({})
  const [photo, setPhoto] = useState({})
  const [review, setReview] = useState({})

  useEffect(() => {
    Promise.all([api.exportComingShow(showID), api.exportShowData(showID)])
      .then((values) => {
        setShowItems(getComingShow(values[0]))

        setShowData(getShowData(values[1]))
        setDirectors(values[1]?.directors)
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
  }, [])

  return (
    <main>
      {isLoading ? <Loader /> : <TitleBlock data={showData} />}
      {isLoading ? <Loader /> : <About data={showData} directors={directors} />}
      {isLoading ? <Loader /> : <ComingShow items={showItems} />}
      {isLoading ? (
        <Loader />
      ) : (
        <Actors roles={roles} title={'Действующие лица и исполнители'} />
      )}
      {isLoading ? <Loader /> : <Press press={press} />}
      {isLoading ? (
        <Loader />
      ) : (
        <ShowPhoto photo={photo} tage={'ФОТОГРАФИИ СО СПЕКТАКЛЯ'} />
      )}
      {isLoading ? <Loader /> : <Review review={review} />}
      <CommentForm showID={showID} />
    </main>
  )
}
