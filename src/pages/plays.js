import React, {useState, useEffect} from "react";
import axios from "axios";

import ShowsFilter from "../components/showsFilter";
import ShowsCards from "../components/showsCards";

function Plays() {
    const [items, setItems] = useState([]);
    const [editValue, setEditValue] = useState({'title': "", 'scene': ""});
    let filters = '';

    function updateFilter() {
      if (editValue.title.length > 0) {
        filters += `[title][$contains]=${editValue.title}&`
      }

      if (editValue.scene.length > 0) {
        filters += `[scene][$eq]=${editValue.scene}`
      }
    }


    useEffect(() => {

      updateFilter()
      filters += filters[filters.length-1] !== '&' ? "&" : ""
      
      async function fetchData() {
        const apiUrl =
          `http://theatre.restomatik.ru:1337/api/plays` + 
          `?filters${filters}` +
          `populate=cover`;
  
        try {
          const itemsResponse = await Promise.all([axios.get(apiUrl)]);
  
          setItems(itemsResponse[0].data.data);
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
