import React from "react";

import styles from "./partners.module.scss";

const SPONSORS = [
  { href: "http://www.lunatheatre.ru/", img: "/img/sponsor/7.png" },
  { href: "http://hrculturemos.ru/bank/", img: "/img/sponsor/5.png" },
  { href: "http://персональныеданные.дети/", img: "/img/sponsor/1.png" },
  {
    href: "https://organizations.kultura.mos.ru/organizations/gbuk_gmoskvy_moskovskii_teatr_teatr_luny.html",
    img: "/img/sponsor/2.png",
  },
  { href: "http://ag.mos.ru/", img: "/img/sponsor/4.png" },
];

export default function Partners() {
  return (
    <div className={styles.frame}>
      <div className={styles.header}>НАШИ ПАРТНЁРЫ</div>
      <div className={styles.sponsors}>
        {SPONSORS.map(({ href, img }, i) => (
          <a key={i} href={href}>
            <img src={img} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}
