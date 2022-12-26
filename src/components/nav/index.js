import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useWindowScrollPositions } from '../../assets/utils/usable-function'
import styles from './nav.module.scss'

function Nav() {
  const { scrollY } = useWindowScrollPositions()
  // const opacityEl = window.screen.width > 1200 ? (scrollY >= 200 ? 1 : 0) : 1
  const [isShown, setIsShown] = useState(false)
  const [test, setTest] = useState({
    widthElipse: '241px',
    heightElipse: '241px',
    heightLogo: '241px',
    widthLogo: '227px',
  })

  useEffect(() => {
    if (scrollY !== 0) {
      setTest({
        widthElipse: `${scrollY < 150 ? 248 - scrollY - 10 : 75}px`,
        heightElipse: `${scrollY < 150 ? 241 - scrollY : 67}px`,
        heightLogo: `${scrollY < 150 ? 241 - scrollY : 67}px`,
        widthLogo: `${scrollY < 150 ? 227 - scrollY : 72}px`,
      })
    } else {
      setTest({
        widthElipse: '241px',
        heightElipse: '241px',
        heightLogo: '241px',
        widthLogo: '227px',
      })
    }
  }, [scrollY])
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

        <Link
          to='/'
          className={styles.logoContainer}
          style={{
            transition: 'all 0.3s linear',
            height: `${scrollY < 200 ? 266 - scrollY : 88}px`,
            // width: `${scrollY < 200 ? 440 - scrollY : 120}px`,
            width: '241px',
          }}
        >
          <div
            className={styles.back_elipse}
            style={{
              transition: 'all 0.3s linear',
              height: test.heightElipse,
              width: test.widthElipse,
              right: `${scrollY < 150 ? 0 : 30}%`,

              // width: `${scrollY < 200 ? 440 - scrollY : 120}px`,
            }}
          />
          <img
            className={styles.moon_logo}
            src='/img/moon_logo.png'
            alt=''
            style={{
              transition: 'all 0.3s linear',
              height: test.heightLogo,
              width: test.widthLogo,
              right: `${scrollY < 150 ? -3 : 30}%`,
              // left: `${scrollY < 150 ? 30 : -3}%`,
            }}
          />
          <img
            className={styles.text_logo}
            id={'href'}
            src='/img/text_logo.png'
            alt=''
            style={{
              transition: 'all 0.3s linear',
              height: `${scrollY < 150 ? 175 - scrollY : 52}px`,
              width: `${scrollY < 150 ? 260 - scrollY : 92}px`,
              left: `${scrollY < 150 ? 'auto' : '42px'}`,
              right: `${scrollY < 150 ? 40 : 'auto'}%`,
              bottom: `${scrollY < 150 ? 50 : 10}px`,
            }}
          />
        </Link>
      </div>
    </nav>
  )
}
export default Nav
