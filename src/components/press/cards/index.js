import React from 'react'
import styles from './cards.module.scss'
import { CreatePressLine } from '../../createElement'

export function PressCards(props) {
  const { items } = props

  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.pressList}>
          {items.map((item) => (
            <div className={styles.pressItem} key={item.id}>
              <CreatePressLine data={item} key={item.id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
