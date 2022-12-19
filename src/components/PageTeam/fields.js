import presidentImg from './img/theater-president.webp'
import artisticDirectorImg from './img/artistic-director.webp'

export const content = [
  {
    name: 'Евгений Владимирович Герасимов',
    src: artisticDirectorImg,
    id: '35',
    role: 'Художественный руководитель',
    rank: 'Народный артист России',
  },
  {
    name: 'Сергей Борисович Проханов',
    src: presidentImg,
    id: '70',
    role: 'Президент театра',
    rank: 'Народный артист России, заслуженный деятель искусств России',
  },
]

export const positionsArrayFilters = [
  'труппа',
  'приглашенные артисты',
  'режиссеры',
  'режиссеры-ассистенты',
  'драматурги художники',
  'музыка',
  'оркестр',
  'хореографы и балетмейстеры',
]
