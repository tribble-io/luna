import React from "react";
import styles from "./description.module.scss";
import {Fancybox} from "../../../assets/index";

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
                    Детская театральная студия "Маленькая Луна" работает при
                    "Театре Луны на Малой Ордынке" с 2004 года.
                  </p>
                  <p>
                    За годы существования театральной студии его юные
                    воспитанники наравне со взрослыми актерами выходят на сцену
                    «Театра Луны на Малой Ордынке» в спектаклях «Лиромания»,
                    «Мэри Поппинс - NEXT», «Шантеклер», «Дали и испанская
                    королева из Казани», «Казанова, или Путешествие в
                    «Икосамерон», что вызывает неизменную симпатию зрителей,
                    создавая на сцене особую атмосферу праздника.
                  </p>
                </div>
                <div className={styles.descriptionImg}>
                  <a
                    data-fancybox="description-gallery"
                    href="/img/description-img1.png"
                    data-caption="Спектакль «Фанта-Инфанта»"
                    className={styles.sliderLink}
                  >
                    <img src="/img/description-img1.png" className={styles.sliderImg} />
                  </a>
                  <p className={styles.mobileCaption}>
                    Спектакль «Фанта-Инфанта»
                  </p>
                </div>
              </div>

              <div
                className={`${styles.descriptionBlock} ${styles.smallBlock}`}
              >
                <div className={styles.descriptionImg}>
                  <a
                    data-fancybox="description-gallery"
                    href="/img/description-img2.png"
                    data-caption="Спектакль «Фанта-Инфанта»"
                    className={styles.sliderLink}
                  >
                    <img src="/img/description-img2.png" className={styles.sliderImg} />
                  </a>
                  <p className={styles.mobileCaption}>
                    Спектакль «Фанта-Инфанта»
                  </p>
                </div>
                <div className={styles.descriptionText}>
                  <p>
                    Кроме того на сцене «Театра Луны» идут детские спектакли
                    «Оскар и Розовая Дама», «Ваня в сарафане», «Аничков мост»,
                    «Фанта-инфанта», "Алые паруса", "Анфиса в Виртуале", где
                    дети являются главными героями и исполнителями. Таким
                    образом, уникальность ДТС «Маленькая Луна» заключена в том,
                    что с первых шагов воспитанники студии вовлекаются в
                    театральный процесс.
                  </p>
                </div>
              </div>

              <div
                className={`${styles.descriptionBlock} ${styles.imageBlock}`}
              >
                <div className={styles.descriptionImg}>
                  <a
                    data-fancybox="description-gallery"
                    href="/img/description-img3.png"
                    data-caption="Спектакль «Фанта-Инфанта»"
                    className={styles.sliderLink}
                  >
                    <img src="/img/description-img3.png" className={styles.sliderImg} />
                  </a>
                </div>
              </div>
            </Fancybox>
          </div>
        </div>
      </section>
    </>
  );
}

export function ChildrenStudioTask(props) {
  const {id} = props;
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
                    data-fancybox="description-gallery"
                    href="/img/description-img4.png"
                    data-caption="Спектакль «Фанта-Инфанта»"
                    className={styles.sliderLink}
                  >
                    <img src="/img/description-img4.png" className={styles.sliderImg} />
                  </a>
                <p className={styles.mobileCaption}>
                  Спектакль «Фанта-Инфанта»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function ChildrenRecording(props) {
  const { id } = props;
  return (
    <>
      <section id={id}>
        <div className={styles.wrapper}>
          <div className={styles.recordingContent}>
            <div className={styles.recordingTitle}>
              <h2>Запись в детскую студию</h2>
            </div>
            <div className={styles.recordingBlock}>
              <p className={styles.marginParagraph}>В ДТС "Маленькая Луна" принимаются дети <b>от 6 до 15 лет</b>, прошедшие прослушивание.</p>
              <p>Запись на прослушивание по телефонам</p>
              <p><a href="tel:+74959530209" title="Позвонить по номеру">+7 (495) 953-02-09</a></p>
              <p><a href="tel:+79096418666" title="Позвонить по номеру">+7 (909) 641-86-66</a></p>
              <p><a href="tel:+79255170270" title="Позвонить по номеру">+7 (925) 517-02-70</a></p>
              <p><a href="https://wa.me/79253445485" target="_blank" title="Окрыть в приложении">+7 (925) 344-54-85</a><span className={styles.watsapp}>(WhatsApp)</span></p>
            </div>  
          </div>
        </div>
      </section>
    </>
  );
}
