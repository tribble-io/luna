import React from 'react'
import styles from './map.module.scss'

export function ContactsMap() {
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
            ст. метро «Третьяковская»,
            <br /> «Новокузнецкая», «Добрынинская»,
            <br /> «Полянка»
          </p>
        </div>
      </div>
      <div className={styles.mapContent}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d561.6082695610156!2d37.6260493!3d55.7336039!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b1cb353adcb%3A0x8c3c08d5caea685e!2z0KLQtdCw0YLRgCDQm9GD0L3Riw!5e0!3m2!1sru!2s!4v1671129907656!5m2!1sru!2s'
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
