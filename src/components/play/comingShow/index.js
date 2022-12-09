import React from 'react'
import styles from './comingShow.module.scss'
import { PlaysLine } from '../../createElement'

const getWeekDay = (date) => {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
  let dates = new Date(date)
  return days[dates.getDay()]
}

function createLine(item) {
  const createLineData = {
    item: item,
    id: item.id,
    date: parseInt(item.attributes?.date_str.match(/\d+/)),
    time: item.attributes?.time,
    day: getWeekDay(item.attributes?.date),
    title: item.attributes?.play.data.attributes?.title,
    isPremiere: item.attributes?.play.data.attributes?.isPremiere,
    place: item.attributes?.place,
    rating: item.attributes?.play.data.attributes?.rating,
    buy: item.attributes?.tickets_link,
  }
  return createLineData
}

export function ComingShow({ items }) {
  // Check if we have coming show
  const isItems = items.length > 0 ? true : false
  const isPushkinCard =
    items[0]?.attributes?.play.data.attributes?.isPushkinCard

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
                      вы можете приобрести билет на этот спектакль по пушкинской
                      карте
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
