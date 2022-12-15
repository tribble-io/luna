import React from 'react'
import styles from './map.module.scss'

export function ContactMap() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.mapText}>
          <p>
            г. Москва, ул. Малая Ордынка, д. 31, стр. 1
            <br />
            115184
          </p>
          <p>
            ст. метро «Третьяковская», «Новокузнецкая», «Добрынинская»,
            «Полянка»
          </p>
        </div>
      </div>
      <div className={styles.mapContent}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d227.75471088498864!2d37.62614250207124!3d55.73360391159961!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b1cb353adcb%3A0x8c3c08d5caea685e!2z0KLQtdCw0YLRgCDQm9GD0L3Riw!5e0!3m2!1sru!2suk!4v1671126864878!5m2!1sru!2suk'
          width='100%'
          height='100%'
          style={{ border: '0', width: '100%', height: '100%' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.openMaps}>
          <a
            href='https://goo.gl/maps/MeSijCRMtRu13zU49'
            target='_blank'
            rel='noreferrer'
          >
            Открыть Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
