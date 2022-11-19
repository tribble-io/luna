import React from "react";

import styles from "./news.module.scss";

const API_URL = "http://theatre.restomatik.ru:1337";

// function cutToLength(s, l) {
//   const words = s.split(" ");
//   let i = 1;
//
//   console.log(words);
//
//   while (words.slice(0, i).join(" ").length < l) {
//     i += 1;
//
//     if (i > words.length) {
//       break;
//     }
//   }
//
//   const res = words.slice(0, i - 1).join(" ");
//
//   if (res.length < s.length) {
//     return res + "...";
//   } else {
//     return s;
//   }
// }

export default function News({ itemsNews /*setItemsNews*/ }) {
  console.log(itemsNews);

  // function scrollNews(d) {
  //   setItemsNews((items) =>
  //     Array.from(
  //       { length: items.length },
  //       (_, i) => items[(i + d + items.length) % items.length]
  //     )
  //   );
  // }

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>
            <p>НОВОСТИ ТЕАТРА</p>
          </div>
          <a href="http://www.lunatheatre.ru/news">
            <div className={styles.btn}>
              <p>ЧИТАТЬ ВСЕ</p>
            </div>
          </a>
        </div>
        {itemsNews.length === 0 ? (
          "Loading.."
        ) : (
          <div className={styles.newsContent}>
            <a
              className={styles.bigNewsImage}
              href={`${API_URL}/news/${itemsNews[0].id}`}
            >
              <img
                src={
                  API_URL + itemsNews[0].attributes.cover.data.attributes.url
                }
                alt=""
              />
            </a>
            <a
              className={styles.bigNewsText}
              href={`${API_URL}/news/${itemsNews[0].id}`}
            >
              a
            </a>
            <a
              className={styles.smallNewsItem1}
              href={`${API_URL}/news/${itemsNews[1].id}`}
            >
              b
            </a>
            <a
              className={styles.smallNewsItem2}
              href={`${API_URL}/news/${itemsNews[2].id}`}
            >
              c
            </a>
          </div>
        )}
      </div>
    </>
  );
}
