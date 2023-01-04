import React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { API_URL } from '../../../api'
import { IsMobile } from '../../../assets/index'
import noPhoto from '../../../assets/img/no-photo-actor.jpg'
import { NewsLine } from '../../createElement'

import styles from './news.module.scss'

function cutToLength(string, maxlength) {
  return string.length > maxlength
    ? string.substr(0, maxlength) + '\u2026'
    : string
}

export function News(props) {
  const { itemsNews } = props
  return (
    <>
      <section id='mainNews' className={styles.mainNews}>
        <div className={styles.wrapper}>
          <div className={styles.newsContent}>
            <div className={styles.header}>
              <div className={styles.title}>
                <h2>НОВОСТИ ТЕАТРА</h2>
              </div>
              <div className={styles.btn}>
                <Link to='/news'>Читать все</Link>
              </div>
            </div>
            {itemsNews.length === 0 ? (
              <p>Loading</p>
            ) : (
              <div className={styles.newsList}>
                {IsMobile
                  ? itemsNews
                      .slice(0, 3)
                      .map((item) => (
                        <NewsLine item={item} key={`news-line-${item.id}`} />
                      ))
                  : itemsNews.map((item) => (
                      <div
                        className={styles.newsBlock}
                        key={`news-line-${item.id}`}
                      >
                        <div className={styles.newsImage}>
                          <div className={styles.imageLink}>
                            <img
                              src={
                                API_URL +
                                  (item.image?.formats?.medium?.url ??
                                    item.image?.formats?.small?.url ??
                                    item.image?.formats?.thumbnail?.url ??
                                    item.image?.url) ?? noPhoto
                              }
                              alt={item.title ?? ''}
                            />
                          </div>
                        </div>
                        <div className={styles.newsInfo}>
                          <p className={styles.newsTitle}>{item.title}</p>
                          <p className={styles.newsDate}>
                            {item.date} {item.month_name_case} {item.year}
                          </p>
                          <div className={styles.newsText}>
                            <ReactMarkdown
                              children={cutToLength(item.text, 22)}
                              rehypePlugins={[rehypeRaw]}
                            />
                          </div>
                          <Link
                            className={styles.readMore}
                            to={`/news/${item.id}`}
                          >
                            Читать
                          </Link>
                        </div>
                      </div>
                    ))}
              </div>
            )}
            <div className={styles.mobileButton}>
              <Link to='/news'>ЧИТАТЬ ВСЕ</Link>
            </div>
          </div>
        </div>
        <div className={`${styles.decorationLine} ${styles.lineFirst}`}></div>
        <div className={`${styles.decorationLine} ${styles.lineSecond}`}></div>
      </section>
    </>
  )
}
