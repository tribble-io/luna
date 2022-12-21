import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useWindowScrollPositions } from '../../assets/utils/usable-function'
import styles from './nav.module.scss'

function Nav() {
  const { scrollY } = useWindowScrollPositions()
  const opacityEl = window.screen.width > 1200 ? (scrollY >= 200 ? 1 : 0) : 1
  const [isShown, setIsShown] = useState(false)

  return (
    <nav>
      <div className={styles.wrapper}>
        <ul>
          <li className={styles.menuItem}>
            <Link to='/playbill'>Афиша</Link>
          </li>
          <li className={styles.menuItem}>
            <Link to='/plays'>Спектакли</Link>
          </li>
          <li
            className={styles.menuItem}
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          >
            О театре
            <div
              className={`${isShown ? styles.active : ''} ${
                styles.dropdownMenu
              }`}
            >
              <div className={styles.wrapper}>
                <div className={styles.subMenuBlock}>
                  <Link to='/history'>История театра</Link>
                  <Link to='/troupe'>Творческий состав</Link>
                  <Link to='/children-studio'>
                    Детская театральная студия &#171;Маленькая Луна&#187;
                  </Link>
                </div>
                <div className={styles.subMenuBlock}>
                  <Link to='/romaska-awards'>Премия &#171;Ромашка&#187;</Link>
                  <Link to='/scenes'>Сцены</Link>
                  <Link to='/'>Вакансии</Link>
                  <Link to='/press'>Пресса о театре</Link>
                </div>
              </div>
            </div>
          </li>
          <li className={styles.menuItem}>
            <Link to='/news'>Новости</Link>
          </li>
          <li className={styles.menuItem}>
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
