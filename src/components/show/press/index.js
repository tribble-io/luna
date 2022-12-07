import React from "react";
import styles from "./press.module.scss";
import CreatePressLIne from "../../createElement/pressLine";

export function Press({ press }) {
  return (
    <section id="press">
      <div className={styles.wrapper}>
        <div className={styles.pressContent}>
          <h2>упоминания в прессе</h2>
          <div className={styles.pressGrid}>
            {press.map((item, key) => (
              <CreatePressLIne data={item} key={key} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
