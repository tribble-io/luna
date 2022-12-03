import React, { useState, useEffect } from "react";
import axios from "axios";

import ChildrenTitle from "../components/childrenTitle";
import {
  ChildrenDescription,
  ChildrenDescriptionTasks,
} from "../components/childrenDescription";
import ChildrenNextShows from "../components/childrenNextShows";
import ChildrenStudioFounder from "../components/childrenStudioFounder";
import ChildrenScene from "../components/childrenScene";
import ChildrenRecording from "../components/childrenRecording"
import ChildrenPhoto from "../components/childrenPhoto"
import Loader from "../components/loader";

const playsApi = "http://theatre.restomatik.ru:1337";

function ChildrenStudio() {
  const [scrollBlock, setScrollBlock] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [nextShows, setNextShows] = useState({});
  const [scene, setScene] = useState({});
  const [photo, setPhoto] = useState({});
  console.log(scrollBlock, "scrollBlock");

  const urlNext = `${playsApi}/api/shows?filters[date][$gte]=${new Date()
    .toISOString()
    .slice(0, 10)}&populate=play`;
  const urlScene = `${playsApi}/api/plays?filters[scene][$eq]=Зал "Маленькая Луна"&populate=cover`;
  const urlPhoto = `${playsApi}/api/assets/1?populate=gallery,gallery.media`;

  useEffect(() => {
    async function fetchData() {
      try {
        const [nextResponse, sceneResponse, photoResponse] = await Promise.all([
          axios.get(urlNext),
          axios.get(urlScene),
          axios.get(urlPhoto),
        ]);
        setNextShows(nextResponse.data.data);
        setScene(sceneResponse.data.data);
        setPhoto(photoResponse.data.data.attributes.gallery)
        setIsLoading(false);
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
      {isLoading ? 
        <Loader/> : 
        (<ChildrenNextShows id="nextShow" items={nextShows} />)
      }
      <ChildrenDescriptionTasks />
      <ChildrenStudioFounder id="founder" />

      {isLoading ? 
        <Loader/> : 
        (<ChildrenScene id="little_moon" items={scene} />)
      }
      <ChildrenRecording id="recording" />
      {isLoading ? 
        <Loader/> : 
        (<ChildrenPhoto id="photo" items={photo} />)
      }
      
    </main>
  );
}

export default ChildrenStudio;
