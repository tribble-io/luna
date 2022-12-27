import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api, API_URL } from '../../api'
import { getDateStr } from '../../assets'
import { PhotosSlider } from '../../components/actorDetail/PhotosSlider/PhotosSlider'
import { UpcomingPerformances } from '../../components/actorDetail/UpcomingPerformances/UpcomingPerformances'
import ActorInfo from '../../components/createElement/ActorInfo/ActorInfo'
import MovieRoles from '../../components/createElement/MovieRoles/MovieRoles'
import TheaterRoles from '../../components/createElement/TheaterRoles/TheaterRoles'
import { Press } from '../../components/play'
import { TicketPopUp } from '../../components/ticketPopup'

import styles from './PageDetailActor.module.scss'

const PageDetailActor = () => {
  const { id } = useParams()
  const [actorInfo, setActorInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  //popup
  const [ticketPlayID, setTicketPlayID] = useState(null)
  const [ticketData, setTicketData] = useState(null)
  const [open, setOpen] = useState(false)

  const {
    cover,
    fullname,
    body,
    title,
    play_roles,
    press_items,
    movies,
    gallery,
    romashka_awards,
  } = actorInfo ?? {}

  const getInfoActor = () => {
    api
      .exportGetDetailInfoActor(id)
      .then((values) => {
        setActorInfo(values)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getInfoActor()
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

  const theatricalPerformance = useMemo(() => {
    let arr = []
    play_roles?.filter(({ play }) => {
      if (play.shows.length) {
        const newShow = play.shows?.map((item) => {
          const formatDate = getDateStr(item.date)
          return {
            rating: play?.rating,
            title: play?.title,
            isPremiere: play?.isPremiere,
            buy: item?.tickets_link,
            day_of_week: formatDate?.day_of_week,
            scene: play?.scene?.name,
            month: formatDate?.month_name_case,
            date: formatDate?.date,
            time: item?.time.slice(0, -3),
          }
        })
        arr = [...arr, ...newShow]
      }
    })
    return arr
  }, [play_roles])

  const theaterRoles = useMemo(() => {
    let arr = []
    play_roles?.filter(({ play, roleTitle }) => {
      if (play.id) {
        arr.push({
          role: roleTitle,
          src: API_URL + play.cover.url,
          href: API_URL + play.cover.url,
          ...play,
        })
      }
    })
    return arr
  }, [play_roles])

  const galleryPhotos = useMemo(() => {
    let arr = []
    gallery?.filter(({ media, caption }) => {
      if (media.id) {
        arr.push({
          src: API_URL + media.url,
          caption,
          href: API_URL + media.url,
          ...media,
        })
      }
    })
    return arr
  }, [gallery])

  const popupOpen = (playID) => {
    setOpen(true)
    setTicketPlayID(playID)
  }

  return (
    <section className={styles.containerDetailInfo}>
      <div className={styles.detailInfo}>
        {isLoading ? null : (
          <ActorInfo
            img={API_URL + cover?.url}
            name={fullname}
            body={body}
            rank={title}
            romashka={romashka_awards}
          />
        )}
        {!isLoading ? (
          theatricalPerformance?.length ? (
            <UpcomingPerformances items={theatricalPerformance} actor={true} />
          ) : null
        ) : null}

        {play_roles?.length ? (
          <TheaterRoles
            content={theaterRoles}
            isLoading={isLoading}
            popupOpen={popupOpen}
          />
        ) : null}
        {movies?.length ? <MovieRoles movies={movies} /> : null}
        {press_items ? <Press press={press_items} actor={true} /> : null}
        {galleryPhotos?.length ? (
          <PhotosSlider items={galleryPhotos} id={12} />
        ) : null}
        <TicketPopUp
          closePopup={() => setOpen(false)}
          open={open}
          data={ticketData}
        />
      </div>
    </section>
  )
}

export default PageDetailActor
