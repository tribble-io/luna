import React from "react";

import styles from "./header.module.scss";

function Header() {
  return (
    <header>
      <div className={styles.header_top}>
       {/* <div className={styles.phone_blind}>
          <a href="tel:+74959531317" className={styles.phone}>
            +7 (495) 953-13-17
          </a>
          <a href="#" className={styles.blind}>
            Версия для слабовидящих
          </a>
        </div> */}
        <div className={styles.header_info_gov}>
          <img className={styles.header_info_icon}
          src="/img/header-gov.png"
          alt=""
          width="44px"
          height="52px">
          </img>
          <div className={styles.header_info_text}>
            Департамент культуры <br/> города Москвы
          </div>
        </div>
        <div className={styles.header_info_blind}>
          <img className={styles.header_info_icon}
          src="/img/glasses.png"
          alt=""
          width="40px"
          height="40px">
          </img>
          <a href="#" className={styles.header_info_text}>
            Версия для <br/> слабовидящих
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
