import React, { useState } from "react";
import styles from "./checkbox.module.scss";

export default function CustomCheckbox({ id, name, label }) {
  const [isChecked, setIsChecked] = useState(false);
  function spanClass() {
    return isChecked
      ? `${styles.checkbox} ${styles.checkboxActive}`
      : `${styles.checkbox}`;
  }

  return (
    <div className={styles.customCheckbox}>
      <input
        type="checkbox"
        id={id}
        name={name}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
        className={styles.checkboxInput}
      />
      <label htmlFor={id}>
        <svg
          className={spanClass()}
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={isChecked ? "#fff" : "none"}
          />
        </svg>
        {label}
      </label>
    </div>
  );
}
