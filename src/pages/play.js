import React, { useState, useEffect } from "react";
import { API_URL, api } from "../api/index";
import { useMatch } from "react-router-dom";

import {
  TitleBlock,
  About,
  Actors,
  ComingShow,
  Press,
  ShowPhoto,
  Review,
  CommentForm,
} from "../components/play";
import Loader from "../components/loader";

function getShowData(item) {
  return {
    bgImage: API_URL + item.attributes?.cover?.data.attributes.url,
    title: item.attributes?.title,
    description: item.attributes?.description,
    rating: item.attributes?.rating,
    durationStr: item.attributes?.durationStr,
    premiereDateStr: item.attributes?.premiereDateStr,
    scene: item.attributes?.scene,
    body: item.attributes?.body,
  };
}

function getShowRoles(arr) {
  if (arr !== null) {
    const roles = arr.map((item) => 
      item.actors.data.map((data) => {
        return {
        id: data.id,
        role: item.role,
        name: data.attributes?.fullname,
        src: API_URL + data.attributes.cover?.data?.attributes?.url,
      }})
    );
    return roles.flat();
  } else {
    return [];
  }
}

function getShowPhoto(arr) {
  if (arr !== null) {
    const photo = arr.map((item) => {
      return {
        id: item.id,
        href: API_URL + item.attributes?.formats.large.url,
        src: API_URL + item.attributes?.formats.small.url,
        caption: "",
      };
    });
    return photo;
  } else {
    return [];
  }
}

let month = [
  "ЯНВАРЯ",
  "ФЕВРАЛЯ",
  "МАРТА",
  "АПРЕЛЯ",
  "МАЯ",
  "ИЮНЯ",
  "ИЮЛЯ",
  "АВГУСТА",
  "СЕНТЯБРЯ",
  "ОКТЯБРЯ",
  "НОЯБРЯ",
  "ДЕКАБРЯ",
];

const getFullDateMonth = (date) => {
  let dates = new Date(date);
  let fulldate = `${dates.getDay()} ${
    month[dates.getMonth()]
  } ${dates.getFullYear()}`;
  return fulldate;
};

const getFullDate = (date) => {
  let dates = new Date(date);
  let fulldate = `${dates.getDay()}.${dates.getMonth()}.${dates.getFullYear()}`;
  return fulldate;
};

function getShowReview(arr) {
  if (arr !== null) {
    const review = arr.map((item) => {
      return {
        id: item.id,
        name: item.attributes?.name,
        title: item.attributes?.title,
        text: item.attributes?.text,
        createdAt: getFullDateMonth(item.attributes?.createdAt),
      };
    });
    return review;
  } else {
    return [];
  }
}

function getPlayPress(arr) {
  if (arr !== null) {
    const review = arr.map((item) => {
      return {
        id: item.id,
        title: item.title,
        publisher: item.publisher,
        date: getFullDate(item.date),
        link: item.link,
      };
    });
    return review;
  } else {
    return [];
  }
}

export default function Play() {
  const match = useMatch("/play/:id");
  const showID = match.params.id;
  const [isLoading, setIsLoading] = useState(true);

  const [showData, setShowData] = useState({
    bgImage: "",
    title: "",
    description: "",
    tickets_link: "",
    rating: "",
    durationStr: "",
    premiereDateStr: "",
    scene: "",
    body: "",
  });

  const [showItems, setShowItems] = useState({});
  const [ticketsLink, setticketsLink] = useState("");
  const [roles, setRoles] = useState({});
  const [directors, setDirectors] = useState({});
  const [press, setPress] = useState({});
  const [photo, setPhoto] = useState({});
  const [review, setReview] = useState({});

  useEffect(() => {
    Promise.all([api.exportComingShow(showID), api.exportShowData(showID)])
      .then((values) => {
        setShowItems(values[0]);
        setticketsLink(values[0]?.[0]?.attributes?.tickets_link);

        setShowData(getShowData(values[1]));
        setDirectors(values[1].attributes?.directors);
        setRoles(getShowRoles(values[1].attributes?.roles));
        setPress(getPlayPress(values[1].attributes?.press));
        setPhoto(getShowPhoto(values[1].attributes?.gallery?.data));
        setReview(getShowReview(values[1].attributes?.comments?.data));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      {isLoading ? (
        <Loader />
      ) : (
        <TitleBlock data={showData} ticketsLink={ticketsLink} />
      )}
      {isLoading ? <Loader /> : <About data={showData} directors={directors} />}
      {isLoading ? <Loader /> : <ComingShow items={showItems} />}
      {isLoading ? <Loader /> : <Actors roles={roles} />}
      {isLoading ? <Loader /> : <Press press={press} />}
      {isLoading ? <Loader /> : <ShowPhoto photo={photo} />}
      {isLoading ? <Loader /> : <Review review={review} />}
      <CommentForm showID={showID} />
    </main>
  );
}
