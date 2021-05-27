import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Recommendation.module.css';
const Recommendation = () =>{
    return(
        <div className={s.container}>
            <div className={s.header__preview}>
                <h1 className={s.header__title}>Заполни необходимые параметры по портфелю и предпочтениям для подбора рекомендаций</h1>
                <p className={s.header__text}>Выбери интересующий инструмент и действуй!</p>
                <NavLink to="/worksheet" className={s.btn__fill}>Заполнить</NavLink>
            </div>
        </div>
    );
}

export default Recommendation;
