import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to='/playbill'>Афиша</Link>
          </li>
          <li>
            <Link to='/plays'>Спектакли</Link>
          </li>
          <li>
            <Link to='/troupe'>Труппа</Link>
          </li>
          <li>
            <Link to='/history'>театр</Link>
          </li>
          <li>
            <Link to='/news'>Новости</Link>
          </li>
          <li>
            <Link to='/press'>Пресса</Link>
          </li>
          <li>
            <Link to='/contacts'>Контакты</Link>
          </li>
        </ul>
        <Link className={styles.logoContainer} to='/'>
          <img
            style={{
              opacity: opacityEl,
            }}
            className={styles.logo_logo}
            id={'href'}
            src='/img/logo.png'
            alt=''
          />
        </Link>
      </div>
    </nav>
  )
}
export default Nav
