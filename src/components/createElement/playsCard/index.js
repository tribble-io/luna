import React from 'react'
import { Link } from 'react-router-dom'
import styles from './card.module.scss'
import { Ripple, TextFormatter } from '../../createElement'

export function CreatePlaysCard({ data, role = false }) {
  return (
    <>
      <div className={styles.cardContent}>
        <div className={styles.showsImage}>
          <Link className={styles.imageLink} to={`/play/${data.id}`}>
            <img src={data?.src} alt={data?.title} />
          </Link>
        </div>
        <div className={styles.showsCardText}>
          <div className={styles.topBlock}>
            <div className={styles.titleContainer}>
              <Link className={styles.title} to={`/play/${data?.id}`}>
                {data?.title}
              </Link>
              {role ? (
                <span>{`роль:${' '}${data?.role}`}</span>
              ) : (
                <p className={styles.shortDescription}>
                  <TextFormatter>{data?.description}</TextFormatter>
                </p>
              )}
            </div>
            <p className={styles.rating}>{data?.rating}+</p>
          </div>

          <div className={styles.place}>{data?.scene}</div>
          <div className={styles.ticket}>
            <div className={styles.buy}>
              <a className={styles.link}>
                БИЛЕТЫ
                <Ripple duration={1000} color='#fff' />
              </a>
            </div>
            <div className={styles.premiere}>
              {data?.isPremiere ? <span>Премьера</span> : <></>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
