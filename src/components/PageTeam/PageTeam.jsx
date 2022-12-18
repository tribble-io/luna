import React, { useEffect, useState } from 'react'
import { api, API_URL } from '../../api'
import { CreateButton } from '../createElement'
import DirectorCard from '../createElement/DirectorCard'
import { Actors } from '../play'
import { content, positionsArrayFilters } from './fields'
import collectiveImg from './img/collective.webp'

import styles from './PageTeam.module.scss'

const PageTeam = () => {
  const [actorsResult, setActorsResult] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('труппа')
  const [activeFilterValue, setActiveFilterValue] = useState('труппа')

  const getActors = () => {
    api
      .exportShowActors(activeFilterValue)
      .then((values) => {
        setActorsResult(values)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  const getPersons = () => {
    api
      .exportShowPersons()
      .then((values) => {
        setActorsResult(values)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (activeFilterValue !== 'isGuest') {
      getActors()
    } else {
      getPersons()
    }
  }, [activeFilterValue])

  useEffect(() => {
    switch (activeFilter) {
      case 'труппа':
        setActiveFilterValue('труппа')
        break
      case 'приглашенные артисты':
        setActiveFilterValue('isGuest')
        break
      case 'режиссеры':
        setActiveFilterValue('режиссёры')
        break
      case 'режиссеры-ассистенты':
        setActiveFilterValue('')
        break
      case 'драматурги художники':
        setActiveFilterValue('')
        break
      case 'музыка':
        setActiveFilterValue('музыка')
        break
      case 'оркестр':
        setActiveFilterValue('')
        break
      case 'хореографы и балетмейстеры':
        setActiveFilterValue('')
        break
      default:
        setActiveFilterValue('актёр/актриса')
    }
  }, [activeFilter])

  const getShowRoles = (arr) => {
    if (arr !== null) {
      const roles = arr.map((item) => {
        return {
          id: item.id,
          name: item?.fullname,
          src: API_URL + item.cover?.url,
        }
      })
      return roles.flat()
    } else {
      return []
    }
  }

  const handleUpdateFilter = (e) => {
    const value = e.target.name
    setActiveFilter(value)
  }

  return (
    <section className={styles.containerTeam}>
      <div className={styles.promoTage}>
        <h1>КОЛЛЕКТИВ</h1>
        <img
          src={collectiveImg}
          className={styles.collectiveImg}
          alt='Коллектив театра'
        />
        <div className={styles.directorCards}>
          {!isLoading && content?.length
            ? content.map((data) => (
                <DirectorCard data={data} key={`actor-card=${data.id}`} />
              ))
            : null}
        </div>
        <div className={styles.filters}>
          {!isLoading && positionsArrayFilters?.length ? (
            <CreateButton
              buttonArray={positionsArrayFilters}
              updateFilter={handleUpdateFilter}
              activeButton={activeFilter}
              activeUnderline={true}
              className={styles.nameButtonFilter}
            />
          ) : null}
        </div>
        {!isLoading && actorsResult?.length ? (
          <Actors roles={getShowRoles(actorsResult)} />
        ) : null}
      </div>
    </section>
  )
}

export default PageTeam
