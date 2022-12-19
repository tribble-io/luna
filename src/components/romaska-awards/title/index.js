import React from 'react'
import styles from './title.module.scss'
import { TextFormatter } from '../../createElement'

export function Title() {
  return (
    <section id='about'>
      <div className={styles.wrapper}>
        <div className={styles.titleContent}>
          <h1>премия &#171;Ромашка&#187;</h1>
          <div className={styles.titleFlex}>
            <div>
              <p>
                <TextFormatter>
                  В 2000 году в Московском &#171;Театре Луны&#187; под
                  руководством народного артиста России Сергея Проханова в
                  память о народном артисте РСФСР Анатолии Ромашине была
                  учреждена ежегодная внутритеатральная премия
                  &#171;РОМАШКА&#187;.
                </TextFormatter>
              </p>

              <p>
                В конкурсе участвуют премьерные спектакли текущего сезона.
                Лауреаты определяются по итогам зрительского голосования.
              </p>
            </div>

            <div>
              <p>
                Положением о внутритеатральной премии &#171;РОМАШКА&#187;
                учреждены две номинации лауреатов:
              </p>

              <p className={styles.uppercase}>
                ЛУЧШАЯ МУЖСКАЯ РОЛЬ
                <br />
                ЛУЧШАЯ ЖЕНСКАЯ РОЛЬ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
