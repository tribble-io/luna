import React from 'react'
import styles from './video.module.scss'

export function VideoBlock({ link }) {
  return (
    <>
      <section id='videoBlock'>
        {link ? (
          <div className={styles.wrapper}>
            <div className={styles.videoContent}>
              <h2>Премьера в театре</h2>
              <div className={styles.videoPadding}>
                <div className={styles.videoContainer}>
                  <div className={styles.video}>
                    <iframe
                      width='100%'
                      height='100%'
                      src={link}
                      title='YouTube video player'
                      frameBorder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </section>
    </>
  )
}
