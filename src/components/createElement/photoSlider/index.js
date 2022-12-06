import React, { useRef } from "react";
import styles from "./photo-slider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "./styles.css";
// import required modules
import { Grid, Navigation, Pagination } from "swiper";

import Fancybox from "../../../assets/utils/fancybox";

const apiUrl = "http://theatre.restomatik.ru:1337";
const screen_width = window.screen.width;

export default function ChildrenPhoto(props) {
  const { items } = props;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  // slider parameters for mobile
  const rows = screen_width > 500 ? 2 : 1;
  const slidesPerView = screen_width > 500 ? 3 : "auto";
  const navigation =
    screen_width > 500
      ? { prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current }
      : false;
  const pagination =
    screen_width > 500 ? false : { clickable: true, dynamicBullets: true };
  const centeredSlides = screen_width > 500 ? false : true;
  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        grid={{
          rows: rows,
        }}
        spaceBetween={20}
        navigation={navigation}
        pagination={pagination}
        modules={[Grid, Navigation, Pagination]}
        className="photoSwiper"
        style={{
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-color": "#8CABFA",
          "--swiper-pagination-bullet-inactive-opacity": "0.6",
        }}
      >
        <Fancybox>
          {items.map((item, key) => (
            <SwiperSlide key={key}>
              <a
                data-fancybox="gallery"
                href={apiUrl + item.media.data.attributes.url}
                data-caption={item.caption}
                className={styles.sliderLink}
              >
                <img
                  className={styles.sliderImg}
                  alt=""
                  src={apiUrl + item.media.data.attributes.formats.small.url}
                />
              </a>
            </SwiperSlide>
          ))}
        </Fancybox>
        <div className={styles.sliderNavigation}>
          <img
            src="/img/newsLarr.png"
            alt="<"
            className={styles.prev}
            ref={navigationPrevRef}
          />

          <img
            src="/img/newsRarr.png"
            alt=">"
            className={styles.next}
            ref={navigationNextRef}
          />
        </div>
      </Swiper>
    </>
  );
}
