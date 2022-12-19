import React from 'react'
import { Link } from 'react-router-dom'
import styles from './links.module.scss'

export function FooterLinks() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.linksList}>
          <div className={styles.linkBlock}>
            <p className={styles.linkTitle}>репертуар</p>
            <Link to='/playbill'>афиша</Link>
            <Link to='/plays'>Спектакли</Link>
          </div>
          <div className={styles.linkBlock}>
            <p className={styles.linkTitle}>зрителям</p>
            <Link to='/'>пользовательское соглашение</Link>
            <Link to='/'>политика конфиденциальности</Link>
            <Link to='/'>документы</Link>
          </div>
          <div className={styles.linkBlock}>
            <p className={styles.linkTitle}>О &#171;Луне&#187; </p>
            <Link to='/'>о театре</Link>
            <Link to='/'>творческий состав</Link>
            <Link to='/'>
              детская театральная студия &#171;Маленькая Луна&#187;
            </Link>
            <Link to='/'>премия &#171;Ромашка&#187;</Link>
            <Link to='/'>сцены</Link>
          </div>
          <div className={styles.linkBlock}>
            <p className={styles.linkTitle}></p>
            <Link to='/'>вакансии</Link>
            <Link to='/'>новости</Link>
            <Link to='/'>пресса</Link>
            <Link to='/'>контакты</Link>
            <Link to='/'>сцены</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export function FooterCopyright() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.copyright}>
          <p>Театр Луны © Все права защищены. 1994–2022</p>
        </div>
      </div>
    </>
  )
}