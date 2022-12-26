import React from 'react'
import Marquee from 'react-fast-marquee'
import { API_URL } from '../../../api/index'
import styles from './partners.module.scss'

export function Partners({ partners }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.partnersContent}>
        <h2>НАШИ ПАРТНЁРЫ</h2>
        <div className={styles.cityRecommendations}>
          <iframe src='https://www.mos.ru/otrasli-static/outer/mosTizer.js'></iframe>
        </div>
        <Marquee speed={25} gradient={false} pauseOnHover={true}>
          <div className={styles.sponsors}>
            {partners.map((partner) => (
              <a key={partner.id} href={partner?.link}>
                <img
                  src={API_URL + partner?.logo?.url}
                  alt={partner?.alternativeText}
                />
              </a>
            ))}
            <a></a>
          </div>
        </Marquee>
      </div>
    </div>
  )
}
