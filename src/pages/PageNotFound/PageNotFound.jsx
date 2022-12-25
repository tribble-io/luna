import React from 'react'
import { Link } from 'react-router-dom'
import imgLunaMobile from './img/back-not-found-mobile.jpg'

import styles from './PageNotFound.module.scss'

const PageNotFound = () => {
  const handelClickBack = () => {
    history.back()
  }
  return (
    <section className={styles.containerNotFound}>
      <div className={styles.notFound}>
        <h2>{`упс... ${'  '} ошибка`}</h2>
        <p>
          К сожалению, страница, которую Вы пытаетесь найти, удалена или
          недоступна. Мы скоро разберемся с этой проблемой, а пока Вы можете
          вернуться на{' '}
          <Link className={styles.link} to={'/'}>
            главную
          </Link>{' '}
          или на{' '}
          <span className={styles.linkBack} onClick={() => handelClickBack()}>
            предыдущую страницу.
          </span>{' '}
        </p>
        <img src={imgLunaMobile} className={styles.imageLuna} alt={'Луна'} />
      </div>
    </section>
  )
}

export default PageNotFound
