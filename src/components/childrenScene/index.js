import React from "react";
import styles from "./scene.module.scss";

import CreateCard from "../../components/createCard";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

export default function ChildrenScene({ id, items }) {
  // Number of slides per line
  const slidesPerView = 3;
  // Number of lines
  const rows = Math.ceil(items.length / slidesPerView);

  const screen_width = window.screen.width;
  const isMobile = screen_width > 500 ? false : true;

  return (
    <>
      <section id={id}>
        <div className={styles.wrapper}>
          <div className={styles.sceneContent}>
            <div className={styles.sceneTitle}>
              <h2>спектакли на сцене «маленькой луны»</h2>
            </div>
            {isMobile ? (
              <div className={styles.sceneSlider}>
                <Swiper
                  slidesPerView={1}
                  centeredSlides={true}
                  spaceBetween={20}
                  className="sceneSwiper"
                >
                  {items.map((item, key) => (
                    <SwiperSlide key={key}>
                      <CreateCard item={item} key={item.id} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div className={styles.sceneGrid}>
                {items.map((item, key) => (
                  <CreateCard item={item} key={key} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
