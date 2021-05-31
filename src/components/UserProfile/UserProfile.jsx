import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './UserProfile.module.css'
import Recommendation from './Recommendation/Recommendation';
const UserProfile = () => {
    return (
        <>
            <Recommendation/>
            <main>
               <section className={s.sales}>
                    <div className={s.container}>
                        <h2 className={s.sales__title}>Оценка акций</h2>
                        <ul className={s.sales__list}>
                            <li className={s.sales__item}>
                                <NavLink className={s.test1} to="/top-stock">
                                    <p className={s.sales__text}>ТОП акций<br /> по дивидендам</p>
                                    <div className={s.sales__img}>
                                        <img src="https://i.ibb.co/XsrTbN1/income-growth-revenue-increase-stock-market-concept-with-coin-stack-wallet-dollars-money-bag-191217.jpg" alt=""/>
                                    </div>
                                </NavLink>
                            </li>
                            <li className={s.sales__item}>
                                <NavLink className={s.test1} to="/top-stock">
                                    <p className={s.sales__text}>ТОП акций<br /> по стоимости</p>
                                    <div className={s.sales__img}>
                                        <img src="https://i.ibb.co/ctLCvLm/money-profit-growth-up-cash-benefit-economic-inflation-increase-212005-456-1.jpg" alt="" />
                                    </div>
                                </NavLink>
                            </li>
                            <li className={s.sales__item}>
                                <NavLink className={s.test1} to="/top-stock">
                                    <p className={s.sales__text}>ТОП акций<br /> по объёму</p>
                                    <div className={s.sales__img}>
                                        <img src="https://i.ibb.co/prbPJBJ/Sustainable-business-abstract-concept-vector-illustration-Environmentally-friendly-smart-city-save-e.jpg" alt="" />
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={s.risk}>
                    <div className={s.container}>
                        <h2 className={s.risk__title}>Оценка риск-профиля портфеля</h2>
                        <ul className={s.risk__list}>
                            <li className={s.risk__item}>
                                <NavLink className={s.test1} to="/portfolio">
                                    <p className={s.risk__text}>Консервативный</p>
                                    <div className={s.risk__img}>
                                        <img src="https://i.ibb.co/pZxGYbf/image-4.png" alt="" />
                                    </div>
                                </NavLink>
                            </li>
                            <li className={s.risk__item}>
                                <NavLink className={s.test1} to="/portfolio">
                                    <p className={s.risk__text}>Умеренный</p>
                                    <div className={s.risk__img}>
                                        <img src="https://i.ibb.co/1Zf50Bt/image-5.png" alt="" />
                                    </div>
                                </NavLink>
                            </li>
                            <li className={s.risk__item}>
                                <NavLink className={s.test1} to="/portfolio">
                                    <p className={s.risk__text}>Агрессивный</p>
                                    <div className={s.risk__img}>
                                        <img src="https://i.ibb.co/CJsqkXS/image-3.png" alt="" />
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={s.recomendation}>
                    <div className={s.container}>
                        <h2 className={s.recomendation__title}>Рекомендации/прогнозы</h2>
                        <ul className={s.recomendation__list}>
                            <li className={s.recomendation__item}>
                                <NavLink className={s.test1} to="/worksheet">
                                    <p className={s.recomendation__text}>Рекомендации на основе текущего портфеля</p>
                                    <div className={s.recomendation__img}>
                                        <img src="https://i.ibb.co/h9XW0cb/7934-1.png" alt="" />
                                    </div>
                                </NavLink>
                            </li>
                            <li className={s.recomendation__item}>
                                <NavLink className={s.test1} to="/test">
                                    <p className={s.recomendation__text}>Варианты<br/> готовых портфелей</p>
                                    <div className={s.recomendation__img}>
                                        <img src="https://i.ibb.co/8YKdJyj/7934-2-1.png" alt="" />
                                    </div>
                                </NavLink>
                            </li>
                            <li className={s.recomendation__item}>
                                <NavLink className={s.test1} to="/appraisal">
                                    <p className={s.recomendation__text}>Рекомендации<br /> на основе предпочтений</p>
                                    <div className={s.recomendation__img}>
                                        <img src="https://i.ibb.co/S7GrHcM/7934-1.png" alt="" />
                                    </div>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </section>

            </main>
        </>
    )
}

export default UserProfile;