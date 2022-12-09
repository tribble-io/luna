import React from 'react'
import styles from './shows.module.scss'
import CreatePlaysCard from '../../createElement/playsCard'

const API_URL = 'http://theatre.restomatik.ru:1337'

export function ShowsCards(props) {
  const { items } = props

  function playCard(item) {
    const playCardData = {
      id: item.id,
      src: API_URL + item.attributes.cover.data.attributes.url,
      title: item.attributes.title,
      rating: item.attributes.rating,
      description: item.attributes.description,
      scene: item.attributes.scene,
      isPremiere: item.attributes.isPremiere,
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
