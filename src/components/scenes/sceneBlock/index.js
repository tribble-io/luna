import React from 'react'
import styles from './sceneBlock.module.scss'
import { PhotoSlider } from '../../createElement'

export function SceneContainer(props) {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.sceneContent}>
          <div className={styles.sceneTitle}>
            <h1>сцены театра</h1>
          </div>
          <div className={styles.sceneList}>{props.children}</div>
        </div>
      </div>
    </section>
  )
}

export function SceneBlock(props) {
  const { items, title } = props
  return (
    <div className={styles.sceneBlock}>
      <h2>{title}</h2>
      {items.photos ? (
        <div className={styles.sceneSlider}>
          <PhotoSlider items={items?.photos} />
        </div>
      ) : (
        <></>
      )}
      {items.docs ? (
        <div className={styles.sceneScheme}>
          {items?.docs.map((doc) => (
            <p key={`scene-doc-item-${doc.id}`}>
              <a href={doc?.url} target='_blank' rel='noreferrer'>
                {doc?.title}
              </a>
            </p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}
