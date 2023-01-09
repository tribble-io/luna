import axios from 'axios'
export const API_URL = 'http://theatre.restomatik.ru:1337'

const DATETIME_NOW = new Date().toISOString()

async function exportMainPage() {
  const result = await axios.get(
    `${API_URL}/api/main-page?populate=plays.cover,plays.shows,plays.scene,partners.logo`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export main page info")
}

async function exportShows() {
  const result = await axios.get(
    `${API_URL}/api/shows?filters[datetime][$gt]=${DATETIME_NOW}&sort[0]=datetime&populate=play.cover,play.director,play.scene`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export shows")
}

async function exportArticles(length) {
  const result = await axios.get(
    `${API_URL}/api/articles?sort[0]=publishedAt%3Adesc&populate=cover&pagination[pageSize]=${
      length ?? 4
    }`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export articles")
}

function getPlaysFilter(editValue) {
  let filters = ''

  if (editValue.title.length > 0) {
    filters += `filters[title][$containsi]=${editValue.title}&`
  }

  if (editValue.scene.length > 0) {
    filters += `filters[scene][name][$eq]=${editValue.scene}&`
  }

  if (editValue.rating === true) {
    filters += `filters[rating][$lt]=16&`
  }

  if (editValue.isPremiere === true) {
    filters += `filters[isPremiere][$eq]=true&`
  }

  filters += filters[filters.length - 1] !== '&' ? '&' : ''
  return `${API_URL}/api/plays?${filters}populate=cover,scene,shows`
}

async function exportPlayShows(editValue) {
  const url = getPlaysFilter(editValue)
  const result = await axios.get(url)

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export plays shows")
}

async function exportChildrenStudioNextShow() {
  const result = await axios.get(
    `${API_URL}/api/shows?filters[datetime][$gte]=${DATETIME_NOW}&filters[play][scene][name][$eq]=Зал «Маленькая Луна»&populate=play.scene&sort[0]=datetime&pagination[pageSize]=3`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export next shows")
}

async function exportChildrenStudioScene() {
  const result = await axios.get(
    `${API_URL}/api/plays?filters[scene][name][$eq]=Зал «Маленькая Луна»&populate=cover`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export studio scene")
}

async function exportChildrenStudioPhoto() {
  const result = await axios.get(
    `${API_URL}/api/assets/1?populate=gallery,gallery.media`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export studio photos")
}

async function exportHistoryTheathrePhoto() {
  const result = await axios.get(
    `${API_URL}/api/assets/2?populate=gallery,gallery.media`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export studio photos")
}

async function exportComingShow(showID) {
  const result = await axios.get(
    `${API_URL}/api/shows?filters[datetime][$gte]=${DATETIME_NOW}&sort[0]=datetime&filters[play][id][$eq]=${showID}&populate=play.cover,play.scene`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export coming show")
}

async function exportShowData(showID) {
  const result = await axios.get(
    `${API_URL}/api/plays/${showID}?populate=cover,roles.actors.cover,gallery,pressItems,directors.person,comments,scene`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export show data")
}

async function exportTicketData(showID) {
  const result = await axios.get(
    `${API_URL}/api/shows?filters[datetime][$gte]=${DATETIME_NOW}&sort[0]=datetime&filters[play][id][$eq]=${showID}&populate=play,play.scene`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export ticket data")
}

async function createNewComment(data) {
  const result = await axios.post(`${API_URL}/api/comments`, { data })

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't create new comment")
}

async function exportRomashkaData() {
  const result = await axios.get(
    `${API_URL}/api/seasons?populate=awards.artist.cover&sort[0]=year:desc`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export romashka awards data")
}

async function exportPressData(year) {
  const pressFilter = year
    ? `filters[date][$gte]=${year}-01-01&filters[date][$lt]=${year + 1}-01-01&`
    : ''
  const result = await axios.get(
    `${API_URL}/api/press-items?${pressFilter}sort[0]=datetime:desc`
  )

  if (result.status === 200) {
    return result.data
  }

  throw new Error("Can't export press data")
}

function getActorsFilter(editValue) {
  let filters = ''

  if (editValue.actors.length > 0) {
    filters += `filters[positions][category][$eq]=${editValue.actors}&`
  }

  if (editValue.guest === true) {
    filters += `filters[isGuest][$eq]=true&`
  }

  filters += filters[filters.length - 1] !== '&' ? '&' : ''
  return `${API_URL}/api/persons?${filters}populate=cover`
}

async function exportShowActors(editValue) {
  const url = getActorsFilter(editValue)
  const result = await axios.get(url)

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export troupe actors data")
}

async function exportSceneDocs() {
  const result = await axios.get(
    `${API_URL}/api/scene-page?populate=bigScene.photos,bigScene.docs.file,smallScene.photos,smallScene.docs.file,childrenScene.photos,childrenScene.docs.file`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export scene docs")
}

async function exportGetDetailInfoActor(id) {
  const result = await axios.get(
    `${API_URL}/api/persons/${id}?populate=cover,play_roles.play.shows,play_roles.play.cover,movies,press_items,gallery.media,romashka_awards.season,play_roles.play.scene`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export actor data")
}

async function searchPosters(date, lastDate, filtPathc, seachEl) {
  const result = await axios.get(
    `${API_URL}/api/shows?filters[datetime][$gte]=${date}&filters[datetime][$lt]=${lastDate}&sort[0]=datetime&${filtPathc}populate=play.scene&filters[play][title][$containsi]=${seachEl}`
  )

  if (result.status === 200) {
    return result.data
  }

  throw new Error("Can't export studio photos")
}

async function searchNews(date, lastDate, seachEl) {
  const result = await axios.get(
    `${API_URL}/api/articles?filters[publishedAt][$gte]=${date}&filters[publishedAt][$lt]=${lastDate}&sort[0]=publishedAt:desc&filters[title][$containsi]=${seachEl}&populate=cover,shows.play.scene,gallery.media`
  )

  if (result.status === 200) {
    return result.data
  }
}

async function lastNews() {
  const result = await axios.get(
    `${API_URL}/api/articles?sort[0]=publishedAt:desc&populate=cover,shows.play.scene,gallery.media&pagination[pageSize]=4`
  )

  if (result.status === 200) {
    return result.data
  }
}
async function news(calDate, calLastDate) {
  const result = await axios.get(
    `${API_URL}/api/articles?filters[publishedAt][$gte]=${calDate}&filters[publishedAt][$lt]=${calLastDate}&sort[0]=publishedAt:desc&populate=cover,shows.play.scene,gallery.media`
  )

  if (result.status === 200) {
    return result.data
  }
}

async function newsElNews(id_article) {
  const result = await axios.get(
    `${API_URL}/api/articles${
      '/' + id_article
    }?sort[0]=publishedAt:desc&populate=cover,shows.play.scene,gallery.media`
  )

  if (result.status === 200) {
    return result.data
  }
}

async function documents(activeFilter) {
  const result = await axios.get(
    `${API_URL}/api/docs?filters[category][title][$eq]=${activeFilter}&populate=file`
  )

  if (result.status === 200) {
    return result.data
  }
}

async function exportContacData() {
  const result = await axios.get(
    `${API_URL}/api/contacts-page?populate=contact.person,contact.phone,contact.email`
  )

  if (result.status === 200) {
    return result.data.data.contact
  }

  throw new Error("Can't export contact data")
}

async function getUserAgreementLink() {
  const result = await axios.get(`${API_URL}/api/user-agreement?populate=pdf`)

  if (result.status === 200) {
    return result.data.data.pdf.url
  }

  throw new Error("Can't get user agreement link")
}

async function getPartnersData() {
  const result = await axios.get(`${API_URL}/api/partner?populate=partner.logo`)

  if (result.status === 200) {
    return result.data.data.partner
  }

  throw new Error("Can't get partners data")
}

export const api = {
  exportMainPage,
  exportShows,
  exportArticles,
  exportPlayShows,
  exportChildrenStudioNextShow,
  exportChildrenStudioScene,
  exportChildrenStudioPhoto,
  exportHistoryTheathrePhoto,
  exportComingShow,
  exportTicketData,
  exportShowData,
  createNewComment,
  exportRomashkaData,
  exportPressData,
  exportShowActors,
  exportSceneDocs,
  exportGetDetailInfoActor,
  searchPosters,
  searchNews,
  lastNews,
  news,
  newsElNews,
  documents,
  exportContacData,
  getUserAgreementLink,
  getPartnersData,
}
