import React from "react";
import styles from "./titleblock.module.scss";

export function TitleBlock({ data, ticketsLink }) {
  return (
    <section className={styles.titleBlock} id="titleBlock">
      <div
        className={styles.bgShows}
        style={{
          backgroundImage: `url('${data.bgImage}')`,
        }}
      >
        <div className={styles.wrapper}>
          <div className={styles.mainContent}>
            <p className={styles.typeShow}>спектакль</p>
            <p className={styles.title}>{data.title}</p>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.ticket}>
              <div className={styles.buy}>
                <a className={styles.link} href={ticketsLink}>
                  БИЛЕТЫ
                </a>
              </div>
              <div className={styles.rating}>
                {data.rating}+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About({data}) {
  return (
    <section className={styles.about} id="about">
        <div className={styles.wrapper}>
          <div className={styles.aboutContent}>
            <h2>о спектакле</h2>
            <div className={styles.aboutInfo}>
              <div className={styles.intro}>
                <div className={styles.description}>
                  <p>{data.body}</p>
                </div>
                <div className={styles.durationStr}>
                  <p className={styles.title}>Продолжительность</p>
                  <p>{data.durationStr}</p>
                </div>
                <div className={styles.premiereDate}>
                  <p className={styles.title}>Премьера</p>
                  <p>{data.premiereDateStr}</p>
                </div>
                <div className={styles.scene}>
                  <p>{data.scene}</p>
                  <p>{data.rating}+</p>
                </div>
              </div>
              <div className={styles.production}>

              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
