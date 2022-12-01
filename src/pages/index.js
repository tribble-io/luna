import React from "react";
import axios from "axios";
import { uniqueBy } from "../utils/usable-function";

import Slider from "../components/slider";
import Calendar from "../components/calendar";
import News from "../components/news";
import Partners from "../components/partners";

function Home() {
  const [itemsSlider, setItemsSlider] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [itemsNews, setItemsNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const apiUrl2 =
        "http://theatre.restomatik.ru:1337/api/articles" +
        "?sort[0]=publishedAt%3Adesc&populate=cover" +
        "&pagination[pageSize]=3";
      const apiUrl =
        `http://theatre.restomatik.ru:1337/api/shows` +
        `?filters[date][$gt]=${new Date().toISOString().slice(0, 10)}` +
        `&sort[0]=date&populate=play.cover,play.director`;

      try {
        const [itemsResponse, newsResponse] = await Promise.all([
          axios.get(apiUrl),
          axios.get(apiUrl2),
        ]);

        setIsLoading(false);
        setItemsSlider(
          uniqueBy(itemsResponse.data.data, (o1, o2) =>
            o1.attributes.play.data.id === o2.attributes.play.data.id)
        );
        setItems(itemsResponse.data.data);
        setItemsNews(newsResponse.data.data);
      } catch (error) {
        alert("Ошибка при запросе данных!");
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const [firstDate, setFirstDate] = React.useState(
    new Date(new Date().toISOString().slice(0, 10))
  );

  return (
    <div>
      <section>
        <Slider firstDate={firstDate} items={itemsSlider} setItemsSlider={setItemsSlider} />
      </section>
      <main>
        <section>
          {!isLoading ? (
            <Calendar
              firstDate={firstDate}
              setFirstDate={setFirstDate}
              items={items}
            />
          ) : (
            "s"
          )}
        </section>
        <section>
          <News itemsNews={itemsNews} setItemsNews={setItemsNews} />
        </section>
        <Partners />
      </main>
    </div>
  );
}

export default Home;
