import React from 'react'
import { Link } from 'react-router-dom'
import styles from './block.module.scss'

export default function LastBlock() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.group1}>
          <p>
            Государственное бюджетное учреждение культуры города
            <br /> Москвы &quot;Московский театр &quot;Театр Луны&quot; (ГБУК г.
            Москвы
            <br /> &quot;Московский театр &quot;Театр Луны&quot;)
            <br />
            <br />
            115184 г. Москва, ул. Малая Ордынка, д. 31, стр. 1<br />
            <br />
            Детская театральная студия &quot;Маленькая Луна&quot;:
            <br />
            115184 г. Москва, ул. Малая Ордынка, д. 33, стр. 1<br />
            <br />
            Режим работы администрации: понедельник-пятница с 10:30 до 19:00
            <br />
            <br />
            ИНН ??????? / ОГРН ?????????
          </p>
        </div>
        <div className={styles.group2}>
          <div className={styles.text1}>
            <Link to='/plays'>
              <h3>репертуар</h3>
            </Link>
            <Link to='/posters'>
              <p>афиша</p>
            </Link>
            <Link to='/plays'>
              <p>спектакли</p>
            </Link>
            <Link to='/children-studio'>
              <p>маленькая луна</p>
            </Link>
          </div>
          <div className={styles.text2}>
            <a href='http://www.lunatheatre.ru/pages/o-lune'>
              <h3>О «Луне» </h3>
            </a>
            <a href='http://www.lunatheatre.ru/actors'>
              <p>творческий состав</p>
            </a>
            <a href='/posters'>
              <p>афиша</p>
            </a>
            <Link to='/plays'>
              <p>Спектакли</p>
            </Link>
            <Link to='/children-studio'>
              <p>маленькая луна</p>
            </Link>
          </div>
        </div>
        <div className={styles.group3}>
          <p>Театр Луны © Все права защищены. 1994–2022</p>
        </div>
        <div className={styles.group4}>
          <a href='http://www.lunatheatre.ru/pages/polzovatelskoe-soglashenie'>
            Пользовательское <br className={styles.mobileVision} /> соглашение
          </a>
        </div>
      </div>
    </>
  )
}
