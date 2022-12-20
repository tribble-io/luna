import React from 'react'

import styles from './TheatricalPerformance.module.scss'

import { getDateStr } from '../../../assets'

const TheatricalPerformance = ({ content }) => {
  const handleClick = (link) => {
    location.href = link
  }

  return (
    <section className={styles.boxTheatricalPerformance}>
      <p className={styles.theatricalPerformanceTitle}>БЛИЖАЙШИЕ ПОСТАНОВКИ</p>
      {content?.map(
        ({ id, date, time, place, tickets_link, title, rating }, index) => (
          <div className={styles.performance} key={`performance-${id}`}>
            <div
              className={
                index === 0
                  ? `${styles.contentPerformance} ${styles.contentPerformanceStart}`
                  : styles.contentPerformance
              }
            >
              <div className={styles.contentPerformanceInfo}>
                <div className={styles.boxPerformanceDate}>
                  <p className={styles.dateDay}>{getDateStr(date).date} /</p>
                  <div className={styles.performanceDate}>
                    <p className={styles.dateMonth}>
                      {getDateStr(date).month_name_case}
                    </p>
                    <p className={styles.time}>
                      {getDateStr(date).day_of_week}{' '}
                      {time.split(':', 2).join(':')}
                    </p>
                  </div>
                </div>
                <div className={styles.performanceInfo}>
                  <p className={styles.performanceName}>{title}</p>
                  <p className={styles.performanceScene}>{place}</p>
                </div>
              </div>
              <div className={styles.performanceBoxButton}>
                <span className={styles.performanceAgeLimit}>{rating}+</span>
                <button
                  className={styles.performanceButton}
                  onClick={() => handleClick(tickets_link)}
                >
                  Купить билет
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  )
}

export default TheatricalPerformance
