import React, { useState, useEffect } from 'react'
import { api } from '../api/index'
import { uniqueBy } from '../assets/utils/usable-function'

import { Slider, Calendar, News, Partners } from '../components/mainPage'
import Loader from '../components/loader'

export function Home() {
  const [itemsSlider, setItemsSlider] = useState([])
  const [items, setItems] = useState([])
  const [itemsNews, setItemsNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Promise.all([api.exportShows(), api.exportArticles()])
      .then((values) => {
        setItems(values[0])
        setItemsSlider(
          uniqueBy(values[0], (o1, o2) => o1.play.id === o2.play.id)
        )
        setItemsNews(values[1])
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  const [firstDate, setFirstDate] = useState(
    new Date(new Date().toISOString().slice(0, 10))
  )

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
  )
}
