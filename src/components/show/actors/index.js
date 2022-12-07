import React from "react";
import styles from "./actors.module.scss";
import CreateLine from "../../createElement/playsLine";

export default function Actors({  }) {
  return (
    <section id="actors">
      <div className={styles.wrapper}>
        <div className={styles.actorsContent}>
          <h2>Действующие лица и исполнители</h2>
          <div className={styles.actorsGrid}>
            
          </div>
        </div>
      </div>
    </section>
  );
}
