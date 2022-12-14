import axios from 'axios'
export const API_URL = 'http://theatre.restomatik.ru:1337'

const TODAY_DAY = new Date().toISOString().slice(0, 10)

async function exportShows() {
  const result = await axios.get(
    `${API_URL}/api/shows?filters[date][$gt]=${TODAY_DAY}&sort[0]=date&populate=play.cover,play.director`
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

function getUrl(editValue) {
  let filters = ''

  if (editValue.title.length > 0) {
    filters += `filters[title][$containsi]=${editValue.title}&`
  }

  if (editValue.scene.length > 0) {
    filters += `filters[scene][$eq]=${editValue.scene}&`
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
  const url = getUrl(editValue)
  const result = await axios.get(url)

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export plays shows")
}

async function exportChildrenStudioNextShow() {
  const result = await axios.get(
    `${API_URL}/api/shows?filters[date][$gte]=${TODAY_DAY}&filters[place][$eq]=Зал "Маленькая Луна"&populate=play`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export next shows")
}

async function exportChildrenStudioScene() {
  const result = await axios.get(
    `${API_URL}/api/plays?filters[scene][$eq]=Зал "Маленькая Луна"&populate=cover`
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
    `${API_URL}/api/shows?filters[date][$gte]=${TODAY_DAY}&sort[0]=date&filters[play][id][$eq]=${showID}&populate=play.cover`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export coming show")
}

async function exportShowData(showID) {
  const result = await axios.get(
    `${API_URL}/api/plays/${showID}?populate=cover,roles.actors.cover,gallery,press,directors.person,comments`
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
    `${API_URL}/api/romaska-awards?populate=plays.role.actor.cover&sort=year:desc`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export romaska awards data")
}

async function exportPressData() {
  const result = await axios.get(`${API_URL}/api/press-items`)

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export press data")
}

async function exportShowActors(filter) {
  const result = await axios.get(
    `${API_URL}/api/actors?filters[positions][category][$eq]=${filter}&populate=cover`
  )

  if (result.status === 200) {
    return result.data.data
  }

  throw new Error("Can't export show data")
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
}
