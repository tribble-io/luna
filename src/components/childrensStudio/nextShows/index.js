import React from 'react'
import styles from './nextShows.module.scss'
import CreateLine from '../../createElement/playsLine'

export function ChildrenNextShows(props) {
  const { id, items } = props
  // Check if we have shows in little moon
  const isItems = items.length > 0 ? true : false

  return (
    <>
      <section id={id}>
        <div className={styles.wrapper}>
          <div className={styles.nextShowsContent}>
            <div className={styles.nextShowsTitle}>
              <h2>ближайшие постановки</h2>
            </div>
            {isItems ? (
              <div className={styles.nextShowsArea}>
                {items.slice(0, 4).map((data) => (
                  <CreateLine data={data} key={data.id} />
                ))}
              </div>
            ) : (
              <div className={styles.nextShowsArea}>
                Нет ближайших спектаклей на сцене &quot;МАЛЕНЬКАЯ ЛУНА&quot;
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
