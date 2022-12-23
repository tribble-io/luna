import React from 'react'
import styles from './sceneBlock.module.scss'
import { Fancybox } from '../../createElement'
import { IsMobile } from '../../../assets'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import './styles.css'
// import required modules
import { Pagination } from 'swiper'

export function SceneBlock({ docs }) {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.sceneContent}>
          <div className={styles.sceneTitle}>
            <h1>сцены театра</h1>
          </div>
          <div className={styles.sceneList}>
            <div className={styles.sceneBlock}>
              <h2>Большая сцена</h2>
              <Fancybox>
                {IsMobile ? (
                  <div className={styles.sceneSlider}>
                    <Swiper
                      slidesPerView='auto'
                      spaceBetween={20}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      centeredSlides={true}
                      modules={[Pagination]}
                      className='theaterSceneSwiper'
                      style={{
                        '--swiper-pagination-bullet-inactive-color': '#fff',
                        '--swiper-pagination-color': '#8CABFA',
                        '--swiper-pagination-bullet-inactive-opacity': '0.6',
                      }}
                    >
                      <Fancybox>
                        <SwiperSlide>
                          <div className={styles.scenePhotoBig}>
                            <a
                              data-fancybox='scene-gallery'
                              href='/img/scene/big/photo1.png'
                              data-caption='Большая сцена'
                              className={styles.photoLink}
                            >
                              <img
                                src='/img/scene/big/photo1-sm.png'
                                className={styles.photo}
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.scenePhoto}>
                            <a
                              data-fancybox='scene-gallery'
                              href='/img/scene/big/photo2.png'
                              data-caption='Большая сцена'
                              className={styles.photoLink}
                            >
                              <img
                                src='/img/scene/big/photo2-sm.png'
                                className={styles.photo}
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.scenePhoto}>
                            <a
                              data-fancybox='scene-gallery'
                              href='/img/scene/big/photo3.png'
                              data-caption='Большая сцена'
                              className={styles.photoLink}
                            >
                              <img
                                src='/img/scene/big/photo3-sm.png'
                                className={styles.photo}
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.scenePhoto}>
                            <a
                              data-fancybox='scene-gallery'
                              href='/img/scene/big/photo4.png'
                              data-caption='Большая сцена'
                              className={styles.photoLink}
                            >
                              <img
                                src='/img/scene/big/photo4-sm.png'
                                className={styles.photo}
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.scenePhoto}>
                            <a
                              data-fancybox='scene-gallery'
                              href='/img/scene/big/photo5.png'
                              data-caption='Большая сцена'
                              className={styles.photoLink}
                            >
                              <img
                                src='/img/scene/big/photo5-sm.png'
                                className={styles.photo}
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                      </Fancybox>
                    </Swiper>
                  </div>
                ) : (
                  <div className={styles.scenePhotoList}>
                    <div
                      className={`${styles.scenePhoto} ${styles.scenePhotoBig}`}
                    >
                      <a
                        data-fancybox='scene-gallery'
                        href='/img/scene/big/photo1.png'
                        data-caption='Большая сцена'
                        className={styles.photoLink}
                      >
                        <img
                          src='/img/scene/big/photo1-sm.png'
                          className={styles.photo}
                        />
                      </a>
                    </div>
                    <div className={styles.scenePhoto}>
                      <a
                        data-fancybox='scene-gallery'
                        href='/img/scene/big/photo2.png'
                        data-caption='Большая сцена'
                        className={styles.photoLink}
                      >
                        <img
                          src='/img/scene/big/photo2-sm.png'
                          className={styles.photo}
                        />
                      </a>
                    </div>
                    <div className={styles.scenePhoto}>
                      <a
                        data-fancybox='scene-gallery'
                        href='/img/scene/big/photo31.png'
                        data-caption='Большая сцена'
                        className={styles.photoLink}
                      >
                        <img
                          src='/img/scene/big/photo3-sm.png'
                          className={styles.photo}
                        />
                      </a>
                    </div>
                    <div className={styles.scenePhoto}>
                      <a
                        data-fancybox='scene-gallery'
                        href='/img/scene/big/photo4.png'
                        data-caption='Большая сцена'
                        className={styles.photoLink}
                      >
                        <img
                          src='/img/scene/big/photo4-sm.png'
                          className={styles.photo}
                        />
                      </a>
                    </div>
                    <div className={styles.scenePhoto}>
                      <a
                        data-fancybox='scene-gallery'
                        href='/img/scene/big/photo5.png'
                        data-caption='Большая сцена'
                        className={styles.photoLink}
                      >
                        <img
                          src='/img/scene/big/photo5-sm.png'
                          className={styles.photo}
                        />
                      </a>
                    </div>
                  </div>
                )}
              </Fancybox>
              <div className={styles.sceneScheme}>
                <p>
                  <a
                    href={docs.big.techn_plan}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Технический план большой сцены
                  </a>
                </p>
                <p>
                  <a
                    href={docs.big.light_scheme}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Схема светового оборудования
                  </a>
                </p>
                <p>
                  <a
                    href={docs.big.sound_scheme}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Схема звукового оборудования
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.sceneBlock}>
              <h2>малая сцена</h2>
              <Fancybox>
                {IsMobile ? (
                  <div className={styles.sceneSlider}>
                    <Swiper
                      slidesPerView='auto'
                      spaceBetween={20}
                      pagination={{ clickable: true, dynamicBullets: true }}
                      centeredSlides={true}
                      modules={[Pagination]}
                      className='theaterSceneSwiper'
                      style={{
                        '--swiper-pagination-bullet-inactive-color': '#fff',
                        '--swiper-pagination-color': '#8CABFA',
                        '--swiper-pagination-bullet-inactive-opacity': '0.6',
                      }}
                    >
                      <Fancybox>
                        <SwiperSlide>
                          <div className={styles.scenePhotoBig}>
                            <a
                              data-fancybox='scene-gallery'
                              href='/img/scene/small/photo1.png'
                              data-caption='малая сцена'
                              className={styles.photoLink}
                            >
                              <img
                                src='/img/scene/small/photo1-sm.png'
                                className={styles.photo}
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.scenePhoto}>
                            <a
                              data-fancybox='scene-gallery'
                              href='/img/scene/small/photo2.png'
                              data-caption='малая сцена'
                              className={styles.photoLink}
                            >
                              <img
                                src='/img/scene/small/photo2-sm.png'
                                className={styles.photo}
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.scenePhoto}>
                            <a
                              data-fancybox='scene-gallery'
                              href='/img/scene/small/photo3.png'
                              data-caption='малая сцена'
                              className={styles.photoLink}
                            >
                              <img
                                src='/img/scene/small/photo3-sm.png'
                                className={styles.photo}
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.scenePhoto}>
                            <a
                              data-fancybox='scene-gallery'
                              href='/img/scene/small/photo4.png'
                              data-caption='малая сцена'
                              className={styles.photoLink}
                            >
                              <img
                                src='/img/scene/small/photo4-sm.png'
                                className={styles.photo}
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className={styles.scenePhoto}>
                            <a
                              data-fancybox='scene-gallery'
                              href='/img/scene/small/photo5.png'
                              data-caption='малая сцена'
                              className={styles.photoLink}
                            >
                              <img
                                src='/img/scene/small/photo5-sm.png'
                                className={styles.photo}
                              />
                            </a>
                          </div>
                        </SwiperSlide>
                      </Fancybox>
                    </Swiper>
                  </div>
                ) : (
                  <div className={styles.scenePhotoList}>
                    <div
                      className={`${styles.scenePhoto} ${styles.scenePhotoBig}`}
                    >
                      <a
                        data-fancybox='scene-gallery'
                        href='/img/scene/small/photo1.png'
                        data-caption='малая сцена'
                        className={styles.photoLink}
                      >
                        <img
                          src='/img/scene/small/photo1-sm.png'
                          className={styles.photo}
                        />
                      </a>
                    </div>
                    <div className={styles.scenePhoto}>
                      <a
                        data-fancybox='scene-gallery'
                        href='/img/scene/small/photo2.png'
                        data-caption='малая сцена'
                        className={styles.photoLink}
                      >
                        <img
                          src='/img/scene/small/photo2-sm.png'
                          className={styles.photo}
                        />
                      </a>
                    </div>
                    <div className={styles.scenePhoto}>
                      <a
                        data-fancybox='scene-gallery'
                        href='/img/scene/small/photo3.png'
                        data-caption='малая сцена'
                        className={styles.photoLink}
                      >
                        <img
                          src='/img/scene/small/photo3-sm.png'
                          className={styles.photo}
                        />
                      </a>
                    </div>
                    <div className={styles.scenePhoto}>
                      <a
                        data-fancybox='scene-gallery'
                        href='/img/scene/small/photo4.png'
                        data-caption='малая сцена'
                        className={styles.photoLink}
                      >
                        <img
                          src='/img/scene/small/photo4-sm.png'
                          className={styles.photo}
                        />
                      </a>
                    </div>
                    <div className={styles.scenePhoto}>
                      <a
                        data-fancybox='scene-gallery'
                        href='/img/scene/small/photo5.png'
                        data-caption='малая сцена'
                        className={styles.photoLink}
                      >
                        <img
                          src='/img/scene/small/photo5-sm.png'
                          className={styles.photo}
                        />
                      </a>
                    </div>
                  </div>
                )}
              </Fancybox>
              <div className={styles.sceneScheme}>
                <p>
                  <a
                    href={docs.small.techn_plan}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Технический план малой сцены
                  </a>
                </p>
                <p>
                  <a
                    href={docs.small.light_scheme}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Схема светового оборудования
                  </a>
                </p>
                <p>
                  <a
                    href={docs.small.sound_scheme}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Схема звукового оборудования
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.sceneBlock}>
              <h2 className={styles.sceneLunaSmall}>сцена «маленькая луна»</h2>
              <div className={styles.sceneScheme}>
                <p>
                  <a
                    href={docs.luna.techn_plan}
                    target='_blank'
                    rel='noreferrer'
                  >
                    СХЕМА ЗРИТЕЛЬНОГО ЗАЛА
                  </a>
                </p>
                <p>
                  <a
                    href={docs.luna.sound_scheme}
                    target='_blank'
                    rel='noreferrer'
                  >
                    Схема звукового оборудования
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
