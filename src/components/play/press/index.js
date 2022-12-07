import React, { useState, useEffect } from "react";
import styles from "./press.module.scss";
import CreatePressLIne from "../../createElement/pressLine";

export function Press({ press }) {
  const [pressArr, setPressArr] = useState(press)
  const pressLineaAmount = 5;
  const [actPage, setActPage] = useState(1);
  const [allPages, setAllPages] = useState(1);

  const navigation = (e) => {
    const type = e.target.name;

    if (type === 'next' && actPage < allPages) {
      setActPage(actPage + 1)
    } else if (type === 'prev' && actPage > 1) {
      setActPage(actPage - 1);
    }
  }

  useEffect(() => {
    setPressArr(press.slice((pressLineaAmount * actPage) - pressLineaAmount, pressLineaAmount * actPage))
    setAllPages(Math.ceil(press.length / pressLineaAmount))
  }, [actPage])

  return (
    <section id="press">
      <div className={styles.wrapper}>
        <div className={styles.pressContent}>
          <h2>упоминания в прессе</h2>
          <div className={styles.pressGrid}>
            {pressArr.map((item, key) => (
              <CreatePressLIne data={item} key={key} />
            ))}
          </div>
          <div className={styles.pressNavigation}>
            <img
              src="/img/newsLarr.png"
              alt="<"
              className={styles.prev}
              name="prev"
              onClick={navigation}
            />

            <div className={styles.pressFraction}>
              <span>{actPage}</span>
              <span>/</span>
              <span>{allPages}</span>
            </div>

            <img
              src="/img/newsRarr.png"
              alt=">"
              className={styles.next}
              name="next"
              onClick={navigation}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
