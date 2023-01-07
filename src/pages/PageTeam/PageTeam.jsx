import React, { useEffect, useState } from 'react'
import { api, API_URL } from '../../api'
import { CreateButton, CustomCheckbox } from '../../components/createElement'
import DirectorCard from '../../components/createElement/DirectorCard'
import { Actors } from '../../components/play'
import { content, positionsArrayFilters } from './fields'
import collectiveImg from './img/collective.webp'
import noPhoto from '../../assets/img/no-photo-actor.jpg'

import styles from './PageTeam.module.scss'

const PageTeam = () => {
  const [actorsResult, setActorsResult] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [editValue, setEditValue] = useState({
    actors: 'труппа',
    guest: false,
  })

  useEffect(() => {
    api
      .exportShowActors(editValue)
      .then((response) => {
        setActorsResult(response)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [editValue])

  const updateFilter = (e) => {
    const value = e.target.name
    setEditValue((editValue) => ({ ...editValue, actors: value }))
  }

  const getShowRoles = (arr) => {
    if (arr !== null) {
      const roles = arr.map((item) => {
        return {
          id: item?.id,
          name: item?.fullname,
          src: item?.cover?.url ? API_URL + item?.cover?.url : noPhoto,
          role: item?.title,
        }
      })
      return roles.flat()
    } else {
      return []
    }
  }

  const isActive = (state, name) => {
    console.log(state, name)
    setEditValue((editValue) => ({ ...editValue, [name]: state }))
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
              updateFilter={updateFilter}
              activeButton={editValue.actors}
              className={styles.nameButtonFilter}
            />
          ) : null}
        </div>
        <div className={styles.filters}>
          {!isLoading ? (
            <CustomCheckbox
              id='guest'
              name='guest'
              label='приглашенные артисты'
              isActive={isActive}
              className={styles.checkbox}
            />
          ) : (
            <></>
          )}
        </div>
        {!isLoading && actorsResult?.length ? (
          <Actors roles={getShowRoles(actorsResult)} troupeGrig={true} />
        ) : (
          <div className={styles.noActorsResult}>
            <p>Данные отсутствуют</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default PageTeam
