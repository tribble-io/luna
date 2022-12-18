import React from 'react'
import styles from './laureate.module.scss'
import { CreateActorCard } from '../../createElement'

export function Laureate({ data }) {
  return (
    <section id='laureate'>
      <div className={styles.wrapper}>
        <div className={styles.laureateContent}>
          <h2>Лауреаты премии «Ромашка»</h2>
          <div className={styles.laureateList}>
            {data.map((item) => (
              <div className={styles.laureateBlock} key={item.id}>
                <div className={styles.seasons}>
                  <p>Сезон</p>
                  <p className={styles.yars}>{item.year}</p>
                </div>
                <div className={styles.playsList}>
                  {item.plays.map((plays) => (
                    <div className={styles.plays} key={plays.id}>
                      <p className={styles.playName}>
                        Спектакль &#171;{plays.play}&#187;
                      </p>
                      <div className={styles.actorsList}>
                        {plays.role.map((role) => (
                          <CreateActorCard data={role} key={role.id} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
