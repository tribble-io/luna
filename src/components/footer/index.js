import React from 'react'
import styles from './footer.module.scss'

import { FooterLinks, FooterCopyright } from '../footerLinks'

const social = ['tg_logo', 'vk_logo', 'rutube_logo']
const links = [
  'https://t.me/lunatheatre',
  'https://vk.com/teatr_luny',
  'https://rutube.ru/channel/26047198/',
]

export default function Footer() {
  return (
    <>
      <footer>
        <div className={styles.wrapper}>
          <div className={styles.footerInfo}>
            <div className={styles.cahBox}>
              <h2>Касса</h2>
              <a className={styles.cashBoxPhone} href='tel:84959531317'>
                +7 (495) 953-13-17
              </a>
              <p className={styles.schedule}>
                Понедельник–Воскресенье 12:00– 19:30 <br /> Перерыв 15:00–16.00
              </p>
              <p className={styles.scheduleMob}>
                Пн–Вс 12:00– 19:30 <br /> Перерыв 15:00–16.00
              </p>
            </div>
            <div className={styles.socialLinksList}>
              <h2>Мы в соцсетях</h2>
              <div className={styles.socialLinksBlock}>
                {social.map((filename, i) => (
                  <a key={i} href={links[i]} className={styles.socialLink}>
                    <img src={`/img/${filename}.png`} alt={filename} />
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.footerLogoBlock}>
              <img
                src='/img/logo.png'
                alt='Театр Луны'
                className={styles.footerLogo}
              />
              <div className={styles.footerLogoGirl}>
                <img src='/img/girl.png' alt='' />
              </div>
            </div>
          </div>
        </div>
        <FooterLinks />
        <FooterCopyright />
      </footer>
    </>
  )
}
