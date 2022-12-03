import React from "react";
import styles from "./recording.module.scss";

export default function ChildrenRecording(props) {
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
