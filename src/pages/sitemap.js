import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../components/sitemap/sitemap.module.scss'

// контакты
// документы
// пользовательское соглашение
// политика конФиденциальности

export function SiteMap() {
  return (
    <div className={styles.mainBlock}>
      <h1>Карта сайта</h1>
      <ul className='sitemap'>
        <li>
          <Link to='/'>Главная</Link>
        </li>
        <li>
          <Link to='/playbill'>Афиша</Link>
        </li>
        <li>
          <Link to='/plays'>Спектакли</Link>
        </li>
        <li>
          <Link to='/history'>История театра</Link>
        </li>
        <li>
          <Link to='/troupe'>Творческий состав</Link>
        </li>
        <li>
          <Link to='/children-studio'>
            Детская театральная студия «Маленькая Луна»
          </Link>
        </li>
        <li>
          <Link to='/romashka-awards'>Премия «Ромашка»</Link>
        </li>
        <li>
          <Link to='/scenes'>Сцены</Link>
        </li>
        <li>
          <Link to='/press'>Пресса о театре</Link>
        </li>
        <li>
          <Link to='/news'>Новости</Link>
        </li>
        <li>
          <Link to='/partners'>Партнёры</Link>
        </li>
        <li>
          <Link to='/contacts'>Контакты</Link>
        </li>
        <li>
          <Link to='/documents'>Документы</Link>
        </li>
        <li>
          <Link to='/pages/polzovatelskoe-soglashenie'>
            Пользовательское соглашение
          </Link>
        </li>
        <li>
          <Link to='/pages/politika-konfidencialnosti'>
            Политика конфиденциальности
          </Link>
        </li>
      </ul>
    </div>
  )
}
