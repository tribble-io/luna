import React from 'react'

import styles from './TheatricalPerformance.module.scss'

const TheatricalPerformance = ({ content }) => {
  const formatDate = (text, number) => {
    if (number) {
      return parseInt(text)
    } else {
      return text.replace(/[^А-Яа-яЁё]/g, '')
    }
  }

  const formatDateTime = ({
    locale = [],
    date = Date.now(),
    ...options
  } = {}) => new Intl.DateTimeFormat(locale, options).format(date)

  const handelClick = (link) => {
    location.href = link
  }

  return (
    <section className={styles.boxTheatricalPerformance}>
      <p className={styles.theatricalPerformanceTitle}>БЛИЖАЙШИЕ ПОСТАНОВКИ</p>
      {content?.map(
        (
          { id, date_str, date, time, place, tickets_link, title, rating },
          index
        ) => (
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
                  <p className={styles.dateDay}>
                    {formatDate(date_str, true)} /
                  </p>
                  <div className={styles.performanceDate}>
                    <p className={styles.dateMonth}>
                      {formatDate(date_str, false)}
                    </p>
                    <p className={styles.time}>
                      {formatDateTime({
                        date: new Date(date),
                        weekday: 'short',
                      })}{' '}
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
                  onClick={() => handelClick(tickets_link)}
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
