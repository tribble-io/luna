import React from "react";
import styles from "./scene.module.scss";

import ShowsCards from "../../components/showsCards"

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
// import required modules
import { Grid } from "swiper";
import "./styles.css";

export default function ChildrenScene(props) {
  const { id, items } = props;
  console.log(items, "items");

  return (
    <>
      <section id={id}>
        <div className={styles.wrapper}>
          {
            <div className={styles.sceneContent}>
              <div className={styles.sceneTitle}>
                <h2>спектакли на сцене «маленькой луны»</h2>
              </div>
              <div className={styles.sceneSlider}>
                <Swiper
                  slidesPerView={3}
                  grid={{
                    rows: 3,
                  }}
                  spaceBetween={20}
                  modules={[Grid]}
                  className="sceneSwiper swiper-grid-column"
                >
                  {items.map((item, key) => {
                    <SwiperSlide key={key}>
                      <ShowsCards />
                    </SwiperSlide>;
                  })}
                </Swiper>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
}
