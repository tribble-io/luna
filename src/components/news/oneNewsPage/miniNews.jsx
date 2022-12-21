import React from 'react'
import { Link } from 'react-router-dom'
import styles from './newsEl.module.scss'

let MiniMews = (props) => {
  return (
    <Link
      to={props.locationNew}
      state={{ items: props.newState, temsMiniNews: props.items }}
    >
      <div className={styles.miniMewsEl}>
        <div className={styles.data}>
          {props.date} {props.month}
        </div>
        <div className={styles.name}>{props.title}</div>
      </div>
    </Link>
  )
}
export default MiniMews
