import React, { useEffect } from 'react'
import Marquee from 'react-fast-marquee'
import { API_URL } from '../../../api/index'
import styles from './partners.module.scss'

export function Partners({ partners }) {
  useEffect(() => {
    const script = document.createElement('script')

    script.src = `https://www.mos.ru/otrasli-static/outer/mosTizer.js`
    script.id = 'mosru'
    script.async = true

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  })

  return (
    <section id='partners' className={styles.partners}>
      <div className={styles.wrapper}>
        <div className={styles.partnersContent}>
          <h2>НАШИ ПАРТНЁРЫ</h2>
          <div className={styles.cityRecommendations}>
            <div className={styles.tizerBlock}>
              <div className={styles.tizerBlockCol}>
                <div
                  className={styles.tizerBlockBanner}
                  data-mos-teaser='{ "scroll":false,"adaptive":null,"placementParams":{ "p1":"bxdrg","p2":"fpkh"}}'
                ></div>
                <div
                  className={styles.tizerBlockBanner}
                  data-mos-teaser='{ "scroll":false,"adaptive":null,"placementParams":{ "p1":"bxdrh","p2":"fpkh"}}'
                ></div>
                <div
                  className={styles.tizerBlockBanner}
                  data-mos-teaser='{ "scroll":false,"adaptive":null,"placementParams":{ "p1":"bxdri","p2":"fpkh"}}'
                ></div>
                <div
                  className={styles.tizerBlockBanner}
                  data-mos-teaser='{ "scroll":false,"adaptive":null,"adaptiveOptions":{ "tabletWidth":1200,"phoneWidth":810},"placementParams":{ "p1":"bxdrj","p2":"fpkh"}}'
                ></div>
              </div>
            </div>
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
            </div>
          </Marquee>
        </div>
      </div>
      <div className={`${styles.decorationLine} ${styles.lineFirst}`}></div>
      <div className={`${styles.decorationLine} ${styles.CircleFirst}`}></div>
    </section>
  )
}
