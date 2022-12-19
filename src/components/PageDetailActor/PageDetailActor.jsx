import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api, API_URL } from '../../api'
import { ChildrenPhoto } from '../childrensStudio'
import ActorInfo from '../createElement/ActorInfo/ActorInfo'
import MovieRoles from '../createElement/MovieRoles/MovieRoles'
import TheaterRoles from '../createElement/TheaterRoles/TheaterRoles'
import TheatricalPerformance from '../createElement/TheatricalPerformance/TheatricalPerformance'
import { Press } from '../play'

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
          return { rating: play.rating, title: play.title, ...item }
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
        arr.push({ role: roleTitle, ...play })
      }
    })
    return arr
  }, [play_roles])

  const galleryPhotos = useMemo(() => {
    let arr = []
    gallery?.filter(({ media }) => {
      if (media.id) {
        arr.push({ src: API_URL + media.url, ...media })
      }
    })
    return arr
  }, [gallery])

  return (
    <section className={styles.containerDetailInfo}>
      {isLoading ? null : (
        <div className={styles.detailInfo}>
          <ActorInfo
            img={API_URL + cover?.url}
            name={fullname}
            body={body}
            rank={title}
            romashka={romashka_awards}
          />
          {theatricalPerformance?.length ? (
            <TheatricalPerformance content={theatricalPerformance} />
          ) : null}
          {play_roles?.length ? <TheaterRoles content={theaterRoles} /> : null}
          {movies?.length ? <MovieRoles movies={movies} /> : null}
          {press_items ? <Press press={press_items} actor={true} /> : null}
          {galleryPhotos?.length ? (
            <ChildrenPhoto items={galleryPhotos} id={12} />
          ) : null}
        </div>
      )}
    </section>
  )
}

export default PageDetailActor
