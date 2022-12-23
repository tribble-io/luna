import React from 'react'
import { IsMobile } from '../../../assets'
import styles from './line.module.scss'

export function PlaysLine({ data, actor = false }) {
  if (data.day) {
    return (
      <div className={styles.posterContent}>
        <div className={styles.posterContent_el_content}>
          <div className={styles.posterContent_el_content_2}>
            {actor && !IsMobile ? (
              <div className={styles.boxPerformanceDate}>
                <p className={styles.dateDay}>{data?.date} /</p>
                <div className={styles.performanceDate}>
                  <p className={styles.dateMonth}>{data?.month}</p>
                  <p className={styles.time}>
                    {data?.day} {data?.time?.slice(0, -3)}
                  </p>
                </div>
              </div>
            ) : (
              <div className={styles.data}>
                <div className={styles.posterDay}>{data?.date} /</div>
                <div className={styles.posterTime}>
                  <p>{data?.day}</p>
                  <p>{data?.time?.slice(0, -3)}</p>
                </div>
                <div className={styles.posterMonth}>{data?.month}</div>
              </div>
            )}
            <div className={styles.name}>
              <div className={styles.posterDescription}>
                <div className={styles.title}>{data?.title}</div>
                <div className={styles.place}>{data?.place}</div>
              </div>
              <div className={styles.premier}>
                {data?.isPremiere ? <span>Премьера</span> : <></>}
              </div>
            </div>
          </div>
          <div className={styles.restrictionBlock}>
            <div className={styles.rating}>{data?.rating}+</div>
            <a className={styles.buy} href={data?.buy}>
              Купить билет
            </a>
          </div>
        </div>
      </div>
    )
  } else {
    return <div>По заданным фильтрам ничего не найдено</div>
  }
}
