import React from "react";
import styles from "./title.module.scss";

function CreateButton(props) {
  const { scrollTo } = props;
  const buttonArray = [
    { title: "ближайшие постановки", name: "nextShow" },
    { title: "Спектакли на сцене «маленькой луны»", name: "little_moon" },
    { title: "Основатель центра-студии", name: "founder" },
    { title: "Запись в студию", name: "recording" },
    { title: "Фотографии со спектаклей", name: "photo" },
  ];

  return (
    <>
      {buttonArray.map((button, key) => (
        <button
          key={key}
          className={styles.buttonFilter}
          title="Перейти к разделу"
          onClick={scrollTo}
          name={button.name}
        >
          {button.title}
        </button>
      ))}
    </>
  );
}
export default function ChildrenTitle({ setScrollBlock }) {
  const scrollTo = (e) => {
    const value = e.target.name;
    setScrollBlock(value);
  };

  return (
    <>
      <section>
        <div className={styles.wrapper}>
          {
            <div className={styles.childrenContent}>
              <div className={styles.childrenTitle}>
                <h1>
                  Детская театральная студия
                  <br className={styles.tabletHidden} /> "Маленькая Луна"
                </h1>
              </div>
              <div className={styles.linkArea}>
                <div className={styles.linkGroup}>
                  <CreateButton scrollTo={scrollTo} />
                </div>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
}
