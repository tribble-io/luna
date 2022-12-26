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
          К сожалению, запрашиваемая страница не найдена. Возможно, Вы перешли
          по ссылке, в которой была допущена ошибка, или ресурс был удален.
          <br />
          <br />
          Попробуйте перейти на <br />
          <Link className={styles.link} to={'/'}>
            главную
          </Link>{' '}
          или{' '}
          <Link className={styles.link} onClick={() => handelClickBack()}>
            предыдущую страницу
          </Link>
          .{' '}
        </p>
        <img src={imgLunaMobile} className={styles.imageLuna} alt={'Луна'} />
      </div>
    </section>
  )
}

export default PageNotFound
