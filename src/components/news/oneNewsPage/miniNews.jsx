import React from 'react'
import { Link } from 'react-router-dom'
import styles from './newsEl.module.scss'

let MiniMews = (props) => {
  debugger
  console.log(props.newState)
  return (
    <Link
      to={props.locationNew}
      state={{ items: props.newState, temsMiniNews: props.items }}
    >
      <div className={styles.miniMewsEl}>
        <div className={styles.data}>{props.data_str}</div>
        <div className={styles.name}>{props.tittle}</div>
      </div>
    </Link>
  )
}

export default MiniMews
