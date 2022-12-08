import React from "react";
import styles from "./line.module.scss";

export default function CreatePressLine({ data }) {
  return (
    <div className={styles.pressLine}>
      <a href={data.link} className={styles.lineContent}>
        <div className={styles.lineText}>
          <div className={styles.titleCont}>
            <span className={styles.publisher}>{data.publisher}</span>
            <span className={styles.date}>{data.date}</span>
          </div>
          <div className={styles.title}>{data.title}</div>
        </div>
        <div className={styles.arrow}>
          <span className={styles.arrowRead}>Читать</span>
          <img src="/img/newsRarr.png" alt="Подробнее" title="Подробнее" />
        </div>
      </a>
    </div>
  );
}
