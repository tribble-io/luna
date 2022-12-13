import React from 'react'
import styles from './card.module.scss'

export default function CreateActorCard({ data, directors }) {
  return (
    <>
      <div
        className={directors ? styles.cardDirectorContent : styles.cardContent}
      >
        <div className={directors ? styles.cardDirectorImg : styles.cardImg}>
          <a
            className={styles.imageLink}
            href={'actor/' + data?.id}
            title='Перейти в профиль актера'
          >
            <img src={data?.src} alt={data?.name} />
          </a>
        </div>
        <div
          className={directors ? styles.directorCardText : styles.actorCardText}
        >
          <a
            className={styles.actorName}
            href={'actor/' + data?.id}
            title='Перейти в профиль актера'
          >
            {data?.name}
          </a>
          <p className={styles.actorRole}>{data?.role}</p>
          <p className={styles.actorRank}>{data?.rank}</p>
        </div>
      </div>
      <p className={styles.actorRankMobile}>{data?.rank}</p>
    </>
  )
}
