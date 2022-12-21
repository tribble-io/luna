import React from 'react'
import styles from './directorCard.module.scss'

const DirectorCard = ({ data }) => {
  return (
    <>
      <div className={styles.cardDirectorContent}>
        <div className={styles.cardDirectorImg}>
          <a
            className={styles.imageLink}
            href={'person/' + data?.id}
            title='Перейти в профиль актера'
          >
            <img src={data?.src} alt={data?.name} />
          </a>
        </div>
        <div className={styles.directorCardText}>
          <a
            className={styles.actorName}
            href={'person/' + data?.id}
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

export default DirectorCard
