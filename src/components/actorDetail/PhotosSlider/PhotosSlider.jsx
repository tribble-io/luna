import React from 'react'
import styles from './PhotosSlider.module.scss'

import { PhotoSlider } from '../../createElement'

export function PhotosSlider(props) {
  const { id, items } = props

  return (
    <>
      <section id={id}>
        <div className={styles.wrapper}>
          <div className={styles.photoContent}>
            <div className={styles.photoTitle}>
              <h2>Фотографии со спектаклей</h2>
            </div>
            <div className={styles.photoBlock}>
              <PhotoSlider items={items} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
