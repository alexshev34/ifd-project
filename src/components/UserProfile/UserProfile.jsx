import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './UserProfile.module.css'

const UserProfile = () => {

    const handleLogout = () => {
        localStorage.clear();
        document.location.href="http://localhost:3000/";
        // event.preventDefault();
    }
    return (
        <>
            <header className={s.header}>
                <div className={s.container}>
                    <div className={s.header__wrapper}>
                        <div className={s.header__logo}>
                            <img src="https://i.ibb.co/F8nfbKL/logo.png" alt="Логотип" />
                        </div>
                        <nav className={s.header__navigation}>
                            <ul className={s['header__navigation-list']}>
                                <li className={s['header__navigation-item']}>
                                    <a href="#" className={s['header__navigation-link']}>Оценка акций</a>
                                </li>
                                <li className={s['header__navigation-item']}>
                                    <a href="#" className={s['header__navigation-link']}>Оценка портфеля</a>
                                </li>
                                <li className={s['header__navigation-item']}>
                                    <a href="#" className={s['header__navigation-link']}>Рекомендации/прогнозы</a>
                                </li>
                            </ul>
                        </nav>
                        <div className={s.header__btn}>
                            <button onClick={handleLogout} className={s.header__logout}>Выйти</button>
                        </div>
                    </div>
                    <div className={s.header__preview}>
                        <h1 className={s.header__title}>Заполни необходимые параметры по портфелю и предпочтениям для подбора рекомендаций</h1>
                        <p className={s.header__text}>Выбери интересующий инструмент и действуй!</p>
                        <NavLink to="/worksheet" className={s.btn__fill}>Заполнить</NavLink>
                    </div>
                </div>
            </header>
            <main>
                <section className={s.sales}>
                    <div className={s.container}>
                        <h2 className={s.sales__title}>Оценка акций</h2>
                        <ul className={s.sales__list}>
                            <li className={s.sales__item}>
                                <p className={s.sales__text}>ТОП акций<br /> по дивидендам</p>
                                <div className={s.sales__img}></div>
                            </li>
                            <li className={s.sales__item}>
                                <p className={s.sales__text}>ТОП акций<br /> по стоимости</p>
                                <div className={s.sales__img}></div>
                            </li>
                            <li className={s.sales__item}>
                                <p className={s.sales__text}>ТОП акций<br /> по объёму</p>
                                <div className={s.sales__img}></div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={s.risk}>
                    <div className={s.container}>
                        <h2 className={s.risk__title}>Оценка риск-профиля портфеля</h2>
                        <ul className={s.risk__list}>
                            <li className={s.risk__item}>
                                <p className={s.risk__text}>Консервативный</p>
                                <div className={s.risk__img}></div>
                            </li>
                            <li className={s.risk__item}>
                                <p className={s.risk__text}>Умеренный</p>
                                <div className={s.risk__img}></div>
                            </li>
                            <li className={s.risk__item}>
                                <p className={s.risk__text}>Агрессивный</p>
                                <div className={s.risk__img}></div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={s.recomendation}>
                    <div className={s.container}>
                        <h2 className={s.recomendation__title}>Рекомендации/прогнозы</h2>
                        <ul className={s.recomendation__list}>
                            <li className={s.recomendation__item}>
                                <p className={s.recomendation__text}>Рекомендации на основе текущего портфеля</p>
                                <div className={s.recomendation__img}></div>
                            </li>
                            <li className={s.recomendation__item}>
                                <p className={s.recomendation__text}>Варианты готовых портфелей</p>
                                <div className={s.recomendation__img}></div>
                            </li>
                            <li className={s.recomendation__item}>
                                <p className={s.recomendation__text}>Рекомендации<br /> на основе предпочтений</p>
                                <div className={s.recomendation__img}></div>
                            </li>
                        </ul>
                    </div>
                </section>

            </main>
        </>
    )
}

export default UserProfile;