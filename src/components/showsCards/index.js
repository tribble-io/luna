import React from "react";
import styles from "./shows.module.scss";
import CreateCard from "../../components/createCard";

export default function showsCards({ items }) {
  return (
    <>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.showsContent}>
            {items.map((item, key) => (
              <div className={styles.showsCard} key={key}>
                <CreateCard item={item} key={key} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
