import React from "react";
import styles from "./nextShows.module.scss";
import CreateLine from "../../createElement/playsLine";

export default function ChildrenNextShows(props) {
  const { id, items } = props;
  // Check if we have shows in little moon
  const isItems = items.length > 0 ? true : false;

  const getWeekDay = (date) => {
    let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    let dates = new Date(date);
    return days[dates.getDay()];
  };

  function createLine(item) {
    const createLineData = {
      item: item,
      id: item.id,
      date: parseInt(item.attributes.date_str.match(/\d+/)),
      time: item.attributes.time,
      day: getWeekDay(item.attributes.date),
      title: item.attributes.play.data.attributes.title,
      isPremiere: item.attributes.play.data.attributes.isPremiere,
      place: item.attributes.place,
      rating: item.attributes.play.data.attributes.rating,
      buy: item.attributes.tickets_link,
    };
    return createLineData;
  }

  return (
    <>
      <section id={id}>
        <div className={styles.wrapper}>
          <div className={styles.nextShowsContent}>
            <div className={styles.nextShowsTitle}>
              <h2>ближайшие постановки</h2>
            </div>
            {isItems ? (
              <div className={styles.nextShowsArea}>
                {items.slice(0, 4).map((item) => (
                  <CreateLine
                    data={createLine(item)}
                    key={item.id}
                  />
                ))}
              </div>
            ) : (
              <div className={styles.nextShowsArea}>
                Нет ближайших спектаклей на сцене "МАЛЕНЬКАЯ ЛУНА"
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
