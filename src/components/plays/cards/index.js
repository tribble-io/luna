import React from 'react'
import styles from './shows.module.scss'
import { CreatePlaysCard } from '../../createElement'

const API_URL = 'http://theatre.restomatik.ru:1337'

export function ShowsCards(props) {
  const { items } = props

  function playCard(item) {
    const playCardData = {
      id: item.id,
      src: API_URL + item.cover.url,
      title: item.title,
      rating: item.rating,
      description: item.description,
      scene: item.scene,
      isPremiere: item.isPremiere,
    }
    return playCardData
  }

  return (
    <>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.showsContent}>
            {items.map((item, key) => (
              <div className={styles.showsCard} key={key}>
                <CreatePlaysCard data={playCard(item)} key={item.id} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
