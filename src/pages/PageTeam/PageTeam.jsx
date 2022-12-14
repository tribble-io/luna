import React, { useEffect, useState } from 'react'
import { api, API_URL } from '../../api'
import {
  CreateButton,
  CustomCheckbox,
  CreateActorCard,
} from '../../components/createElement'
import DirectorCard from '../../components/createElement/DirectorCard'
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
        setActorsResult(getShowRoles(response))
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
          <div className={styles.filterGroup}>
            {!isLoading && positionsArrayFilters?.length ? (
              <CreateButton
                buttonArray={positionsArrayFilters}
                updateFilter={updateFilter}
                activeButton={editValue.actors}
                className={styles.nameButtonFilter}
              />
            ) : null}
          </div>

          <div className={styles.filterGroup}>
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
        </div>
        {!isLoading && actorsResult?.length ? (
          <div className={styles.actorsGridTroupe}>
            {actorsResult?.map((item, key) => (
              <div
                className={styles.actorsCard}
                key={`troupActorCard-${item.id ?? key}`}
              >
                <CreateActorCard data={item} key={item.id} troupeGrig={true} />
              </div>
            ))}
          </div>
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
