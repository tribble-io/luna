import React from 'react'
import { Link } from 'react-router-dom'
import styles from './postercontent.module.scss'

let PosterEl = (props) => {
  if (props.day) {
    let location

    if (props.location === 'Зал "Маленькая Луна"') {
      location = 'Зал «Маленькая Луна»'
    } else {
      location = props.location
    }
    return (
      <div className={styles.posterContent}>
        <div className={styles.posterContent_el}>
          <div className={styles.posterContent_el_content}>
            <div className={styles.posterContent_el_content_2}>
              <div className={styles.data}>
                <div className={styles.dataNumber}>{props.date} /</div>
                <div className={styles.dataTime}>
                  <p>{props.day}</p>
                  <p>{props.time.slice(0, -3)}</p>
                </div>
              </div>
              <div className={styles.name}>
                <div>
                  <Link to={'../play/' + props.id}>{props.title}</Link>
                  <div className={styles.premier}>{props.premier}</div>
                </div>
                <div className={styles.scien}>{location}</div>
              </div>
            </div>
            <div className={styles.restrictionBlock}>
              <div className={styles.restriction}>{props.rating}+</div>
              <a className={styles.buy} href={props.buy}>
                Купить билет
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <div>По фильтра ничего не найдно</div>
  }
}

export default PosterEl
