import React from 'react'
import styles from './actors.module.scss'
import CreateCard from '../../createElement/actorCard'

export function Actors({ roles, title }) {
  return (
    <section id='actors'>
      <div className={styles.wrapper}>
        {roles.length > 0 && (
          <div className={styles.actorsContent}>
            {title ? <h2>{title}</h2> : null}
            <div className={styles.actorsGrid}>
              {roles?.map((item, key) => (
                <div className={styles.actorsCard} key={key}>
                  <CreateCard data={item} key={item.id} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
