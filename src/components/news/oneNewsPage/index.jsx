import React from 'react'
// import { useLocation } from 'react-router-dom'
import styles from './oneNewsPage.module.scss'
import ReactMarkdown from 'react-markdown'
import PosterEl from '../../poster/posterContent/posterEl'
import MiniMews from './miniNews'
import { getDateStr } from '../../../assets'

import tg from './img/telegram.svg'
import vk from './img/vk.svg'

/* eslint-disable */

class OneOageNews extends React.Component {
  constructor() {
    super()
    // const locations = useLocation()
    // const itemsMiniNews = location.state.temsMiniNews
    // const URL = 'http://theatre.restomatik.ru:1337'
    // let textLoc = state.text.toString()

    // items: this.locations.state.items,
    // itemsMiniNews: this.locations.state.temsMiniNews,
    // console.log(stateLoc)

    // if(location.state) {
    //   this.state = {
    //     stateLoc: locations.state.items,
    //     items: this.locations.state.items,
    //     itemsMiniNews: this.locations.state.temsMiniNews,
    //   }
    // }
    this.state = {
      items: {},
      itemsMiniNews: [],
      URL: 'http://theatre.restomatik.ru:1337',
      id_article: window.location.href.split('/').pop(),
      checked: false,
    }
  }

  componentDidMount() {
    if (!location.state) {
      let state = { item: [], itemsMiniNews: [] }
      fetch(
        `  http://theatre.restomatik.ru:1337/api/articles${'/' + this.state.id_article
        }?sort[0]=createdAt:desc&populate=cover,shows.play
          `
      )
        .then((res) => res.json())
        .then((result) =>
          this.setState({
            items: result.data,
            id_article: window.location.href.split('/').pop(),
          })
        )
      console.log(state['item'])
      fetch(
        `http://theatre.restomatik.ru:1337/api/articles?sort[0]=createdAt:desc&populate=cover,shows.play&pagination[pageSize]=4`
      )
        .then((res) => res.json())
        .then((result) =>
          this.setState({
            itemsMiniNews: result.data,
          })
        )
    } else {
      this.setState({
        items: this.props.locations.state.items,
        itemsMiniNews: this.props.locations.state.temsMiniNews,
      })
    }
  }

  chageCheck() {
    this.setState({
      checked: !this.state.checked,
    })
  }

  render() {
    if (this.state.itemsMiniNews.length != 0) {
      const itemsNews = this.state.itemsMiniNews.map((item) => (
        <MiniMews
          title={item.title}
          date={getDateStr(item.createdAt).date}
          month={getDateStr(item.createdAt).month_name_case}
          key={item.id}
          locationNew={'' + item.id}
          items={this.state.itemsMiniNews}
          newState={item}
        />
      ))
      console.log(itemsNews)
      return (
        <div>
          <main>
            <section>
              <div className={styles.mainBlockNewsConst}>
                <div className={styles.newsElHeader}>
                  <div className={styles.blockTageName}>
                    <div className={styles.tageName}>
                      {this.state.items.title}
                    </div>
                    <div className={styles.data}>
                      {getDateStr(this.state.items.createdAt).date}{' '}
                      {getDateStr(this.state.items.createdAt).month_name_case}
                    </div>
                  </div>
                  <div className={styles.imgHeader}>
                    <img src={this.state.URL + this.state.items.cover.url} />
                  </div>
                </div>

                <div className={styles.contentBlock}>
                  <div className={styles.textContent}>
                    <ReactMarkdown children={this.state.items.text} />
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
            {this.state.items.shows[0] ? (
              <div className={styles.spectakles}>
                <div className={styles.mainBlockNewsConst}>
                  <h1>ПОСТАНОВКИ</h1>
                </div>
                <section className={styles.posterBlock}>
                  {this.state.items.shows.map((item) => (
                    <PosterEl
                      day={getDateStr(item.date).month_name_case}
                      key={item.id}
                      date={getDateStr(item.date).date}
                      time={item.time}
                      title={item.play.title}
                      location={item.play.scene.name}
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
                  <label
                    onClick={() => {
                      this.chageCheck()
                    }}
                    className={
                      this.state.checked ? styles.labelAct : styles.label
                    }
                    htmlFor='checked'
                  ></label>
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
    } else {
      return <div className={styles.zagl}></div>
    }
  }
}
export default OneOageNews
