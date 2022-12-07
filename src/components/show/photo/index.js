import React from "react";
import styles from "./photo.module.scss";
import PhotoSlider from "../../createElement/photoSlider"

export function PressPhoto({ photo }) {

  return (
    <>
      <section id="pressPhoto">
        <div className={styles.wrapper}>
          <div className={styles.photoContent}>
            <div className={styles.photoTitle}>
              <h2>фотографии со спектакля</h2>
            </div>
            <div className={styles.photoBlock}>
              <PhotoSlider items={photo} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
