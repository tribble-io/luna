import React from 'react'
import { API_URL } from '../../../api'

import styles from './TheaterRoles.module.scss'

const RolesCard = ({ content }) => {
  const { id, cover, title, rating, role } = content

  return (
    <div className={styles.roleCard} key={`role-card-${id}`}>
      <img
        src={API_URL + cover?.url}
        alt={title}
        className={styles.roleCardImg}
      />
      <div className={styles.roleCardHeader}>
        <span className={styles.roleCardTitle}>{title}</span>
        <span className={styles.roleCardAge}>{rating}+</span>
      </div>
      <span className={styles.roleCardRole}>Роль: {role}</span>
      <button className={styles.roleCardButton}>БИЛЕТЫ</button>
    </div>
  )
}

export default RolesCard
