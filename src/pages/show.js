import React, { useState, useEffect } from "react";
import { API_URL, api } from "../api/index";
import { useMatch } from 'react-router-dom';

import {
  TitleBlock,
  About,
  Actors,
  ComingShow,
  Press,
  ShowPhoto,
  Review,
} from "../components/show";
import Loader from "../components/loader";

function getShowData(item) {
  const data = {
    bgImage: API_URL + item.attributes.cover.data.attributes.url,
    title: item.attributes.title,
    description: item.attributes.description,
    rating: item.attributes.rating,
    durationStr: item.attributes.durationStr,
    premiereDateStr: item.attributes.premiereDateStr,
    scene: item.attributes.scene,
    body: item.attributes.body,
  };

  return data;
}

function getShowRoles(arr) {
  const roles = [];
  arr.map((item) => {
    roles.push({
      id: item.actors.data[0].id,
      role: item.role,
      name: item.actors.data[0].attributes.fullname,
      src: API_URL + item.actors.data[0].attributes.cover.data.attributes.url,
    });
  });
  return roles;
}

function getShowPhoto(arr) {
  const photo = [];
  arr.map((item) => {
    photo.push({
      id: item.id,
      href: API_URL + item.attributes.formats.large.url,
      src: API_URL + item.attributes.formats.small.url,
      caption: "",
    });
  });
  return photo;
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

const getFullDate = (date) => {
  let dates = new Date(date);
  let fulldate = `${dates.getDay()} ${
    month[dates.getMonth()]
  } ${dates.getFullYear()}`;
  return fulldate;
};

function getShowReview(arr) {
  const review = [];
  arr.map((item) => {
    review.push({
      id: item.id,
      name: item.attributes.name,
      title: item.attributes.title,
      text: item.attributes.text,
      createdAt: getFullDate(item.attributes.createdAt),
    });
  });
  return review;
}

export default function Show() {
  const match = useMatch('/show/:id');
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
        setticketsLink(values[0][0].attributes.tickets_link);

        setShowData(getShowData(values[1]));
        setDirectors(values[1].attributes.directors);
        setRoles(getShowRoles(values[1].attributes.roles));
        setPress(values[1].attributes.press);
        setPhoto(getShowPhoto(values[1].attributes.gallery.data));
        setReview(getShowReview(values[1].attributes.comments.data));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);


  return (
    
    <main>
      <TitleBlock data={showData} ticketsLink={ticketsLink} />
      <About data={showData} directors={directors} />
      {isLoading ? <Loader /> : <ComingShow items={showItems} />}
      {isLoading ? <Loader /> : <Actors roles={roles} />}
      {isLoading ? <Loader /> : <Press press={press} />}
      {isLoading ? <Loader /> : <ShowPhoto photo={photo} />}
      {isLoading ? <Loader /> : <Review review={review} />}
    </main>
  );
}
