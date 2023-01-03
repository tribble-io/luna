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
            <Link to='/documents'>документы</Link>
          </div>
          <div className={styles.linkBlock}>
            <p className={styles.linkTitle}>О &#171;Луне&#187; </p>
            <Link to='/history'>о театре</Link>
            <Link to='/troupe'>творческий состав</Link>
            <Link to='/children-studio'>
              детская театральная студия &#171;Маленькая Луна&#187;
            </Link>
            <Link to='/romashka-awards'>премия &#171;Ромашка&#187;</Link>
            <Link to='/scenes'>сцены</Link>
          </div>
          <div className={styles.linkBlock}>
            <p className={styles.linkTitle}></p>
            <a
              href='https://hh.ru/search/vacancy?from=employerPage&employer_id=3977447&hhtmFrom=employer'
              target='_blank'
              rel='noreferrer'
            >
              вакансии
            </a>
            <Link to='/news'>новости</Link>
            <Link to='/press'>пресса</Link>
            <Link to='/contacts'>контакты</Link>
          </div>
          {/* Empty div to correct calculate the spacing between blocks */}
          <div className={styles.linkBlock}></div>
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
