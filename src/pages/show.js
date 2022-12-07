import React, { useState, useEffect } from "react";
import { playsApi, api } from "../api/index";

import {TitleBlock, About} from "../components/show/titleBlock";
import Loader from "../components/loader"

function getShowData(item) {
  const data = {
    bgImage: playsApi + item.attributes.play.data.attributes.cover.data.attributes.formats.large.url,
    title: item.attributes.play.data.attributes.title,
    description: item.attributes.play.data.attributes.description,
    tickets_link: item.attributes.tickets_link,
    rating: item.attributes.play.data.attributes.rating,
    durationStr: item.attributes.play.data.attributes.durationStr,
    premiereDateStr: item.attributes.play.data.attributes.premiereDateStr,
    scene: item.attributes.play.data.attributes.scene,
  }

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
    scene: ""

  });

  useEffect(() => {
    api.exportShowData('6')
      .then((response) => {
        setShowData(getShowData(response[0]));
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      <TitleBlock data={showData} />
      <About data={showData} />
    </main>
  );
}

export default Show;
