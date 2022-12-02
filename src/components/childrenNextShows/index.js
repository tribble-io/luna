import React from "react";
import styles from "./title.module.scss";

function CreateLine(props) {
  const { items } = props;
  return (
    <>
      {items.map((item, key) => (
        <div className={styles.nextShowsLine} key={key}>
          <div className={styles.showsDate}>{item.attributes.date_str}</div>
          <div className={styles.showsinfo}>
            <div className={styles.showsTitle}>
              <div className={styles.title}>
                {item.attributes.play.data.attributes.title}
              </div>
              <div className={styles.description}>{item.attributes.place}</div>
            </div>
            <div className={styles.raiting}>
              {item.attributes.play.data.attributes.rating}+
            </div>
          </div>
          <div>
            <a
              href={item.attributes.tickets_link}
              className={styles.showsTicket}
            >
              купить билет
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
export default function ChildrenNextShows(props) {
  const { id, items } = props;
  // Check if we have shows in little moon
  const isItems = items.length > 0 ? true : false;

  return (
    <>
      <section id={id}>
        {isItems ? (
          <div className={styles.wrapper}>
            {
              <div className={styles.nextShowsContent}>
                <div className={styles.nextShowsTitle}>
                  <h2>ближайшие постановки</h2>
                </div>
                <div className={styles.nextShowsArea}>
                  <CreateLine items={items} />
                </div>
              </div>
            }
          </div>
        ) : (
          ""
        )}
      </section>
    </>
  );
}
