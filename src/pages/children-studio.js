import React, { useState, useEffect} from "react";
import axios from "axios";

import ChildrenTitle from "../components/childrenTitle";
import {ChildrenDescription, ChildrenDescriptionTasks} from "../components/childrenDescription"
import ChildrenNextShows from "../components/childrenNextShows"
import Loader from "../components/loader"

const playsApi = "http://theatre.restomatik.ru:1337";

function ChildrenStudio() {
  const [scrollBlock, setScrollBlock] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState();
  console.log(scrollBlock, 'scrollBlock')
  const url = `${playsApi}/api/shows?filters[date][$gte]=${new Date().toISOString().slice(0, 10)}&filters[place][$eq]=Зал "Маленькая Луна"&populate=play`;

  useEffect(() => {
    async function fetchData() {
      try {
        const itemsResponse = await axios.get(url);
        setItems(itemsResponse.data.data);
        setIsLoading(false)
      } catch (error) {
        alert("Ошибка при запросе данных!");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <main>
      <ChildrenTitle setScrollBlock={setScrollBlock} />
      <ChildrenDescription />
      {/* <ChildrenNextShows id="nextShow" items={items} /> */}
      <ChildrenDescriptionTasks />
    </main>
  );
}

export default ChildrenStudio;
