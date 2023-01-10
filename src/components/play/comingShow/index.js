import React from 'react'
import styles from './comingShow.module.scss'
import { PlaysLine, TextFormatter } from '../../createElement'

export function ComingShow({ items }) {
  // Check if we have coming show
  const isItems = items.length > 0 ? true : false
  const isPushkinCard = items[0]?.isPushkinCard

  return (
    <section id='comingShow'>
      <div className={styles.wrapper}>
        <div className={styles.comingShowContent}>
          <h2>ближайшие показы</h2>
          {isItems ? (
            <div className={styles.comingShowsArea}>
              {items.slice(0, 3).map((item) => (
                <PlaysLine data={item} key={`play-line-${item.show_id}`} />
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
