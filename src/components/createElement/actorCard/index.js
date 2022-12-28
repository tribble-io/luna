import React from 'react'
import { Link } from 'react-router-dom'
import noPhoto from '../../../assets/img/no-photo-actor.jpg'
import styles from './card.module.scss'


export function CreateActorCard({ data, troupeGrig = false }) {
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

            className={
              troupeGrig
                ? `${styles.actorName} ${styles.actorNameTroupe}`
                : styles.actorName
            }
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
