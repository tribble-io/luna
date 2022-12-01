import React, {useState} from "react";
import styles from "./filter.module.scss";
import CustomCheckbox from "../../components/customCheckbox";

export default function ShowsFilter(props) {
  const [activeButton, setActiveButtons] = useState("Все сцены");
  const { setEditValue } = props;

  const updateInput = (e) => {
    const value = e.target.value;
    setEditValue((editValue) => ({ ...editValue, title: value }));
  };

  const updateFilter = (e) => {
    const value = e.target.name;
    console.log(value, 'value')
    setActiveButtons(value)
    if (value === "Все сцены") {
      setEditValue((editValue) => ({ ...editValue, scene: "" }));
    } else {
      setEditValue((editValue) => ({ ...editValue, scene: value }));
    }
  };

  function buttonClass(name) {
    return `${styles.buttonFilter} ${activeButton === name ? styles.active : ""}`
  }

  const isActive = (state, name) => {
    setEditValue((editValue) => ({ ...editValue, [name]: state })) ;
  }


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
                      className={buttonClass("Все сцены")}
                      onClick={updateFilter}
                      name="Все сцены"
                    >
                      Все сцены
                    </button>
                    <button
                      className={buttonClass("Большой зал")}
                      onClick={updateFilter}
                      name="Большой зал"
                    >
                      большая сцена
                    </button>
                    <button
                      className={buttonClass("Малый зал")}
                      onClick={updateFilter}
                      name="Малый зал"
                    >
                      малая сцена
                    </button>
                    <button
                      className={buttonClass('Зал "Маленькая Луна"')}
                      onClick={updateFilter}
                      name='Зал "Маленькая Луна"'
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
                        onChange={updateInput}
                      />
                    </div>
                  </div>
                  <div className={styles.filterGroup}>
                    <div className={styles.checkboxFilter}>
                      <CustomCheckbox
                        id="premieres"
                        name="isPremiere"
                        label="Премьеры"
                        isActive={isActive}
                      />
                    </div>
                    <div className={styles.checkboxFilter}>
                      <CustomCheckbox
                        id="kids"
                        name="rating"
                        label="Для детей"
                        isActive={isActive}
                      />
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </section>
      </main>
    </>
  );
}
