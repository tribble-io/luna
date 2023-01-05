import React from 'react'
import styles from './list.module.scss'
import { API_URL } from '../../../api'

export function PartnersList(props) {
  const { items } = props
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.partnersContent}>
          <div className={styles.partnersList}>
            {items.map((item, index) => (
              <div className={styles.partnerBlock} key={item?.id ?? index}>
                <a
                  className={styles.partreLink}
                  href={item?.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  <img
                    alt={item?.alternativeText ?? 'Наш партнер'}
                    src={
                      API_URL +
                      (item?.logo?.formats?.medium?.url ??
                        item?.logo?.formats?.small?.url ??
                        item?.logo?.formats?.thumbnail?.url ??
                        item?.logo?.url)
                    }
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
