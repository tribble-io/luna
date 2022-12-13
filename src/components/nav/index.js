import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useWindowScrollPositions } from '../../assets/utils/usable-function'
import styles from './nav.module.scss'

function Nav() {
  const { scrollY } = useWindowScrollPositions()
  const opacityEl = window.screen.width > 1200 ? (scrollY >= 200 ? 1 : 0) : 1

  return (
    <nav>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <Link to='/posters'>Афиша</Link>
          </li>
          <li>
            <Link to='/plays' reloadDocument>
              Спектакли
            </Link>
          </li>
          <li>
            <a href='http://www.lunatheatre.ru/actors'>труппа</a>
          </li>
          <li>
            <Link to='/theatre-history'>театр</Link>
          </li>
          <li>
            <a href='http://www.lunatheatre.ru/news'>Новости</a>
          </li>
          <li>
            <a href='http://www.lunatheatre.ru/smi'>Пресса</a>
          </li>
          <li>
            <a href='http://www.lunatheatre.ru/pages/kontakty'>Контакты</a>
          </li>
          <Outlet />
        </ul>
        <div className={styles.logoContainer}>
          <img
            style={{
              opacity: opacityEl,
            }}
            className={styles.logo_logo}
            id={'href'}
            src='/img/logo.png'
            alt=''
          />
        </div>
      </div>
    </nav>
  )
}
export default Nav
