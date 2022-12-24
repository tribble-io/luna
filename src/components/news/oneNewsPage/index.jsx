import React from 'react'
import styles from './oneNewsPage.module.scss'
import ReactMarkdown from 'react-markdown'
import PosterEl from '../../poster/posterContent/posterEl'
import MiniMews from './miniNews'

import tg from './img/telegram.svg'
import vk from './img/vk.svg'
import { getDateStr } from '../../../assets'

class OneOageNews extends React.Component {
  constructor() {
    super()

    this.state = {
      items: {},
      itemsMiniNews: [],
      URL: 'http://theatre.restomatik.ru:1337',
      id_article: window.location.href.split('/').pop(),
      checked: false,
      el_id: false,
      mail: '',
      messSubs: '',
      messSubsList: [
        'Пожалуйста, проверьте правильность вашего e-mail.',
        'Вы успешно подписаны.',
        'Подтвердите согласие.',
      ],
    }
  }

  componentDidUpdate() {
    if (this.state.id_article != window.location.href.split('/').pop()) {
      this.setState({
        id_article: window.location.href.split('/').pop(),
        items: this.props.stateNew,
      })
      fetch(
        `http://theatre.restomatik.ru:1337/api/articles?sort[0]=createdAt:desc&populate=cover,shows.play&pagination[pageSize]=4`
      )
        .then((res) => res.json())
        .then((result) =>
          this.setState({
            itemsMiniNews: result.data,
          })
        )
    }
  }

  componentDidMount() {
    if (!this.props.stateNew) {
      fetch(
        `  http://theatre.restomatik.ru:1337/api/articles${
          '/' + this.state.id_article
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
        items: this.props.stateNew,
      })
      fetch(
        `http://theatre.restomatik.ru:1337/api/articles?sort[0]=createdAt:desc&populate=cover,shows.play&pagination[pageSize]=4`
      )
        .then((res) => res.json())
        .then((result) =>
          this.setState({
            itemsMiniNews: result.data,
          })
        )
    }
  }

  changeMail(value) {
    this.setState({
      mail: value,
    })
    console.log(this.state.mail)
  }

  subscribe() {
    if (!this.state.checked) {
      this.setState({
        messSubs: this.state.messSubsList[2],
      })
    }
    if (this.state.checked) {
      fetch('http://theatre.restomatik.ru:1337/api/subscribers', {
        method: 'POST',
        body: JSON.stringify({
          data: {
            email: this.state.mail,
          },
        }),
        headers: {
          'content-type': 'application/json',
        },
      }).then((response) => {
        if (response.ok) {
          this.setState({
            messSubs: this.state.messSubsList[1],
            mail: '',
          })
          setTimeout(() => {
            this.setState({
              messSubs: '',
              checked: !this.state.checked,
            })
          }, 3000)
        } else {
          this.setState({
            messSubs: this.state.messSubsList[0],
          })
        }
      })
    }
  }

  chageCheck() {
    this.setState({
      checked: !this.state.checked,
      messSubs: '',
    })
  }

  updateClass(a) {
    this.setState({
      items: a,
    })
  }

  render() {
    if (this.state.itemsMiniNews.length != 0) {
      try {
        const itemsNews = this.state.itemsMiniNews.map((item) => (
          <MiniMews
            title={item.title}
            date={getDateStr(item.publishedAt).date}
            month={getDateStr(item.publishedAt).month_name_case}
            key={item.id}
            locationNew={'' + item.id}
            items={this.state.itemsMiniNews}
            newState={item}
          />
        ))
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
                        {getDateStr(this.state.items.publishedAt).date}{' '}
                        {
                          getDateStr(this.state.items.publishedAt)
                            .month_name_case
                        }
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
                    <a
                      className={styles.blockForShare_el}
                      href={
                        'https://t.me/share/url?url=' + window.location.href
                      }
                    >
                      <img src={tg} />
                      <p>Рассказать</p>
                    </a>
                    <a
                      className={styles.blockForShare_el}
                      href={
                        'https://vk.com/share.php?url=' + window.location.href
                      }
                    >
                      <img src={vk} />
                      <p>Рассказать</p>
                    </a>
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
                      value={this.state.mail}
                      onChange={(e) => {
                        this.changeMail(e.target.value)
                      }}
                    ></input>
                    <div
                      className={styles.blockForShare_el_but}
                      onClick={() => {
                        this.subscribe()
                      }}
                    >
                      <p>Подписаться</p>
                    </div>
                  </div>
                  <div
                    className={
                      this.state.messSubs === this.state.messSubsList[1]
                        ? styles.subsWarnGood
                        : styles.subsWarn
                    }
                  >
                    {this.state.messSubs}
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
                  <div
                    className={styles.blockForShare_el_but_mob}
                    onClick={() => {
                      this.subscribe()
                    }}
                  >
                    <p>Подписаться</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        )
      } catch {
        return (
          <div className={styles.zagl}>
            <h1>
              К сожалению, ссылка недействительна или данная новость была
              удалена.
            </h1>
          </div>
        )
      }
    } else {
      return <div className={styles.zagl}></div>
    }
  }
}
export default OneOageNews
