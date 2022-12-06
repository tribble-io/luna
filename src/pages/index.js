import React from "react";
import { api } from "../api/index";
import { uniqueBy } from "../assets/utils/usable-function";

import Slider from "../components/mainPage/slider";
import Calendar from "../components/mainPage/calendar";
import News from "../components/mainPage/news";
import Partners from "../components/mainPage/partners";
import Loader from "../components/loader";

function Home() {
  const [itemsSlider, setItemsSlider] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [itemsNews, setItemsNews] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
      Promise.all([
        api.exportShows(),
        api.exportArticles(),
      ])
        .then((values) => {
          setItems(values[0]);
          setItemsSlider(uniqueBy(
              values[0],
              (o1, o2) =>
                o1.attributes.play.data.id === o2.attributes.play.data.id
          ));
          setItemsNews(values[1]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
  }, []);

  const [firstDate, setFirstDate] = React.useState(
    new Date(new Date().toISOString().slice(0, 10))
  );

  return (
    <div>
      <section>
        <Slider
          firstDate={firstDate}
          items={itemsSlider}
          setItemsSlider={setItemsSlider}
        />
      </section>
      <main>
        <section>
          {isLoading ? (
            <Loader />
          ) : (
            <Calendar setFirstDate={setFirstDate} items={items} />
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
