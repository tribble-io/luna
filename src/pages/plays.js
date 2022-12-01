import React, { useState, useEffect } from "react";
import axios from "axios";

import ShowsFilter from "../components/showsFilter";
import ShowsCards from "../components/showsCards";
import Loader from "../components/loader"

const playsApi = "http://theatre.restomatik.ru:1337/api/plays";

function getUrl(editValue) {
  let filters = "";

  if (editValue.title.length > 0) {
    filters += `filters[title][$containsi]=${editValue.title}&`;
  }

  if (editValue.scene.length > 0) {
    filters += `filters[scene][$eq]=${editValue.scene}&`;
  }

  if (editValue.rating === true) {
    filters += `filters[rating][$lt]=16&`;
  }

  if (editValue.isPremiere === true) {
    filters += `filters[isPremiere][$eq]=true&`;
  }

  filters += filters[filters.length - 1] !== "&" ? "&" : "";
  return `${playsApi}?${filters}populate=cover`;
}

function Plays() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editValue, setEditValue] = useState({
    title: "",
    scene: "",
    rating: false,
    isPremiere: false,
  });
  const url = getUrl(editValue);

  useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get(url);
        setIsLoading(false);
        setItems(itemsResponse.data.data);
      } catch (error) {
        alert("Ошибка при запросе данных!");
        console.error(error);
      }
    }

    fetchData();
  }, [editValue]);

  return (
    <main>
      <ShowsFilter setEditValue={setEditValue} editValue={editValue} />
      {isLoading ? (
        <Loader />
      ) : (
        <ShowsCards items={items} />
      )}
    </main>
  );
}

export default Plays;
