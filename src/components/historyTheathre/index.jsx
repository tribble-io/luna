import React from 'react'
import styles from './historyTheathre.module.scss'

import group1 from './img/group1.svg'
import group2 from './img/group2.svg'
import group3 from './img/group3.svg'
import group4 from './img/group4.svg'
import ruk from './img/ruk.svg'
import prez from './img/prez.svg'
import tobAbs from './img/topAbs.svg'
import botAbs from './img/botAbs.svg'
import { PhotoSlider } from '../createElement'

class HistoryTheathre extends React.Component {
  constructor() {
    super()
    this.state = {
      items: [],
    }
  }

  componentDidMount() {
    fetch(
      `http://theatre.restomatik.ru:1337/api/assets/2?populate=gallery,gallery.media`
    )
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.data.attributes.gallery,
        })
        debugger
      })
  }

  render() {
    return (
      <section>
        <div className={styles.historyContainer}>
          <div className={styles.promoTage}>
            <h1>ИСТОРИЯ ТЕАТРА</h1>
            <div className={styles.promoImg_bl}>
              <div className={styles.promoImg}></div>
            </div>
          </div>

          <div className={styles.infoBlock_1}>
            <div className={styles.infoBlock_1_1}>
              <div>
                История "Театра Луны" берет начало в 1992 году со
                спектакля-концерта "Уникальный голос" студии фантастики «Луна»,
                основанной Сергеем Прохановым. Усилиями его и тех людей, которых
                он сплотил вокруг себя, очень скоро небольшой подвальчик в
                Большом Козихинском переулке рядом с Патриаршими прудами
                превратился в центр притяжения для театральной публики. Однако{' '}
                <span>
                  днем рождения "Театра Луны" считается дата — 14 февраля 1993
                  года
                </span>
                , когда Сергей Проханов представил московской театральной
                публике спектакль «Византия» по романтической трагедии Николая
                Гумилева «Отравленная туника».
              </div>
              <div>
                Роковая интрига, страсть, романтика, таинственность этой
                постановки мгновенно определили дальнейший стиль «Театра Луны».
              </div>
              <div className={styles.infoBlock_1_1_el_1}>
                <div></div>
              </div>
              <div>
                В 1994 году студия получила государственный статус и была
                преобразована в Московский театр «Театр Луны» под руководством
                Сергея Проханова.
              </div>
              <div className={styles.infoBlock_1_2_img_bl_2}>
                <div></div>
              </div>
            </div>
            <div className={styles.infoBlock_1_2}>
              <div className={styles.infoBlock_1_2_img_bl_1}>
                <div></div>
              </div>
              <div className={styles.infoBlock_1_2_img_bl_2}>
                <div></div>
              </div>
              <div>
                <p>
                  Само название театра говорит о его романтической
                  направленности. Луна — это самое близкое женское космическое
                  тело, которое притягивает всех нас. Она будоражит фантазию,
                  манит к себе, вызывая самые поэтические ассоциации.
                </p>

                <p>
                  «Театр Луны» с первого спектакля продемонстрировал незаурядное
                  мастерство, дерзость и смелость художественных замыслов,
                  редкое умение овладевать любым сценическим пространством.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.searchLogo}></div>
          <div className={styles.infoBlock_1_mob}>
            <div className={styles.infoBlock_1_1_mob}>
              <div>
                История "Театра Луны" берет начало в 1992 году со
                спектакля-концерта "Уникальный голос" студии фантастики «Луна»,
                основанной Сергеем Прохановым. Усилиями его и тех людей, которых
                он сплотил вокруг себя, очень скоро небольшой подвальчик в
                Большом Козихинском переулке рядом с Патриаршими прудами
                превратился в центр притяжения для театральной публики. Однако{' '}
                <span>
                  днем рождения "Театра Луны" считается дата — 14 февраля 1993
                  года
                </span>
                , когда Сергей Проханов представил московской театральной
                публике спектакль «Византия» по романтической трагедии Николая
                Гумилева «Отравленная туника».
              </div>
              <div>
                Роковая интрига, страсть, романтика, таинственность этой
                постановки мгновенно определили дальнейший стиль «Театра Луны».
              </div>

              <div className={styles.infoBlock_1_1_mob_1el}>
                <div></div>
              </div>

              <div>
                В 1994 году студия получила государственный статус и была
                преобразована в Московский театр «Театр Луны» под руководством
                Сергея Проханова.
              </div>

              <div className={styles.infoBlock_1_1_mob_2el}>
                <div></div>
              </div>

              <div>
                <p>
                  Само название театра говорит о его романтической
                  направленности. Луна — это самое близкое женское космическое
                  тело, которое притягивает всех нас. Она будоражит фантазию,
                  манит к себе, вызывая самые поэтические ассоциации.
                </p>

                <p>
                  «Театр Луны» с первого спектакля продемонстрировал незаурядное
                  мастерство, дерзость и смелость художественных замыслов,
                  редкое умение овладевать любым сценическим пространством.
                </p>
              </div>

              <div className={styles.infoBlock_1_1_mob_3el}>
                <div></div>
              </div>
            </div>
          </div>
          <div className={styles.searchLogoMob}></div>

          <div className={styles.infoBlock_2}>
            <div className={styles.infoBlock_2_1}>
              <div>
                <div className={styles.infoBlock_2_1_1111}>
                  <img src={group1} />
                </div>
                <p>
                  На «лунной» сцене родилось множество постановок, подаривших
                  зрителям яркие и запоминающиеся актёрские работы:
                </p>
                <p>
                  — «Византия» с прекрасной Ириной Метлицкой, «Ночь нежна», где
                  блистали Анатолий Ромашин, Сергей Виноградов, Дмитрий Певцов,
                  Марина Блэйк и будущая звезда театра Елена Захарова
                </p>
                <p>
                  — «Фауст» с незабываемым Анатолием Ромашиным и ироничным
                  Александром Резалиным
                </p>
              </div>
              <div>
                <div className={styles.infoBlock_2_1_2222}>
                  <img src={group2} />
                </div>
                <p>
                  — «Путешествие дилетантов» с нежной и хрупкой Ольгой Понизовой
                  и величественным Валентином Смирницким
                </p>
                <p>
                  — Мужественный, ослепительный Александр Македонский в
                  исполнении Андрея Соколова и пленительная, изящно-изысканная
                  Таис – Анна Терехова.
                </p>
              </div>
            </div>

            <div className={styles.infoBlock_2_2}>
              <div className={styles.infoBlock_2_2_el11}>
                <img src={group3} />
              </div>
              <div>
                На этой сцене делали первые «звездные» шаги Чулпан Хаматова
                («Сны маленького Робинзона») и Евгений Стычкин («Чарли Ча…»),
                дебютировала ученица Сергея Проханова Анастасия Стоцкая (мюзикл
                «Губы»). На сцене «Театра Луны» играли Никита Высоцкий, Юрий
                Чернов, Вера Сотникова и многие другие замечательные артисты.
              </div>
            </div>

            <div className={styles.infoBlock_2_3}>
              <div>
                При театре существует{' '}
                <span>детская театральная студия «Маленькая Луна»</span>,
                воспитанники которой постигают основы актерского мастерства и
                имеют возможность выходить на сцену театра вместе с
                профессиональными актерами.
              </div>
              <div className={styles.infoBlock_2_3_el33}>
                <img src={group4} />
              </div>
              <div>Спектакль "Фанта-Инфанта"</div>
            </div>

            <div className={styles.infoBlock_2_4}>
              <div className={styles.infoBlock_2_4_el11}>
                <img src={ruk} />
              </div>
              <div>
                <div>
                  <p>
                    В 2004 году любимая зрителями камерная «Луна» из уютного
                    гнезда на Патриарших переселилась в большое, современное,
                    прекрасно оборудованное театральное здание на Малой Ордынке.
                    Появились новые авторы, режиссеры, жанры, подрастает
                    талантливая молодежь.
                  </p>
                  <p>
                    В июле 2022 года художественным руководителем театра стал
                    народный артист России Евгений Владимирович Герасимов.
                    Сергей Борисович Проханов занял пост Президента театра.
                  </p>
                </div>
                <div className={styles.inf}>
                  <p>Евгений Владимирович Герасимов</p>
                  <p>Художественный руководитель</p>
                  <p>Народный артист России</p>
                </div>
              </div>
            </div>
            <div className={styles.infoBlock_2_4_mob}>
              <div>
                <p>
                  В 2004 году любимая зрителями камерная «Луна» из уютного
                  гнезда на Патриарших переселилась в большое, современное,
                  прекрасно оборудованное театральное здание на Малой Ордынке.
                  Появились новые авторы, режиссеры, жанры, подрастает
                  талантливая молодежь.
                </p>
                <p>
                  В июле 2022 года художественным руководителем театра стал
                  народный артист России Евгений Владимирович Герасимов. Сергей
                  Борисович Проханов занял пост Президента театра.
                </p>
              </div>
              <div className={styles.infoBlock_2_4_mob_art}>
                <div>
                  <div className={styles.infoBlock_2_4_mob_art11}>
                    <img src={ruk} />
                  </div>
                  <p>Народный артист России</p>
                </div>
                <div className={styles.inf}>
                  <p>Евгений Владимирович Герасимов</p>
                  <p>Художественный руководитель</p>
                </div>
              </div>
            </div>
            <div className={styles.infoBlock_2_4}>
              <div className={styles.infoBlock_2_44_el11}>
                {' '}
                <img src={prez} />
              </div>
              <div>
                <div></div>
                <div className={styles.inf_1}>
                  <p>Сергей Борисович Проханов</p>
                  <p>Президент театра</p>
                  <p>
                    Народный артист России, заслуженный деятель искусств России
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.infoBlock_2_4_mob}>
              <div></div>
              <div className={styles.infoBlock_2_4_mob_art}>
                <div>
                  <div className={styles.infoBlock_2_4_mob_art22}>
                    <img src={prez} />
                  </div>
                  <p>Президент Театра</p>
                </div>
                <div className={styles.inf_1}>
                  <p>Сергей Борисович Проханов</p>
                  <p>
                    Народный артист России, заслуженный деятель искусств России
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.historyQuote}>
            <img src={tobAbs} />
            <h2>
              «Луна» по-прежнему каждый вечер зажигает для зрителей свой
              загадочный и манящий свет.
            </h2>
            <img src={botAbs} />
          </div>

          <div className={styles.infoBlock_2_5}>
            <div>
              <h2 className={styles.infoBlock_2_5_tage}>
                История здания «Театра Луны»
              </h2>
              <p className={styles.infoBlock_2_5_inf}>
                Здание в стиле модерн было спроектировано архитектором И.И.
                Кондаковым и заложено в 1910 году. Открытие состоялось в 1912
                году и в нем располагался "Дом Товарищества Учительского
                института".
              </p>
              <p className={styles.infoBlock_2_5_infName}>
                Архитектор И. И. Кондаков
              </p>
              <div className={styles.infoBlock_2_5_year}>
                <p>1910 </p>
                <p>год основания</p>
              </div>
            </div>
            <div className={styles.infoBlock_2_5_img}></div>
          </div>

          <div className={styles.infoBlock_2_5_mob}>
            <h2 className={styles.infoBlock_2_5_tage}>
              История здания «Театра Луны»
            </h2>
            <p className={styles.infoBlock_2_5_inf}>
              Здание в стиле модерн было спроектировано архитектором И.И.
              Кондаковым и заложено в 1910 году. Открытие состоялось в 1912 году
              и в нем располагался "Дом Товарищества Учительского института".
            </p>
            <div className={styles.infoBlock_2_5_img}></div>
            <p className={styles.infoBlock_2_5_infName}>
              Архитектор И. И. Кондаков
            </p>
            <div className={styles.infoBlock_2_5_year}>
              <p>1910 </p>
              <p>год основания</p>
            </div>
          </div>

          <div className={styles.infoBlock_2_6}>
            <div></div>
          </div>

          <div className={styles.infoBlock_2_7}>
            <div>
              <div className={styles.infoBlock_2_7_info_1}>
                На строительство здания{' '}
                <span>средства собирали по всей стране</span>, продавая открытки
                с видами памятников и изображением произведений мирового
                искусства. Однако, большую часть средств дали благотворители, а
                не открытки. Но сумма сбора от их продаж позволила купить
                библиотеку и меблировку для этого учреждения.
              </div>
              <div className={styles.infoBlock_2_7_info_2}>
                <p>улица Малая Ордынка</p>
                <div className={styles.infoBlock_2_7_img1}></div>
              </div>
            </div>
            <div className={styles.infoBlock_2_7_img2}></div>
          </div>

          <div className={styles.infoBlock_2_7}>
            <div>
              <div className={styles.infoBlock_2_7_el}>
                <div>1950-1960</div>
                <div>
                  в здании театра был райвоенкомат Москворецкого района Москвы
                </div>
              </div>
              <div className={styles.infoBlock_2_7_el}>
                <div>1970-1980</div>
                <div>
                  при клубе Первой образцовой типографии имени А.А. Жданова,
                  здесь располагался оркестр русских народных инструментов
                </div>
              </div>
              <div className={styles.infoBlock_2_7_el}>
                <div>1990-e</div>
                <div>
                  в здании было училище №28, где готовили электромонтажников, а
                  также клуб завода "Гознак" и "Театр Комедии"
                </div>
              </div>
            </div>
          </div>

          <div className={styles.promoTage2}>
            <div className={styles.promoImg2}></div>
          </div>

          <div className={styles.infoBlock_2_8}>
            <div>
              <div className={styles.infoBlock_2_8_img22}>
                <div className={styles.infoBlock_2_8_img2}></div>
              </div>
              <div className={styles.infoBlock_2_8_block_el_2}>
                <div className={styles.infoBlock_2_8_txt}>
                  В 2004 году Правительство Москвы передало здание «Театру
                  Луны», куда труппа переехали из подвального помещения в
                  Большом Козихинском переулке.
                </div>
                <div className={styles.infoBlock_2_8_img23}>
                  <div className={styles.infoBlock_2_8_img1}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.archivePhotoTage}>АРХИВНЫЕ ФОТОГРАФИИ</div>
          <div className={styles.infoBlock_2_9}>
            <PhotoSlider items={this.state.items} />
          </div>
        </div>
      </section>
    )
  }
}

export default HistoryTheathre
