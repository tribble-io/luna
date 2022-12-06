import React from "react";
import styles from "./card.module.scss";
import Ripple from "../rippleButton";


export default function CreatePlaysCard({ data }) {
  return (
    <>
      <div className={styles.cardContent}>
        <div className={styles.showsImage}>
          <a className={styles.imageLink} href={"show/" + data.id}>
            <img
              src={data.src}
              alt=""
            />
          </a>
        </div>
        <div className={styles.showsCardText}>
          <div className={styles.titleContainer}>
            <span>
              <a href={"show/" + data.id} className={styles.title}>
                {data.title}
              </a>
            </span>
            <span className={styles.rating}>{data.rating}+</span>
          </div>
          <div className={styles.shortDescription}>
            {data.description}
          </div>
          <div className={styles.place}>{data.scene}</div>
          <div className={styles.ticket}>
            <div className={styles.buy}>
              <a className={styles.link}>
                БИЛЕТЫ
                <Ripple duration={1000} color="#fff" />
              </a>
            </div>
            <div className={styles.premiere}>
              {data.isPremiere ? <span>Премьера</span> : <></>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
