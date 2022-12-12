import React from 'react'
import styles from './card.module.scss'
import { Ripple } from '../../createElement'

export function CreatePlaysCard({ data }) {
  return (
    <>
      <div className={styles.cardContent}>
        <div className={styles.showsImage}>
          <a className={styles.imageLink} href={'play/' + data.id}>
            <img src={data.src} alt={data.title} />
          </a>
        </div>
        <div className={styles.showsCardText}>
          <div className={styles.topBlock}>
            <div className={styles.titleContainer}>
              <a href={'play/' + data.id} className={styles.title}>
                {data.title}
              </a>
              <p className={styles.shortDescription}>{data.description}</p>
            </div>
            <p className={styles.rating}>{data.rating}+</p>
          </div>

          <div className={styles.place}>{data.scene}</div>
          <div className={styles.ticket}>
            <div className={styles.buy}>
              <a className={styles.link}>
                БИЛЕТЫ
                <Ripple duration={1000} color='#fff' />
              </a>
            </div>
            <div className={styles.premiere}>
              {data.isPremiere ? <span>Премьера</span> : <></>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
