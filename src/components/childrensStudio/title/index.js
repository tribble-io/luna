import React from 'react'
import styles from './title.module.scss'
import ScrollIntoView from 'react-scroll-into-view'

function CreateButton({ title }) {
  return (
    <>
      <button className={styles.buttonFilter} title='Перейти к разделу'>
        {title}
      </button>
    </>
  )
}
export default function ChildrenTitle() {
  const buttonArray = [
    { title: 'ближайшие постановки', name: 'nextShow' },
    { title: 'Спектакли на сцене «маленькой луны»', name: 'little_moon' },
    { title: 'Основатель центра-студии', name: 'founder' },
    { title: 'Запись в студию', name: 'recording' },
    { title: 'Фотографии со спектаклей', name: 'photo' },
  ]

  return (
    <>
      <section>
        <div className={styles.wrapper}>
          {
            <div className={styles.childrenContent}>
              <div className={styles.childrenTitle}>
                <h1>
                  Детская театральная студия
                  <br className={styles.tabletHidden} />
                  &#171;Маленькая Луна&#187;
                </h1>
              </div>
              <div className={styles.linkArea}>
                <div className={styles.linkGroup}>
                  {buttonArray.map((button, key) => (
                    <ScrollIntoView selector={`#${button.name}`} key={key}>
                      <CreateButton title={button.title} key={key} />
                    </ScrollIntoView>
                  ))}
                </div>
              </div>
            </div>
          }
        </div>
      </section>
    </>
  )
}
