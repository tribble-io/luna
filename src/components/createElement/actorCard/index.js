import React from 'react'
import { Link } from 'react-router-dom'
import noPhoto from '../../../assets/img/no-photo-actor.jpg'
import styles from './card.module.scss'

/*
  nameWrap param controls actor name wrapping (one line or two), by default is true
*/

export function CreateActorCard(props) {
  const { data, nameWrap = true } = props
  return (
    <>
      <div className={styles.cardContent}>
        <div className={styles.cardImg}>
          <Link
            className={styles.imageLink}
            to={'/person/' + data?.id}
            title='Перейти в профиль актера'
          >
            <img src={data?.src ?? noPhoto} alt={data?.name} />
          </Link>
        </div>
        <div className={styles.actorCardText}>
          <Link
            className={styles.actorName}
            style={{
              display: nameWrap ? 'table-caption' : 'block',
            }}
            to={'/person/' + data?.id}
            title='Перейти в профиль актера'
          >
            {data?.name}
          </Link>
          {data?.role ? <p className={styles.actorRole}>{data?.role}</p> : null}
        </div>
      </div>
    </>
  )
}
