import React, { useState } from "react";
import {useWindowScrollPositions} from "../../utils/usable-function"
import styles from "./header.module.scss";

function Header() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useWindowScrollPositions();
  const opacityEl = window.screen.width > 1200 ? (scrollY >= 200) ? 0 : 1 : 0;
  return (
    <header>
      <div className={styles.header_top}>
        <div className={styles.header_info_gov}>
          <img
            className={styles.header_info_icon}
            src="/img/header-gov.png"
            alt=""
          ></img>
          <div className={styles.header_info_text}>
            Департамент культуры <br /> города Москвы
          </div>
        </div>
        <div className={styles.header_info_blind}>
          <img
            className={styles.header_info_icon}
            src="/img/glasses.png"
            alt=""
            width="40px"
            height="40px"
          ></img>
          <a href="/" className={styles.header_info_text}>
            Версия для <br /> слабовидящих
          </a>
        </div>
        <div className={styles.mobileLogo}>
          <img
            className={styles.mobileLogoImg}
            id={"href"}
            src="/img/logo.png"
            alt=""
          />
        </div>
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuIcon} onClick={() => setOpen(!open)}>
            <div
              className={
                open ? styles.mobileMenuIconOpen : styles.mobileMenuIconClose
              }
            ></div>
          </div>
          <div
            className={
              open
                ? styles.mobileMenuContainerOpen
                : styles.mobileMenuContainerClose
            }
          >
            <ul className={styles.mobileMenuList}>
              <li>
                <a href="http://www.lunatheatre.ru/afisha">Афиша</a>
              </li>
              <li>
                <a href="/plays">Спектакли</a>
              </li>
              <li>
                <a href="http://www.lunatheatre.ru/actors">труппа</a>
              </li>
              <li>
                <a href="http://www.lunatheatre.ru/pages/o-lune">театр</a>
              </li>
              <li>
                <a href="http://www.lunatheatre.ru/news">Новости</a>
              </li>
              <li>
                <a href="http://www.lunatheatre.ru/smi">Пресса</a>
              </li>
              <li>
                <a href="http://www.lunatheatre.ru/pages/kontakty">Контакты</a>
              </li>
            </ul>
          </div>
        </div>
      <div className={styles.logoContainer} 
      style={{
        transition: 'all 0.3s linear',
        opacity: opacityEl
      }}>
          <div className={styles.back_elipse} />
          <img
            className={styles.moon_logo}
            src="/img/moon_logo.png"
            alt=""
          />
          <img
            className={styles.text_logo}
            id={"href"}
            src="/img/text_logo.png"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}
export default Header;
