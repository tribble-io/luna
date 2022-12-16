import React from 'react'
import styles from './sceneBlock.module.scss'
import { Fancybox } from '../../createElement'

export function SceneBlock() {
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
              </Fancybox>
              <div className={styles.sceneScheme}>
                <p>
                  <a href=''>Технический план большой сцены</a>
                </p>
                <p>
                  <a href=''>Схема светового оборудования</a>
                </p>
                <p>
                  <a href=''>Схема звукового оборудования</a>
                </p>
              </div>
            </div>

            <div className={styles.sceneBlock}>
              <h2>малая сцена</h2>
              <Fancybox>
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
              </Fancybox>
              <div className={styles.sceneScheme}>
                <p>
                  <a href=''>ТЕХНИЧЕСКИЙ ПЛАН малой СЦЕНЫ</a>
                </p>
                <p>
                  <a href=''>Схема светового оборудования</a>
                </p>
                <p>
                  <a href=''>Схема звукового оборудования</a>
                </p>
              </div>
            </div>

            <div className={styles.sceneBlock}>
              <h2>сцена «маленькая луна»</h2>
              <div className={styles.sceneScheme}>
                <p>
                  <a href=''>СХЕМА ЗРИТЕЛЬНОГО ЗАЛА</a>
                </p>
                <p>
                  <a href=''>Схема звукового оборудования</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
