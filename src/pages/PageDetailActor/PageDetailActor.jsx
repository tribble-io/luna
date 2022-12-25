import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api, API_URL } from '../../api'
import { getDateStr } from '../../assets'
import {
  ChildrenNextShows,
  ChildrenPhoto,
} from '../../components/childrensStudio'
import ActorInfo from '../../components/createElement/ActorInfo/ActorInfo'
import MovieRoles from '../../components/createElement/MovieRoles/MovieRoles'
import TheaterRoles from '../../components/createElement/TheaterRoles/TheaterRoles'
import { Press } from '../../components/play'

import styles from './PageDetailActor.module.scss'

const PageDetailActor = () => {
  const { id } = useParams()
  const [actorInfo, setActorInfo] = useState({})
  const [isLoading, setIsLoading] = useState(true)

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
            day: formatDate?.day_of_week,
            place: play?.scene.name,
            month: formatDate?.month_name_case,
            date: formatDate?.date,
            time: item?.time,
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
            <ChildrenNextShows items={theatricalPerformance} actor={true} />
          ) : null
        ) : null}

        {play_roles?.length ? (
          <TheaterRoles content={theaterRoles} isLoading={isLoading} />
        ) : null}
        {movies?.length ? <MovieRoles movies={movies} /> : null}
        {press_items ? <Press press={press_items} actor={true} /> : null}
        {galleryPhotos?.length ? (
          <ChildrenPhoto items={galleryPhotos} id={12} />
        ) : null}
      </div>
    </section>
  )
}

export default PageDetailActor
