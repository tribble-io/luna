import React from 'react'
import styles from './line.module.scss'

export default function CreateLine({ data }) {
  if (data.day) {
    return (
      <div className={styles.posterContent}>
        <div className={styles.posterContent_el}>
          <div className={styles.posterContent_el_content}>
            <div className={styles.posterContent_el_content_2}>
              <div className={styles.data}>
                <div className={styles.dataNumber}>{data?.date} /</div>
                <div className={styles.dataTime}>
                  <p>{data?.day}</p>
                  <p>{data?.time?.slice(0, -3)}</p>
                </div>
              </div>
              <div className={styles.name}>
                <div>
                  <div>{data?.title}</div>
                  <div className={styles.premier}>
                    {data?.isPremiere ? <span>Премьера</span> : <></>}
                  </div>
                </div>
                <div className={styles.scien}>{data?.place}</div>
              </div>
            </div>
            <div className={styles.restrictionBlock}>
              <div className={styles.restriction}>{data?.rating}+</div>
              <a className={styles.buy} href={data?.buy}>
                Купить билет
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <div>По заданным фильтрам ничего не найдно</div>
  }
}
