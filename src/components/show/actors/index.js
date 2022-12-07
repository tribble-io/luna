import React from "react";
import styles from "./actors.module.scss";
import CreateCard from "../../createElement/actorCard";

export function Actors({ roles }) {
  return (
    <section id="actors">
      <div className={styles.wrapper}>
        <div className={styles.actorsContent}>
          <h2>Действующие лица и исполнители</h2>
          <div className={styles.actorsGrid}>
            {roles.map((item, key) => (
              <div className={styles.actorsCard} key={key}>
                <CreateCard data={item} key={item.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
