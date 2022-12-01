import React from "react";
import styles from "./description.module.scss";

export default function ChildrenTitle() {
  return (
    <>
      <section>
        <div className={styles.wrapper}>
          {
            <div className={styles.descriptionContent}>
              <div className={`${styles.descriptionBlock} ${styles.bigBlock}`}>
                <div className={styles.descriptionText}>
                  <p className={styles.marginParagraph}>Детская театральная студия "Маленькая Луна" работает при "Театре Луны на Малой Ордынке" с 2004 года.</p>
                  <p>За годы существования театральной студии его юные воспитанники наравне со взрослыми актерами выходят на сцену «Театра Луны на Малой Ордынке» в спектаклях «Лиромания», «Мэри Поппинс - NEXT», «Шантеклер», «Дали и испанская королева из Казани», «Казанова, или Путешествие в «Икосамерон», что вызывает неизменную симпатию зрителей, создавая на сцене особую атмосферу праздника.</p>
                </div>
                <div className={styles.descriptionImg}>
                  <img
                  src="/img/description-img1.png"
                  />
                </div>
              </div>

              <div className={`${styles.descriptionBlock} ${styles.smallBlock}`}>
                <div className={styles.descriptionImg}>
                  <img
                  src="/img/description-img2.png" />
                </div>
                <div className={styles.descriptionText}>
                  <p>Кроме того на сцене «Театра Луны» идут детские спектакли «Оскар и Розовая Дама», «Ваня в сарафане», «Аничков мост», «Фанта-инфанта», "Алые паруса", "Анфиса в Виртуале", где дети являются главными героями и исполнителями. Таким образом, уникальность ДТС «Маленькая Луна» заключена в том, что с первых шагов воспитанники студии вовлекаются в театральный процесс.</p>
                </div>
              </div>
              
              <div className={`${styles.descriptionBlock} ${styles.lastBlock}`}>
                <div className={styles.descriptionImg}>
                  <img
                  src="/img/description-img3.png" />
                </div>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
}
