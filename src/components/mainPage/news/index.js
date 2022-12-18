import React from 'react'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../api'

import { Separator } from '../../mainPage'

import styles from './news.module.scss'

function cutToLength(s, l) {
  const words = s.split(' ')
  let i = 1

  while (words.slice(0, i).join(' ').length < l) {
    i += 1

    if (i > words.length) {
      break
    }
  }

  const res = words.slice(0, i - 1).join(' ')

  if (res.length < s.length) {
    return res + '...'
  } else {
    return s
  }
}

export function News({ itemsNews }) {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>
            <p>
              НОВОСТИ <br className={styles.mobileVisible} /> ТЕАТРА
            </p>
          </div>
          <Link to='/news'>
            <div className={styles.btn}>
              <p>ЧИТАТЬ ВСЕ</p>
            </div>
          </Link>
        </div>
        {itemsNews.length === 0 ? (
          'Loading..'
        ) : (
          <div className={styles.newsContent}>
            <Link
              className={styles.bigNewsImage}
              to={`/news/${itemsNews[0].id}`}
            >
              <img src={API_URL + itemsNews[0].cover.url} alt='' />
            </Link>
            <Link
              className={styles.bigNewsText}
              to={`/news/${itemsNews[0].id}`}
            >
              <div className={styles.title}>
                {cutToLength(itemsNews[0].title, 70)}
              </div>
              <div className={styles.date}>{itemsNews[0].date_str}</div>
            </Link>
            {[0, 1].map((i) => {
              const item = itemsNews[i + 1]
              const st = [styles.smallNewsItem1, styles.smallNewsItem2][i]
              return (
                <Link key={i} className={st} to={`/news/${item.id}`}>
                  <img src={API_URL + item.cover.url} alt='' />
                  <div className={styles.boxWrapper}>
                    <div className={styles.box}>
                      <div className={styles.title}>
                        {cutToLength(item.title, 70)}
                      </div>
                      <div className={styles.date}>{item.date_str}</div>
                      <div className={styles.text}>
                        {cutToLength(item.text, 150)}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
        <div className={styles.mobileButton}>
          <Link to='/news'>ЧИТАТЬ ВСЕ</Link>
        </div>
      </div>
      <Separator />
    </>
  )
}
