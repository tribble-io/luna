import React from 'react'
import styles from './ListMovies.module.scss'

const ListMovies = ({ data, lastItem }) => {
  const { movieTitle, role, year } = data
  return (
    <div
      className={
        lastItem ? `${styles.movie} ${styles.movieLast}` : styles.movie
      }
    >
      <div className={styles.movieText}>
        <span className={styles.movieName}>{movieTitle}</span>
        <span className={styles.movieRole}>{role}</span>
      </div>
      <span className={styles.movieYear}>{year}</span>
    </div>
  )
}

export default ListMovies
