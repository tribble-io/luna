import presidentImg from './img/theater-president.webp'
import artisticDirectorImg from './img/artistic-director.webp'

export const content = [
  {
    name: 'Евгений Владимирович Герасимов',
    src: artisticDirectorImg,
    id: '35',
    role: 'Художественный руководитель',
    rank: 'Народный артист России',
    titleLink: 'Перейти в профиль художественного руководителя',
  },
  {
    name: 'Сергей Борисович Проханов',
    src: presidentImg,
    id: '70',
    role: 'Президент театра',
    rank: 'Народный артист России, заслуженный деятель искусств России',
    titleLink: 'Перейти в профиль президента театра',
  },
]

export const positionsArrayFilters = [
  'труппа',
  'режиссеры',
  'продюсеры',
  'хореографы и балетмейстеры',
  'музыка и звук',
  'оформление',
]
