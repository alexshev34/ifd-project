import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './../UserProfile.module.css'

const UserHeader = () => {

    const handleLogout = () => {
        localStorage.clear();
        document.location.href="http://invest-for.surge.sh";
    }
    return(
        <header className={s.header}>
                <div className={s.container}>
                    <div className={s.header__wrapper}>
                        <div className={s.header__logo}>
                            <NavLink to="/home">
                            <img src="https://i.ibb.co/F8nfbKL/logo.png" alt="Логотип" />
                            </NavLink>
                        </div>
                        <nav className={s.header__navigation}>
                            <ul className={s['header__navigation-list']}>
                                <li className={s['header__navigation-item']}>
                                    <NavLink to="/top-stock" className={s['header__navigation-link']}>Оценка акций</NavLink>
                                </li>
                                <li className={s['header__navigation-item']}>
                                    <NavLink to="/portfolio" className={s['header__navigation-link']}>Оценка портфеля</NavLink>
                                </li>
                                <li className={s['header__navigation-item']}>
                                    <NavLink to="/appraisal" className={s['header__navigation-link']}>Рекомендации/прогнозы</NavLink>
                                </li>
                                <li className={s['header__navigation-item']}>
                                <button onClick={handleLogout} className={s.header__logout}>Выйти</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
        </header>
    )
}

export default UserHeader;