import React from 'react'
import styles from './documentEl.module.scss'
import link from './img/link.svg'

let DocumetsEl = (props) => {
  let check =
    'Независимая оценка качества услуг ГБУК г. Москвы "Московского театра "Театр Луны":'
  let URL = 'http://theatre.restomatik.ru:1337'

  console.log(props)
  return (
    <div className={styles.documentBlock}>
      <h2>{props.tage}</h2>

      <div className={styles.elContentDocBlock}>
        {props.state.map((item) => (
          <a
            key={item.title}
            className={styles.itemsDocBlock}
            href={URL + item.file.url}
          >
            <img src={link} />
            {item.title}
          </a>
        ))}
        {props.tage === check ? (
          <a
            className={styles.itemsDocBlock}
            href='https://organizations.kultura.mos.ru/organizations/gbuk_gmoskvy_moskovskii_teatr_teatr_luny.html'
          >
            <img src={link} />
            Независимая оценка качества услуг
          </a>
        ) : (
          ''
        )}
        {props.tage === check ? (
          <a
            className={styles.itemsDocBlock}
            href='https://bus.gov.ru/pub/info-card/137565?activeTab=3'
          >
            <img src={link} />
            Результаты независимой оценки качества услуг
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default DocumetsEl
