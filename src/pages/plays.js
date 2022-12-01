import React, {useState, useEffect} from "react";
import axios from "axios";

import ShowsFilter from "../components/showsFilter";
import ShowsCards from "../components/showsCards";

const playsApi = 'http://theatre.restomatik.ru:1337/api/plays';

function getUrl(editValue) {
  let filters = '';

  if (editValue.title.length > 0) {
    filters += `[title][$contains]=${editValue.title}&`
  }

  if (editValue.scene.length > 0) {
    filters += `[scene][$eq]=${editValue.scene}`
  }

  filters += filters[filters.length-1] !== '&' ? "&" : ""
  return `${playsApi}?filters${filters}populate=cover`
}

function Plays() {
    const [items, setItems] = useState([]);
    const [editValue, setEditValue] = useState({'title': "", 'scene': ""});
    const url = getUrl(editValue);

    useEffect(() => {
      async function fetchData() {
        try {
          const itemsResponse = await axios.get(url);
  
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
      <ShowsCards items={items} />
    </main>
  );
}

export default Plays;
