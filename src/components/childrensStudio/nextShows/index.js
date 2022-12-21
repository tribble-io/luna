import React from 'react'
import styles from './nextShows.module.scss'
import { PlaysLine } from '../../createElement'

export function ChildrenNextShows(props) {
  const { id, items, actor = false } = props
  // Check if we have shows in little moon
  const isItems = items?.length > 0 ? true : false

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
                {typeof items === 'string'
                  ? items
                      .slice(0, 4)
                      .map((data, index) => (
                        <PlaysLine
                          data={data}
                          key={`lays-line-${data.id}-${index}`}
                          actor={actor}
                        />
                      ))
                  : items?.map((data, index) => (
                      <PlaysLine
                        data={data}
                        key={`lays-line-${data.id}-${index}`}
                        actor={actor}
                      />
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
