import React from 'react'
import styles from './title.module.scss'

export function PartnersTitle() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.partnersContent}>
          <div className={styles.partnersTitle}>
            <h1>Партнеры</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
