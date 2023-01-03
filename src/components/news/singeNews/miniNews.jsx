import React from 'react'
import { Link } from 'react-router-dom'
import styles from './newsEl.module.scss'

let MiniNews = (props) => {
  return (
    <Link to={props.locationNew} state={props.newState}>
      <div className={styles.MiniNewsEl}>
        <div className={styles.data}>
          {props.date} {props.month}
        </div>
        <div className={styles.name}>{props.title}</div>
      </div>
    </Link>
  )
}
export default MiniNews
