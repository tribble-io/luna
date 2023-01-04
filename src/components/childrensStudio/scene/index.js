import React from 'react'
import styles from './scene.module.scss'
import { IsMobile } from '../../../assets'
import { CreatePlaysCard } from '../../createElement'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'
// import required modules
import { Pagination } from 'swiper'

export function ChildrenScene(props) {
  const { id, items, popupOpen } = props

  return (
    <>
      <section id={id}>
        <div className={styles.wrapper}>
          <div className={styles.sceneContent}>
            <div className={styles.sceneTitle}>
              <h2>спектакли на сцене «маленькой луны»</h2>
            </div>
            {IsMobile ? (
              <div className={styles.sceneSlider}>
                <Swiper
                  slidesPerView={'auto'}
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
                  {items.map((data, key) => (
                    <SwiperSlide key={key}>
                      <CreatePlaysCard
                        data={data}
                        key={data.id}
                        popupOpen={popupOpen}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            ) : (
              <div className={styles.sceneGrid}>
                {items.map((data) => (
                  <CreatePlaysCard
                    data={data}
                    key={data.id}
                    popupOpen={popupOpen}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
