import React from 'react'
import styles from './card.module.scss'

export function CreateActorCard({ data }) {
  return (
    <>
      <div className={styles.cardContent}>
        <div className={styles.cardImg}>
          <a
            className={styles.imageLink}
            href={'actor/' + data.id}
            title='Перейти в профиль актера'
          >
            <img src={data.src} alt={data.name} />
          </a>
        </div>
        <div className={styles.actorCardText}>
          <a
            className={styles.actorName}
            href={'actor/' + data.id}
            title='Перейти в профиль актера'
          >
            {data.name}
          </a>
          <p className={styles.actorRole}>{data.role}</p>
        </div>
      </div>
    </>
  )
}
