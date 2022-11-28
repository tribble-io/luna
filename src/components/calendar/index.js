import React from "react";
import Item from "../../components/items";
import Separator from "../../components/separator";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./styles.css";
// import required modules
import { Navigation } from "swiper";

import styles from "./calendar.module.scss";
const ARR_OFFSET = 7;
const DAY = 1000 * 60 * 60 * 24;

const CALENDAR_WIDTH = window.screen.width;
const DATE_WIDTH = 43; // 3
const DATE_NUMBER = CALENDAR_WIDTH > 573 ? 15 : 8;
const DATE_MARGIN =
  (CALENDAR_WIDTH - DATE_NUMBER * DATE_WIDTH) / (DATE_NUMBER - 1);

// const WINDOW_OFFSET = 5.3;

const DATE_LOAD_LENGTH = DATE_NUMBER + 20 * ARR_OFFSET;

const SLIDER_WIDTH =
  DATE_LOAD_LENGTH * DATE_WIDTH + (DATE_LOAD_LENGTH - 1) * DATE_MARGIN;
const SLIDER_HEIGHT = CALENDAR_WIDTH > 573 ? 33 : 40;

function DateBtn({ date: { date, free }, isselected, setSelected }) {
  const week = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

  function assignDateHref(date) {
    const newDateHref = new Date(date);
    const getDateHref =
      newDateHref.getDate() < 10
        ? "0" + newDateHref.getDate()
        : newDateHref.getDate();
    const fullDate = `${newDateHref.getFullYear()}-${
      newDateHref.getMonth() + 1
    }-${getDateHref}`;
    return `#${fullDate}`;
  }

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
          className={styles.dateContainer}
          onClick={() => {
            !free && setSelected(date);
          }}
        >
          <div className={styles.dateNum}>
            <a href={assignDateHref(date)}> {date.getDate()}</a>
          </div>
          <div className={styles.weekDay}>{week[date.getDay()]}</div>
        </div>
      </div>
    </>
  );
}

export default function Calendar({ firstDate, setFirstDate, items }) {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const [selected, setSelected] = React.useState(() => {
    const date = new Date(items[0].attributes.date);
    return date;
  });

  const dates = React.useMemo(() => {
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
      <div
        className={styles.datesStrip}
        style={{
          "--strip-height": `${SLIDER_HEIGHT}px`,
        }}
      >
        <img
          src="/img/larr.png"
          alt="<"
          className={styles.larr}
          onClick={() => {
            moveDate(-ARR_OFFSET);
          }}
        />
        <div className={styles.dateWindow}>
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
      <div
        className={styles.datesStrip}
        style={{
          "--strip-height": `${SLIDER_HEIGHT}px`,
        }}
      >
        <img
          src="/img/larr.png"
          alt="<"
          className={styles.larr}
          ref={navigationPrevRef}
        />
        <div className={styles.dateWindow}>
          <Swiper
            slidesPerView={5}
            slidesPerGroup={5}
            spaceBetween={10}
            grabCursor={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            modules={[Navigation]}
            breakpoints={{
              640: {
                slidesPerView: 10,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 15,
              },
            }}
            className="calendarSlider"
          >
            {dates.map((date, i) => (
              <SwiperSlide key={i}>
                {
                  <DateBtn
                    key={i}
                    date={date}
                    isselected={date.date.getTime() === selected.getTime()}
                    setSelected={setSelected}
                  />
                }
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <img
          src="/img/rarr.png"
          alt=">"
          className={styles.rarr}
          ref={navigationNextRef}
        />
      </div>
      <div className={styles.cardsWindowContainer}>
        <Item items={items} />
        <div className={styles.mobileButton}>
          <a href={"http://www.lunatheatre.ru/shows"}>все спектакли</a>
        </div>
      </div>
      <Separator />
    </>
  );
}
