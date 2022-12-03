import React, { useRef } from "react";
import styles from "./photo.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "./styles.css";
// import required modules
import { Grid, Navigation } from "swiper";

import Fancybox from "../../utils/fancybox";

const apiUrl = "http://theatre.restomatik.ru:1337";

export default function ChildrenPhoto(props) {
  const { id, items } = props;
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <section id={id}>
        <div className={styles.wrapper}>
          <div className={styles.photoContent}>
            <div className={styles.photoTitle}>
              <h2>Фотографии со спектаклей</h2>
            </div>
            <div className={styles.photoBlock}>
              <Swiper
                slidesPerView={3}
                grid={{
                  rows: 2,
                }}
                spaceBetween={20}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                modules={[Grid, Navigation]}
                className="photoSwiper"
              >
                <Fancybox>
                  {items.map((item, key) => (
                    <SwiperSlide key={key}>
                      <a
                        data-fancybox="gallery"
                        href={apiUrl + item.media.data.attributes.url}
                        data-caption={item.caption}
                      >
                        <img
                          alt=""
                          src={
                            apiUrl +
                            item.media.data.attributes.formats.small.url
                          }
                        />
                      </a>
                    </SwiperSlide>
                  ))}
                </Fancybox>
              </Swiper>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
