import React from "react";
import styles from "./shows.module.scss";
import Ripple from "../../components/rippleButton"

const API_URL = "http://theatre.restomatik.ru:1337";

export default function showsCards({ items }) {
  return (
    <>
        <section>
          <div className={styles.wrapper}>
            {
              <div className={styles.showsContent}>
                {items.map((item) => {
                  return (
                    <div className={styles.showsCard} key={item.id}>
                      <div className={styles.showsImage}>
                        <a
                          className={styles.imageLink}
                          href={"show/" + item.id}
                        >
                          <img
                            src={
                              API_URL +
                              item.attributes.cover.data.attributes.url
                            }
                            alt=""
                          />
                        </a>
                      </div>
                      <div className={styles.showsCardText}>
                        <div className={styles.titleContainer}>
                          <span>
                            {" "}
                            <a
                              href={"show/" + item.id}
                              className={styles.title}
                            >
                              {item.attributes.title}
                            </a>
                          </span>
                          <span className={styles.rating}>
                            {item.attributes.rating}+
                          </span>
                        </div>
                        <div className={styles.shortDescription}>
                          {item.attributes.description}
                        </div>
                        <div className={styles.place}>
                          {item.attributes.place}
                        </div>
                        <div className={styles.ticket}>
                          <div className={styles.buy}>
                            <a
                              className={styles.link}
                              href={item.attributes.tickets_link}
                            >
                              БИЛЕТЫ
                              <Ripple duration={1000} color="#fff" />
                            </a>
                          </div>
                          <div className={styles.premiere}>
                            {item.attributes.isPremiere ? (
                              <span>Премьера</span>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            }
          </div>
        </section>
    </>
  );
}
