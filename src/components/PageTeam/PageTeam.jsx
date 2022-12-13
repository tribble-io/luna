import React, { useEffect, useState } from 'react'
import { api, API_URL } from '../../api'
import CreateActorCard from '../createElement/actorCard'
import CreateButton from '../createElement/filterButton'
import { Actors } from '../play'
import { content, positionsArrayFilters } from './fields'
import collectiveImg from './img/collective.webp'

import styles from './PageTeam.module.scss'

const PageTeam = () => {
  const [actorsResult, setActorsResult] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState('труппа')
  const [activeFilterValue, setActiveFilterValue] = useState('актёр/актриса')

  const getActors = () => {
    Promise.all([api.exportShowActors(activeFilterValue)])
      .then((values) => {
        setActorsResult(values[0])
        setIsLoading(false)
      })
      .catch(() => {
        // console.log(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (activeFilterValue) getActors()
  }, [activeFilterValue])

  useEffect(() => {
    switch (activeFilter) {
      case 'труппа':
        setActiveFilterValue('актёр/актриса')
        break
      case 'приглашенные артисты':
        setActiveFilterValue('приглашенные артисты')
        break
      case 'режиссеры':
        setActiveFilterValue('режиссёр')
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
          name: item.attributes?.fullname,
          src: API_URL + item.attributes.cover?.data?.attributes?.url,
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
        <h1>Коллектив</h1>
        <img
          src={collectiveImg}
          className={styles.collectiveImg}
          alt='Коллектив театра'
        />
        {!isLoading && content?.length
          ? content.map((data) => (
              <CreateActorCard
                data={data}
                key={`actor-card=${data.id}`}
                directors={true}
              />
            ))
          : null}
        <div className={styles.filters}>
          {!isLoading && positionsArrayFilters?.length ? (
            <CreateButton
              buttonArray={positionsArrayFilters}
              updateFilter={handleUpdateFilter}
              activeButton={activeFilter}
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
