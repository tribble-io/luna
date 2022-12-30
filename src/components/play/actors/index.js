import React from 'react'
import styles from './actors.module.scss'
import { CreateActorCard } from '../../createElement/actorCard'

export function Actors({ roles, title, troupeGrig = false }) {
  return (
    <section id='actors'>
      <div className={styles.wrapper}>
        {roles.length > 0 && (
          <div className={styles.actorsContent}>
            {title ? <h2>{title}</h2> : ''}
            <div
              className={
                troupeGrig ? styles.actorsGridTroupe : styles.actorsGrid
              }
            >
              {roles?.map((item, key) => (
                <div className={styles.actorsCard} key={key}>
                  <CreateActorCard
                    data={item}
                    key={item.id}
                    troupeGrig={troupeGrig}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
