import React from 'react';
import PosterEl from "./posterEl";
import styles from './postercontent.module.scss';

let PosterContent = (props) => {   
            if(props.filterState.items.length === 0) {
               return <div className={styles.antiBlock}>По указанным фильтрам ничего не найдено</div>
            }  else {
                return (
                <section>
                    {props.filterState.items.map(item => ( 
                        <PosterEl
                        key={item.id}
                        date={parseInt(item.attributes.date_str.match(/\d+/))}
                        time={item.attributes.time}
                        day={props.getWeekDay(item.attributes.date)}
                        title={item.attributes.play.data.attributes.title} 
                        premier={item.attributes.play.data.attributes.isPremiere ? 'ПРЕМЬЕРА' : ''}
                        location={item.attributes.place}
                        rating={item.attributes.play.data.attributes.rating}
                        buy={item.attributes.tickets_link}
                        /> 
                    ))}
                </section>

                )
        }
    }
    
export default PosterContent;