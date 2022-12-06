import React from "react";
import styles from "./button.module.scss";

export default function CreateButton(props) {
  const { updateFilter, activeButton, buttonArray } = props;

  function buttonClass(name) {
    return `${styles.buttonFilter} ${
      activeButton === name ? styles.active : ""
    }`;
  }

  return (
    <>
      {buttonArray.map((button, i) => (
        <button
          key={i}
          className={buttonClass(button)}
          onClick={updateFilter}
          name={button}
        >
          {button}
        </button>
      ))}
    </>
  );
}
