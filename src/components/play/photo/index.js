import React from 'react'
import styles from './photo.module.scss'
import { PhotoSlider } from '../../createElement'

export function ShowPhoto({ photo }) {
  return (
    <>
      <section id='showPhoto'>
        <div className={styles.wrapper}>
          {photo.length > 0 && (
            <div className={styles.photoContent}>
              <div className={styles.photoTitle}>
                <h2>фотографии со спектакля</h2>
              </div>
              <div className={styles.photoBlock}>
                <PhotoSlider items={photo} />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
