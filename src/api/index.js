import axios from 'axios'
export const API_URL = 'http://theatre.restomatik.ru:1337'

const TODAY_DAY = new Date().toISOString().slice(0, 10)

async function exportShows() {
  const result = await axios.get(
    `${API_URL}/api/shows?filters[date][$gt]=${TODAY_DAY}&sort[0]=date&populate=play.cover,play.director,play.scene`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export shows")
}

async function exportArticles() {
  const result = await axios.get(
    `${API_URL}/api/articles?sort[0]=publishedAt%3Adesc&populate=cover&pagination[pageSize]=3`
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
  return `${API_URL}/api/plays?${filters}populate=cover`
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
    `${API_URL}/api/shows?filters[date][$gte]=${TODAY_DAY}&filters[play][scene][name][$eq]=Зал «Маленькая Луна»&populate=play.scene`
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
    `${API_URL}/api/shows?filters[date][$gte]=${TODAY_DAY}&sort[0]=date&filters[play][id][$eq]=${showID}&populate=play.cover,play.scene`
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

async function createNewComment(data) {
  const result = await axios.post(`${API_URL}/api/comments`, { data })

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't create new comment")
}

async function exportRomaskaData() {
  const result = await axios.get(
    `${API_URL}/api/seasons?populate=awards.artist.cover&sort[0]=year:desc`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export romaska awards data")
}

async function exportPressData(year) {
  const pressFilter = year
    ? `filters[date][$gte]=${year}-01-01&filters[date][$lt]=${year + 1}-01-01&`
    : ''
  const result = await axios.get(
    `${API_URL}/api/press-items?${pressFilter}sort[0]=date:desc`
  )

  if (result.status === 200) {
    return result.data
  }

  throw new Error("Can't export press data")
}

async function exportShowActors(filter) {
  const result = await axios.get(
    `${API_URL}/api/persons?filters[positions][category][$eq]=${filter}&filters[isGuest][$eq]=false&populate=cover`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export show data")
}

async function exportShowPersons() {
  const result = await axios.get(
    `${API_URL}/api/persons?filters[isGuest][$eq]=true&populate=cover`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export persons data")
}

async function exportSceneDocs() {
  const result = await axios.get(`${API_URL}/api/assets/3?populate=docs.file`)

  if (result.status === 200) {
    return result.data.data.docs
  }

  throw new Error("Can't export scene docs")
}

async function exportGetDetailInfoActor(id) {
  const result = await axios.get(
    `${API_URL}/api/persons/${id}?populate=cover,play_roles.play.shows,play_roles.play.cover,movies,press_items,gallery.media,romashka_awards.season`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export actor data")
}

export const api = {
  exportShows,
  exportArticles,
  exportPlayShows,
  exportChildrenStudioNextShow,
  exportChildrenStudioScene,
  exportChildrenStudioPhoto,
  exportHistoryTheathrePhoto,
  exportComingShow,
  exportShowData,
  createNewComment,
  exportRomaskaData,
  exportPressData,
  exportShowActors,
  exportShowPersons,
  exportSceneDocs,
  exportGetDetailInfoActor,
}
