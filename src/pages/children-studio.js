import React, { useState, useEffect } from "react";
import { api } from "../api/index";

import ChildrenTitle from "../components/childrensStudio/title";
import {
  ChildrenDescription,
  ChildrenStudioTask,
  ChildrenRecording,
} from "../components/childrensStudio/textBlock";
import ChildrenNextShows from "../components/childrensStudio/nextShows";
import ChildrenStudioFounder from "../components/childrensStudio/founder";
import ChildrenScene from "../components/childrensStudio/scene";
import ChildrenPhoto from "../components/childrensStudio/photo";
import Loader from "../components/loader";

function ChildrenStudio() {
  const [isLoading, setIsLoading] = useState(true);
  const [nextShows, setNextShows] = useState({});
  const [scene, setScene] = useState({});
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    Promise.all([
      api.exportChildrenStudioNextShow(),
      api.exportChildrenStudioScene(),
      api.exportChildrenStudioPhoto(),
    ])
      .then((values) => {
        setNextShows(values[0]);
        setScene(values[1]);
        setPhoto(values[2].attributes.gallery);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <main>
      <ChildrenTitle />
      <ChildrenDescription />
      {isLoading ? (
        <Loader />
      ) : (
        <ChildrenNextShows id="nextShow" items={nextShows} />
      )}
      <ChildrenStudioTask id="studio_task" />
      <ChildrenStudioFounder id="founder" />

      {isLoading ? (
        <Loader />
      ) : (
        <ChildrenScene id="little_moon" items={scene} />
      )}
      <ChildrenRecording id="recording" />
      {isLoading ? <Loader /> : <ChildrenPhoto id="photo" items={photo} />}
    </main>
  );
}

export default ChildrenStudio;
