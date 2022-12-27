import React from 'react'
import styles from './description.module.scss'
import { Fancybox, TextFormatter } from '../../createElement'

export function ChildrenDescription() {
  return (
    <>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.descriptionContent}>
            <Fancybox>
              <div className={`${styles.descriptionBlock} ${styles.bigBlock}`}>
                <div className={styles.descriptionText}>
                  <p className={styles.marginParagraph}>
                    <TextFormatter>
                      Детская театральная студия &quot;Маленькая Луна&quot;
                      работает при &quot;Театре Луны на Малой Ордынке&quot; с
                      2004 года.
                    </TextFormatter>
                  </p>
                  <p>
                    <TextFormatter>
                      За годы существования театральной студии его юные
                      воспитанники наравне со взрослыми актерами выходят на
                      сцену «Театра Луны на Малой Ордынке» в спектаклях
                      «Лиромания», «Мэри Поппинс - NEXT», «Шантеклер», «Дали и
                      испанская королева из Казани», «Казанова, или Путешествие
                      в «Икосамерон», что вызывает неизменную симпатию зрителей,
                      создавая на сцене особую атмосферу праздника.
                    </TextFormatter>
                  </p>
                </div>
                <div className={styles.descriptionImg}>
                  <a
                    data-fancybox='description-gallery'
                    href='/img/children-studio/description-1.webp'
                    data-caption='Спектакль «Алые паруса»'
                    className={styles.sliderLink}
                  >
                    <img
                      src='/img/children-studio/description-1.webp'
                      className={styles.sliderImg}
                    />
                  </a>
                  <p className={styles.imgCaption}>Спектакль «Алые паруса»</p>
                </div>
              </div>

              <div
                className={`${styles.descriptionBlock} ${styles.smallBlock}`}
              >
                <div className={styles.descriptionImg}>
                  <a
                    data-fancybox='description-gallery'
                    href='/img/children-studio/description-2.webp'
                    data-caption='Спектакль «Оскар и Розовая Дама»'
                    className={styles.sliderLink}
                  >
                    <img
                      src='/img/children-studio/description-2.webp'
                      className={styles.sliderImg}
                    />
                  </a>
                  <p className={styles.imgCaption}>
                    Спектакль «Оскар и Розовая Дама»
                  </p>
                </div>
                <div className={styles.descriptionText}>
                  <p>
                    <TextFormatter>
                      Кроме того на сцене «Театра Луны» идут детские спектакли
                      «Оскар и Розовая Дама», «Ваня в сарафане», «Аничков мост»,
                      «Фанта-инфанта», &quot;Алые паруса&quot;, &quot;Анфиса в
                      Виртуале&quot;, где дети являются главными героями и
                      исполнителями. Таким образом, уникальность ДТС «Маленькая
                      Луна» заключена в том, что с первых шагов воспитанники
                      студии вовлекаются в театральный процесс.
                    </TextFormatter>
                  </p>
                </div>
              </div>

              <div
                className={`${styles.descriptionBlock} ${styles.imageBlock}`}
              >
                <div className={styles.descriptionImg}>
                  <a
                    data-fancybox='description-gallery'
                    href='/img/children-studio/description-3.webp'
                    data-caption='Спектакль «Наш 9 «Б»»'
                    className={styles.sliderLink}
                  >
                    <img
                      src='/img/children-studio/description-3.webp'
                      className={styles.sliderImg}
                    />
                  </a>
                  <p className={styles.imgCaption}>Спектакль «Наш 9 «Б»»</p>
                </div>
              </div>
            </Fancybox>
          </div>
        </div>
      </section>
    </>
  )
}

export function ChildrenStudioTask(props) {
  const { id } = props
  return (
    <>
      <section id={id}>
        <div className={styles.wrapper}>
          <div className={styles.descriptionContent}>
            <div className={`${styles.descriptionBlock} ${styles.lastBlock}`}>
              <div className={styles.descriptionText}>
                <p>
                  <b>Задачами ДТС «Маленькая Луна» являются:</b> общее
                  гуманитарное развитие, повышение культурного уровня детей,
                  грамотности, коммуникабельности, формирование собственной
                  гражданской позиции, раскрытие творческого потенциала,
                  воображения, нестандартного образного мышления, внимания,
                  логики и культуры речи.
                </p>
              </div>
              <div className={styles.descriptionImg}>
                <a
                  data-fancybox='description-gallery'
                  href='/img/children-studio/description-4.webp'
                  data-caption='Спектакль "Фанта-Инфанта"'
                  className={styles.sliderLink}
                >
                  <img
                    src='/img/children-studio/description-4.webp'
                    className={styles.sliderImg}
                  />
                </a>
                <p className={styles.imgCaption}>
                  Спектакль &quot;Фанта-Инфанта&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function ChildrenRecording(props) {
  const { id } = props
  return (
    <>
      <section id={id}>
        <div className={styles.wrapper}>
          <div className={styles.recordingContent}>
            <div className={styles.recordingTitle}>
              <h2>Запись в детскую студию</h2>
            </div>
            <div className={styles.recordingBlock}>
              <p className={styles.marginParagraph}>
                В ДТС &quot;Маленькая Луна&quot; принимаются дети
                <b> от 6 до 15 лет</b>, прошедшие прослушивание.
              </p>
              <p>Запись на прослушивание по телефонам</p>
              <p>
                <a href='tel:+74959530209' title='Позвонить по номеру'>
                  +7 (495) 953-02-09
                </a>
              </p>
              <p>
                <a href='tel:+79096418666' title='Позвонить по номеру'>
                  +7 (909) 641-86-66
                </a>
              </p>
              <p>
                <a href='tel:+79255170270' title='Позвонить по номеру'>
                  +7 (925) 517-02-70
                </a>
              </p>
              <p>
                <a
                  href='https://wa.me/79253445485'
                  target='_blank'
                  title='Окрыть в приложении'
                  rel='noreferrer'
                >
                  +7 (925) 344-54-85
                </a>
                <span className={styles.watsapp}>(WhatsApp)</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
