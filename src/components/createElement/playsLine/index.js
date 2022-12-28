import React from 'react'
import styles from './line.module.scss'

/*
Example of adding the PlayLine component to a page, you can see a demo on this page src\components\play\comingShow\index.js

Add component tag and props to the parent page where data is array with parameters for the component
<PlaysLine data={data} key={`play-line-${data.id}`} />

smallCard is an optional boolet param for small version play card, by default is false

Parameters List
data: {
  buy: 'httpls://',
  date: 5,
  day_of_week: 'пн',
  isPremiere: true,
  month: 'декабря',
  place: 'Большая сцена',
  rating: 12,
  time: '19:00',
  title: 'Эдит Пиаф. Гимн Любви'
}
*/

export function PlaysLine(props) {
  const { data, smallCard = false } = props
  let playClass = `${styles.playLine}`
  playClass += smallCard === true ? ` ${styles.smallCard}` : ''
  return (
    <>
      <div className={playClass}>
        <div className={styles.playLineConetnt}>
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
          <div className={styles.playButton}>
            <a
              className={styles.buy}
              href={data?.buy}
              target='_blank'
              rel='noreferrer'
            >
              Купить билет
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
