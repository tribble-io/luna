import React from 'react'
import styles from './shows.module.scss'
import { CreatePlaysCard } from '../../createElement'
export function ShowsCards(props) {
  const { items, popupOpen } = props

  return (
    <>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.showsContent}>
            {items.map((item, key) => (
              <div className={styles.showsCard} key={key}>
                <CreatePlaysCard
                  data={item}
                  key={item.id}
                  popupOpen={popupOpen}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
