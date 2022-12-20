import React from 'react'
import styles from './comingShow.module.scss'
import { PlaysLine, TextFormatter } from '../../createElement'
import { getDateStr } from '../../../assets'

function createLine(item) {
  const createLineData = {
    item: item,
    id: item.id,
    date: getDateStr(item?.date).date,
    time: item?.time,
    month: getDateStr(item?.date).month_name,
    day: getDateStr(item?.date).day_of_week,
    title: item?.play?.title,
    isPremiere: item?.play?.isPremiere,
    place: item?.place,
    rating: item?.play?.rating,
    buy: item?.tickets_link,
  }
  return createLineData
}

export function ComingShow({ items }) {
  // Check if we have coming show
  const isItems = items.length > 0 ? true : false
  const isPushkinCard = items[0]?.play?.isPushkinCard

  return (
    <section id='comingShow'>
      <div className={styles.wrapper}>
        <div className={styles.comingShowContent}>
          <h2>ближайшие показы</h2>
          {isItems ? (
            <div className={styles.comingShowsArea}>
              {items.slice(0, 3).map((item) => (
                <PlaysLine data={createLine(item)} key={item.id} />
              ))}
              {isPushkinCard ? (
                <div className={styles.pushkinCard}>
                  <div className={styles.pushkinCardImage}>
                    <img src='/img/pushkinCard.png' alt='Пушкинская карта' />
                  </div>
                  <div className={styles.pushkinCardText}>
                    <p>
                      <TextFormatter>
                        вы можете приобрести билет на этот спектакль по
                        пушкинской карте
                      </TextFormatter>
                    </p>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <div className={styles.comingShowsArea}>
              Нет ближайших показов данного спектакля
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
