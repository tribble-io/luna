import React from 'react'

import styles from './ActorInfo.module.scss'

const ActorInfo = ({ img, name, body, rank, romashka }) => {
  return (
    <section className={styles.actorInfo}>
      {name ? (
        <span className={styles.actorNameMobile}>{name.toUpperCase()}</span>
      ) : null}
      <img className={styles.actorPhoto} src={img} alt={name} />
      <div className={styles.infoActor}>
        {name ? (
          <span className={styles.actorName}>{name.toUpperCase()}</span>
        ) : null}
        {/* <div className={styles.boxActorDate}>
          <span className={styles.actorDateTitle}></span>
          <p className={styles.actorDateInfo}></p>
        </div>
        <div className={styles.boxActorЕducation}>
          <span className={styles.actorЕducation}></span>
          <p className={styles.actorЕducationInfo}></p>
        </div> */}
        {body ? (
          <p className={styles.actorBody}>
            {body?.split(/\n/).map((r, i) => (
              <React.Fragment key={i + 1}>
                {r}
                <br />
              </React.Fragment>
            ))}
          </p>
        ) : null}
        {rank ? <p className={styles.actorRank}>{rank}</p> : null}
        <div className={styles.actorCardRomashka}>
          <div className={styles.cardRomashka}>
            <p className={styles.romashkaTitle}>
              {`Лауреат премии "Ромашка":`}
            </p>

            {romashka?.map((item, index) => (
              <p className={styles.romashkaContent} key={`romashka-${index}`}>
                За роль {item?.role_genetive} в спектакле «{item?.play}» сезон{' '}
                {item?.season?.year}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActorInfo
