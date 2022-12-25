import React, { useState, useEffect } from 'react'
import { api } from '../api/index'
import { uniqueBy } from '../assets/utils/usable-function'

import {
  Slider,
  Calendar,
  VideoBlock,
  News,
  Partners,
} from '../components/mainPage'
import Loader from '../components/loader'

// We create a link of a /embed/ format for the correct display of the video by API
function getVideoLink(link) {
  const linkSplit = link.split(['/watch?v='])
  const newLink = linkSplit[0] + '/embed/' + linkSplit[1]

  return newLink
}

export function Home() {
  const [itemsSlider, setItemsSlider] = useState([])
  const [itemsAffiche, setItemsAffiche] = useState([])
  const [videoLink, setvideoLink] = useState('')
  const [itemsNews, setItemsNews] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [firstDate, setFirstDate] = useState()

  useEffect(() => {
    Promise.all([api.exportMainPage(), api.exportShows(), api.exportArticles()])
      .then((values) => {
        setItemsSlider(values[0].plays)
        setvideoLink(getVideoLink(values[0].youtubeLink))
        setItemsAffiche(
          uniqueBy(values[1], (o1, o2) => o1.play.id === o2.play.id)
        )
        setItemsNews(values[2])
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <Slider firstDate={firstDate} items={itemsSlider} />
      <main>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Calendar setFirstDate={setFirstDate} items={itemsAffiche} />
            <VideoBlock link={videoLink} />
            <News itemsNews={itemsNews} />
          </>
        )}
        <Partners />
      </main>
    </>
  )
}
