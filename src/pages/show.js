import React, { useState, useEffect } from "react";
import { API_URL, api } from "../api/index";

import { TitleBlock, About, Actors, ComingShow, Press, PressPhoto } from "../components/show";
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
  const roles = [];
  arr.map((item) => {
    roles.push({
      id: item.id,
      href: API_URL + item.attributes.formats.large.url,
      src: API_URL + item.attributes.formats.small.url,
      caption: "",
    });
  });
  return roles;
}

function Show() {
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
  const [press, setPress] = useState({});
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    Promise.all([api.exportComingShow("6"), api.exportShowData("6")])
      .then((values) => {
        setShowItems(values[0]);
        setticketsLink(values[0][0].attributes.tickets_link);

        setShowData(getShowData(values[1]));
        setRoles(getShowRoles(values[1].attributes.roles));
        setPress(values[1].attributes.press);
        setPhoto(getShowPhoto(values[1].attributes.gallery.data))
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
      <About data={showData} />
      {isLoading ? <Loader /> : <ComingShow items={showItems} />}
      {isLoading ? <Loader /> : <Actors roles={roles} />}
      {isLoading ? <Loader /> : <Press press={press} />}
      {isLoading ? <Loader /> : <PressPhoto photo={photo} />}
    </main>
  );
}

export default Show;
