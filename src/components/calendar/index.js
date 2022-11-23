import React from "react";
import Item from "../../components/items";
import Separator from "../../components/separator";
import { OP_WIDTH } from "../../consts";

import styles from "./calendar.module.scss";
const ARR_OFFSET = 7;
const DAY = 1000 * 60 * 60 * 24;

const CALENDAR_WIDTH = OP_WIDTH; // 70
const DATE_WIDTH = 43; // 3
const DATE_NUMBER = 15;
const DATE_MARGIN =
  (CALENDAR_WIDTH - DATE_NUMBER * DATE_WIDTH) / (DATE_NUMBER - 1);

// const WINDOW_OFFSET = 5.3;

const DATE_LOAD_LENGTH = DATE_NUMBER + 20 * ARR_OFFSET;

const SLIDER_WIDTH =
  DATE_LOAD_LENGTH * DATE_WIDTH + (DATE_LOAD_LENGTH - 1) * DATE_MARGIN;
const DATE_LEFT_MARGIN = (100 - CALENDAR_WIDTH) / 2;

const ITEM_WINDOW_WIDTH = OP_WIDTH;
const CARDS_N = 4;
const ITEM_WIDTH = 260;
const ITEM_MARGIN = (ITEM_WINDOW_WIDTH - CARDS_N * ITEM_WIDTH) / (CARDS_N - 1);

function DateBtn({ date: { date, free }, isselected, setSelected }) {
  console.log(CALENDAR_WIDTH);
  const week = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  return (
    <>
      <div
        className={
          isselected
            ? styles.dateBtnContainerSelected
            : free
            ? styles.dateBtnContainer
            : styles.dateBtnContainerHover
        }
        style={{
          "--date-width": `${DATE_WIDTH}px`,
        }}
      >
        <img src="/img/calendar_luna.png" alt="" />
        <div
          // className={
          //   isselected
          //     ? styles.dateContainerSelected
          //     : free
          //     ? styles.dateContainer
          //     : [styles.dateContainer, styles.dateContainerHover].join(" ")
          // }
          className={styles.dateContainer}
          onClick={() => {
            setSelected(date);
          }}
        >
          <div className={styles.dateNum}>{date.getDate()}</div>
          <div className={styles.weekDay}>{week[date.getDay()]}</div>
        </div>
      </div>
    </>
  );
}

export default function Calendar({ firstDate, setFirstDate, items }) {
  const [selected, setSelected] = React.useState(() => {
    const date = new Date();
    date.setTime(firstDate.getTime() + 2 * DAY);
    return date;
  });

  const dates = React.useMemo(() => {
    console.log("calc");
    const today = new Date(new Date().toISOString().slice(0, 10));
    return Array.from({ length: DATE_LOAD_LENGTH }, (_, i) => {
      const date = new Date();
      date.setTime(today.getTime() + (i - ARR_OFFSET) * DAY);
      return {
        date: date,
        free: !items.some((item) => {
          const itemdate = new Date(item.attributes.date);
          return itemdate.getTime() === date.getTime();
        }),
      };
    });
  }, [items]);

  function moveDate(days) {
    setFirstDate((prev) => {
      const time = prev.getTime() + days * DAY;

      if (time >= dates[0].date.getTime()) {
        const d = new Date();
        d.setTime(time);
        return d;
      } else {
        return prev;
      }
    });
  }

  return (
    <>
      {/* <img className={styles.curLeft} src="/img/curtainsLeft.png" alt="" /> */}
      {/* <img className={styles.curRight} src="/img/curtainsRight.png" alt="" /> */}
      <div className={styles.datesStrip}>
        <img
          src="/img/larr.png"
          alt="<"
          className={styles.larr}
          onClick={() => {
            moveDate(-ARR_OFFSET);
          }}
        />
        <div
          className={styles.dateWindow}
          style={{
            width: `${CALENDAR_WIDTH - 53}px`,
          }}
        >
          <div
            className={styles.dateSlider}
            style={{
              width: `${SLIDER_WIDTH}px`,
              left: `-${
                ((firstDate.getTime() - dates[0].date.getTime()) / DAY) *
                (DATE_WIDTH + DATE_MARGIN)
              }px`,
            }}
          >
            {(() => {
              return dates.map((date, i) => (
                <DateBtn
                  key={i}
                  date={date}
                  isselected={date.date.getTime() === selected.getTime()}
                  setSelected={setSelected}
                />
              ));
            })()}
          </div>
        </div>
        <img
          src="/img/rarr.png"
          alt=">"
          className={styles.rarr}
          onClick={() => {
            moveDate(ARR_OFFSET);
          }}
        />
      </div>
      <div className={styles.cardsWindowContainer}>
        <div
          className={styles.cardsWindow}
          style={{
            width: `${ITEM_WINDOW_WIDTH}px`,
            paddingLeft: `${(ITEM_MARGIN * 2) / 3}px`,
            paddingRight: `${(ITEM_MARGIN * 2) / 3}px`,
          }}
        >
          <div
            className={styles.cardsSlider}
            style={{
              width: `${
                items.length * ITEM_WIDTH + (items.length - 1) * ITEM_MARGIN
              }px`,
              left: `-${
                items.filter(
                  (item) =>
                    new Date(item.attributes.date).getTime() <
                    selected.getTime()
                ).length *
                (ITEM_WIDTH + ITEM_MARGIN)
              }px`,
            }}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} width={ITEM_WIDTH} />
            ))}
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
}
