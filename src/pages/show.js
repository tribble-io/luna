import React, { useState, useEffect } from "react";
import { API_URL, api } from "../api/index";

import { TitleBlock, About } from "../components/show/titleBlock";
import ComingShow from "../components/show/comingShow";
import Actors from "../components/show/actors";
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

  useEffect(() => {
    Promise.all([api.exportComingShow("6"), api.exportShowData("6")])
      .then((values) => {
        setShowItems(values[0]);
        setticketsLink(values[0][0].attributes.tickets_link);

        setShowData(getShowData(values[1]));
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
      <Actors />
    </main>
  );
}

export default Show;
