import React from 'react'
import { Link } from 'react-router-dom'
import styles from './news-line.module.scss'
import { API_URL as URL } from '../../../api'

export function NewsLine(props) {
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
