import React from 'react'
import { Link } from 'react-router-dom'
import imgLunaMobile from './img/back-not-found-mobile.jpg'

import styles from './PageNotFound.module.scss'

const PageNotFound = () => {
  return (
    <section className={styles.containerNotFound}>
      <div className={styles.notFound}>
        <h2>{`упс... ${'  '} ошибка`}</h2>
        <p>
          К сожалению, запрашиваемая страница не найдена. Возможно, Вы перешли
          по ссылке, в которой была допущена ошибка, или ресурс был удален.
          Попробуйте перейти на{' '}
          <Link className={styles.link} to={'/'}>
            главную страницу
          </Link>
        </p>
        <img src={imgLunaMobile} className={styles.imageLuna} alt={'Луна'} />
      </div>
    </section>
  )
}

export default PageNotFound
