import React from 'react'
import { Link } from 'react-router-dom'
import styles from './news-line.module.scss'

export function NewsLine(props) {
  let URL = 'http://theatre.restomatik.ru:1337'
  if (props.date) {
    return (
      <Link to={props.location} state={props.items}>
        <div className={styles.posterContent}>
          <div className={styles.posterContent_el}>
            <div className={styles.posterContent_el_content}>
              <div className={styles.posterContent_el_content_2}>
                <div className={styles.data}>
                  <img
                    src={URL + props.cover}
                    alt=''
                    className={styles.cover}
                  />
                </div>
                <div className={styles.name}>
                  <div>
                    <div>{props.title}</div>
                  </div>
                  <div className={styles.scien}>
                    {props.date} {props.month}
                  </div>
                </div>
              </div>
              <div className={styles.restrictionBlock}>
                <div className={styles.buy}>Читать</div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  } else {
    return <div>По фильтра ничего не найдно</div>
  }
}
