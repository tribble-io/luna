import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./filter.module.scss";
import CustomCheckbox from "../../components/customCheckbox";
import ShowsCards from "../../components/showsCards";

export default function ShowsFilter() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apiUrl =
        `http://theatre.restomatik.ru:1337/api/plays` + `?populate=cover`;

      try {
        const itemsResponse = await Promise.all([axios.get(apiUrl)]);

        setItems(itemsResponse[0].data.data);
      } catch (error) {
        alert("Ошибка при запросе данных!");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <main>
        <section>
          <div className={styles.wrapper}>
            {
              <div className={styles.filterContent}>
                <div className={styles.filterTitle}>
                  <h1>спектакли</h1>
                </div>
                <div className={styles.filterArea}>
                  <div className={styles.filterGroup}>
                    <button
                      className={`${styles.buttonFilter} ${styles.active}`}
                      // onClick={updateFilter("all")}
                    >
                      Все сцены
                    </button>
                    <button
                      className={styles.buttonFilter}
                      // onClick={updateFilter("big")}
                    >
                      большая сцена
                    </button>
                    <button
                      className={styles.buttonFilter}
                      //  onClick={updateFilter("small")}
                    >
                      малая сцена
                    </button>
                    <button
                      className={styles.buttonFilter}
                      // onClick={updateFilter("little_moon")}
                    >
                      Зал "Маленькая Луна"
                    </button>
                  </div>
                  <div className={styles.filterGroup}>
                    <div className={styles.inputFilter}>
                      <input
                        type="text"
                        name="nameSearch"
                        id="nameSearch"
                        placeholder="поиск по названию"
                      />
                    </div>
                  </div>
                  <div className={styles.filterGroup}>
                    <div className={styles.checkboxFilter}>
                      <CustomCheckbox
                        id="premieres"
                        name="premieres"
                        label="Премьеры"
                        //onclick={updateFilter("premieres")}
                      />
                    </div>
                    <div className={styles.checkboxFilter}>
                      <CustomCheckbox
                        id="kids"
                        name="kids"
                        label="Для детей"
                        //onclick={updateFilter("kids")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </section>
        <ShowsCards items={items} />
      </main>
    </>
  );
}
