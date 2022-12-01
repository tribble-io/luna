import React from "react";
import styles from "./loader.module.scss";

export default function loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
    </div>
  );
}
