import React from 'react'
import { useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import styles from './oneNewsPage.module.scss'
import ReactMarkdown from 'react-markdown'
import PosterEl from '../../poster/posterContent/posterEl'
import MiniMews from './miniNews'

import tg from './img/telegram.svg'
import vk from './img/vk.svg'

let OneOageNews = () => {
  const location = useLocation()
  const state = location.state.items
  const itemsMiniNews = location.state.temsMiniNews
  const [mainNewText, setNewText] = useState('')
  const URL = 'http://theatre.restomatik.ru:1337'
  let stateM = {
    miniBlItems: [],
  }
  let text = state.text.toString()

  const itemsNews = itemsMiniNews.map((item) => (
    <MiniMews
      tittle={item.title}
      data_str={item.date_str}
      key={item.id}
      locationNew={'' + item.id}
      items={itemsMiniNews}
      newState={item}
    />
  ))
  debugger

  console.log(itemsNews)

  if (!state) {
    return <Navigate to='' />
  } else {
    return (
      <div>
        <main>
          <section>
            <div className={styles.mainBlockNewsConst}>
              <div className={styles.newsElHeader}>
                <div className={styles.blockTageName}>
                  <div className={styles.tageName}>{state.title}</div>
                  <div className={styles.data}>{state.date_str}</div>
                </div>
                <div className={styles.imgHeader}>
                  <img src={URL + state.cover.url} />
                </div>
              </div>

              <div className={styles.contentBlock}>
                <div className={styles.textContent}>
                  <ReactMarkdown children={text} />
                </div>
                <div className={styles.newsMiniBlock}>
                  <h2>ДРУГИЕ НОВОСТИ</h2>
                  <div className={styles.newsMiniBlock_content}>
                    {itemsNews}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {state.shows[0] ? (
            <div className={styles.spectakles}>
              <div className={styles.mainBlockNewsConst}>
                <h1>ПОСТАНОВКИ</h1>
              </div>
              <section className={styles.posterBlock}>
                {state.shows.map((item) => (
                  <PosterEl
                    day={item.date_str.match(/[^\d]+/g)}
                    key={item.id}
                    date={parseInt(item.date_str.match(/\d+/))}
                    time={item.time}
                    title={item.play.title}
                    location={item.play.scene}
                    rating={item.play.rating}
                    buy={item.tickets_link}
                  />
                ))}
              </section>
            </div>
          ) : (
            <div className={styles.spectakles}></div>
          )}
          <div className={styles.mainBlockNewsConstMGreat}>
            <div className={styles.mainBlockNewsConst}>
              <h2 className={styles.share}>ПОДЕЛИТЬСЯ НОВОСТЬЮ</h2>
              <div className={styles.blockForShare}>
                <div className={styles.blockForShare_el}>
                  <img src={tg} />
                  <p>Рассказать</p>
                </div>
                <div className={styles.blockForShare_el}>
                  <img src={vk} />
                  <p>Рассказать</p>
                </div>
              </div>
            </div>
            <div className={styles.mainBlockNewsConst}>
              <h2 className={styles.share_2}>
                БУДЬТЕ В КУРСЕ АНОНСОВ И НОВОСТЕЙ
              </h2>
              <div className={styles.blockForShare_2}>
                <input
                  className={styles.blockForShare_el_inp}
                  placeholder='Ваш E-mail:'
                ></input>
                <div className={styles.blockForShare_el_but}>
                  <p>Подписаться</p>
                </div>
              </div>
              <div className={styles.checkBlock}>
                <input
                  className={styles.checkbox}
                  type='checkbox'
                  value='checked'
                ></input>
                <label className={styles.label} htmlFor='checked'></label>
                <p>Согласен (-на) на хранение и обработку данных</p>
              </div>
              <div className={styles.blockForShare_el_but_mob}>
                <p>Подписаться</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}
export default OneOageNews
