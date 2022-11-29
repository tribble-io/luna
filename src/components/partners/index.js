import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./partners.module.scss";

const SPONSORS = [
  { href: "http://www.lunatheatre.ru/", img: "/img/sponsor/7.png" },
  { href: "http://hrculturemos.ru/bank/", img: "/img/sponsor/5.png" },
  { href: "http://персональныеданные.дети/", img: "/img/sponsor/1.png" },
  {
    href: "https://organizations.kultura.mos.ru/organizations/gbuk_gmoskvy_moskovskii_teatr_teatr_luny.html",
    img: "/img/sponsor/2.png",
  },
  { href: "http://ag.mos.ru/", img: "/img/sponsor/4.jpeg" },
  { href: "https://bus.gov.ru/pub/info-card/137565?activeTab=3", img: "/img/sponsor/3.png" },
  { href: "https://historydepositarium.ru/", img: "/img/sponsor/6.jpeg" },
  { href: "https://grants.culture.ru/helpful_information/", img: "/img/sponsor/8.jpeg" },
  { href: "http://www.lunatheatre.ru/pages/otkrytaya-informaciya", img: "/img/sponsor/9.png" },
  { href: "", img: "" }
];

export default function Partners() {
  return (
    <div className={styles.frame}>
      <div className={styles.header}>НАШИ <br className={styles.mobileVisible} /> ПАРТНЁРЫ</div>
      <Marquee speed={25} gradient={false} pauseOnHover={true}>
        <div className={styles.sponsors}>
          {SPONSORS.map(({ href, img }, i) => (
            <a key={i} href={href}>
              <img src={img} alt="" />
            </a>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
