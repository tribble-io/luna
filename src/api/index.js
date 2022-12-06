import axios from "axios";
const playsApi = "http://theatre.restomatik.ru:1337";

async function exportShows() {
  const result = await axios.get(
    `${playsApi}/api/shows` +
      `?filters[date][$gt]=${new Date().toISOString().slice(0, 10)}` +
      `&sort[0]=date&populate=play.cover,play.director`
  );

  if (result.status === 200) {
    return result.data.data;
  }

  throw new Error("Can't export shows");
}

async function exportArticles() {
  const result = await axios.get(
    `${playsApi}/api/articles?sort[0]=publishedAt%3Adesc&populate=cover&pagination[pageSize]=3`
  );

  if (result.status === 200) {
    return result.data.data;
  }

  throw new Error("Can't export articles");
}

function getUrl(editValue) {
  let filters = "";

  if (editValue.title.length > 0) {
    filters += `filters[title][$containsi]=${editValue.title}&`;
  }

  if (editValue.scene.length > 0) {
    filters += `filters[scene][$eq]=${editValue.scene}&`;
  }

  if (editValue.rating === true) {
    filters += `filters[rating][$lt]=16&`;
  }

  if (editValue.isPremiere === true) {
    filters += `filters[isPremiere][$eq]=true&`;
  }

  filters += filters[filters.length - 1] !== "&" ? "&" : "";
  return `${playsApi}/api/plays?${filters}populate=cover`;
}

async function exportPlayShows(editValue) {
  const url = getUrl(editValue);
  const result = await axios.get(url);

  if (result.status === 200) {
    return result.data.data;
  }

  throw new Error("Can't export plays shows");
}

async function exportChildrenStudioNextShow() {
  const result = await axios.get(
    `${playsApi}/api/shows?filters[date][$gte]=${new Date()
      .toISOString()
      .slice(0, 10)}&filters[place][$eq]=Зал "Маленькая Луна"&populate=play`
  );

  if (result.status === 200) {
    return result.data.data;
  }

  throw new Error("Can't export next shows");
}

async function exportChildrenStudioScene() {
  const result = await axios.get(
    `${playsApi}/api/plays?filters[scene][$eq]=Зал "Маленькая Луна"&populate=cover`
  );

  if (result.status === 200) {
    return result.data.data;
  }

  throw new Error("Can't export studio scene");
}

async function exportChildrenStudioPhoto() {
  const result = await axios.get(
    `${playsApi}/api/assets/1?populate=gallery,gallery.media`
  );

  if (result.status === 200) {
    return result.data.data;
  }

  throw new Error("Can't export studio photos");
}

export const api = {
  exportShows,
  exportArticles,
  exportPlayShows,
  exportChildrenStudioNextShow,
  exportChildrenStudioScene,
  exportChildrenStudioPhoto,
};
