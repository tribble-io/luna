import React from 'react'
import styles from './singleNews.module.scss'
import MiniNews from './miniNews'
import { CustomCheckbox, PlaysLine } from '../../createElement'

import tg from './img/telegram.svg'
import vk from './img/vk.svg'
import { getDateStr } from '../../../assets'
import Loader from '../../loader'
import { ShowPhoto } from '../../play'
import { api, API_URL } from '../../../api'
import { Link } from 'react-router-dom'

class SingleNews extends React.Component {
  constructor() {
    super()

    this.state = {
      items: {},
      itemsMiniNews: [],
      URL: API_URL,
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
      photo: [],
    }
  }

  externalLinks() {
    let links = document.getElementsByTagName('a')
    for (let i = 0; i < links.length; i++) {
      let link = links[i]
      if (link.getAttribute('href') && link.getAttribute('rel') == 'external')
        link.target = '_blank'
    }
  }

  getSliderPhoto(a) {
    const photo = a.map((item) => {
      return {
        id: item.id,
        original: this.state.URL + item.media?.url,
        preview: item.media?.formats,
        caption: '',
      }
    })
    return photo
  }

  getPlaysInfo(item) {
    const playInfo = {
      id: item?.play?.id,
      show_id: item?.id,
      date: getDateStr(item?.date).date,
      time: item?.time.slice(0, -3),
      month: getDateStr(item?.date).month_name,
      day_of_week: getDateStr(item?.date).day_of_week,
      title: item?.play?.title,
      isPremiere: item?.play?.isPremiere,
      scene: item?.play?.scene?.name,
      rating: item?.play?.rating,
      buy: item?.tickets_link,
    }
    return playInfo
  }

  componentDidUpdate() {
    setTimeout(() => {
      if (this.state.id_article != window.location.href.split('/').pop()) {
        this.setState({
          id_article: window.location.href.split('/').pop(),
          items: this.props.stateNew,
          photo: this.props.stateNew.gallery,
        })
        api.lastNews().then((response) =>
          this.setState({
            itemsMiniNews: response.data,
          })
        )
      }
    }, 1000)
    this.externalLinks()
  }

  componentDidMount() {
    setTimeout(() => {
      if (!this.props.stateNew) {
        api.newsElNews(this.state.id_article).then((response) =>
          this.setState({
            items: response.data,
            id_article: window.location.href.split('/').pop(),
            photo: response.data.gallery,
          })
        )
        api.lastNews().then((response) =>
          this.setState({
            itemsMiniNews: response.data,
          })
        )
      } else {
        this.setState({
          items: this.props.stateNew,
          photo: this.props.stateNew.gallery,
        })
        api.lastNews().then((response) =>
          this.setState({
            itemsMiniNews: response.data,
            photo: this.props.stateNew.gallery,
          })
        )
      }
    }, 1000)
    this.externalLinks()
  }

  changeMail(value) {
    this.setState({
      mail: value,
    })
  }

  subscribe() {
    if (!this.state.checked) {
      this.setState({
        messSubs: this.state.messSubsList[2],
      })
    }
    if (this.state.checked) {
      fetch(`${API_URL}/api/subscribers`, {
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

  chageCheck(state) {
    this.setState({
      checked: state,
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
          <MiniNews
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
                      {this.state.items.text}
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
                    <div className={styles.wrapper}>
                      <div className={styles.posterList}>
                        {this.state.items.shows.map((item, index) => (
                          <PlaysLine
                            key={`play-line-${item?.id ?? index}-${index}`}
                            data={this.getPlaysInfo(item)}
                          />
                        ))}
                      </div>
                    </div>
                  </section>
                </div>
              ) : (
                <div className={styles.spectakles}></div>
              )}
              {this.state.photo != null ? (
                <ShowPhoto
                  photo={this.getSliderPhoto(this.state.items.gallery)}
                  tage={'ФОТОГРАФИИ'}
                />
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
                      rel='external'
                    >
                      <img src={tg} />
                      <p>Рассказать</p>
                    </a>
                    <a
                      className={styles.blockForShare_el}
                      href={
                        'https://vk.com/share.php?url=' + window.location.href
                      }
                      rel='external'
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
                    <CustomCheckbox
                      id='storage'
                      name='storage'
                      checked={true}
                      className={styles.checkboxInput}
                      isActive={(state) => {
                        this.chageCheck(state)
                      }}
                    >
                      <p>
                        Согласен (-на) на хранение и{' '}
                        <Link
                          className={styles.linkData}
                          to={'/user-agreement'}
                          target={'_blank'}
                          rel='noreferrer'
                        >
                          обработку данных
                        </Link>
                      </p>
                    </CustomCheckbox>
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
            <Loader />
          </div>
        )
      }
    } else {
      return (
        <div className={styles.zagl}>
          <Loader />
        </div>
      )
    }
  }
}
export default SingleNews
