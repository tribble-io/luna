import React from 'react'
import styles from './scene.module.scss'

import CreatePlaysCard from '../../createElement/playsCard'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'
// import required modules
import { Pagination } from 'swiper'

const API_URL = 'http://theatre.restomatik.ru:1337'

export function ChildrenScene({ id, items }) {
  const screen_width = window.screen.width
  const isMobile = screen_width > 500 ? false : true

  function playCard(item) {
    const playCardData = {
      id: item.id,
      src: API_URL + item.attributes.cover.data.attributes.url,
      title: item.attributes.title,
      rating: item.attributes.rating,
      description: item.attributes.description,
      scene: item.attributes.scene,
      isPremiere: item.attributes.isPremiere,
    }
    return playCardData
  }

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
                  slidesPerView={'auto'}
                  centeredSlides={true}
                  spaceBetween={20}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  modules={[Pagination]}
                  className='sceneSwiper'
                  style={{
                    '--swiper-pagination-bullet-inactive-color': '#fff',
                    '--swiper-pagination-color': '#8CABFA',
                    '--swiper-pagination-bullet-inactive-opacity': '0.6',
                  }}
                >
                  {items.map((item, key) => (
                    <SwiperSlide key={key}>
                      <CreatePlaysCard data={playCard(item)} key={item.id} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div className={styles.sceneGrid}>
                {items.map((item, key) => (
                  <CreatePlaysCard data={playCard(item)} key={key} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
