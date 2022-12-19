import React from 'react'
import { Link } from 'react-router-dom'
import styles from './card.module.scss'

export function CreateActorCard({ data }) {
  return (
    <>
      <div className={styles.cardContent}>
        <div className={styles.cardImg}>
          <Link
            className={styles.imageLink}
            to={'/actor/' + data?.id}
            title='Перейти в профиль актера'
          >
            <img src={data?.src} alt={data?.name} />
          </Link>
        </div>
        <div className={styles.actorCardText}>
          <Link
            className={styles.actorName}
            to={'/actor/' + data?.id}
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
