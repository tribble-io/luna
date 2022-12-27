import React from 'react'
import styles from './line.module.scss'

export function PlaysLine(props) {
  const { data, smallCard = false } = props
  let playClass = styles.playLineConetnt
  playClass += smallCard === true ? ` ${styles.smallCard}` : ''
  return (
    <>
      <div className={styles.playLine}>
        <div className={playClass}>
          <div className={styles.playDate}>
            <div className={styles.date}>{data?.date} /</div>
            <div className={styles.monthTime}>
              <div className={styles.month}>{data?.month}</div>
              <div className={styles.time}>
                {data?.day_of_week} {data?.time}
              </div>
            </div>
          </div>
          <div className={styles.playTitle}>
            <div>
              <p className={styles.title}>{data?.title}</p>
            </div>
            {data?.isPremiere ? (
              <p className={styles.premier}>Премьера</p>
            ) : (
              <></>
            )}
            <div className={styles.scene}>{data?.scene}</div>
          </div>
          <div>
            <p className={styles.rating}>{data?.rating}+</p>
          </div>
          <div>
            <a className={styles.buy} href={data?.buy}>
              Купить билет
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
