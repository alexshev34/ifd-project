import React from 'react';
import s from './ProfileInformation.module.css'

const ProfileInformation = () => {
    return(
        <>
        <header className={s.header}>
        <div className={s.container}>
            <div className={s.header__wrapper}>
                <div className={s.header__logo}>
                    <img src="https://i.ibb.co/F8nfbKL/logo.png"
                        alt="Логотип" />
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
                    <button className={s.header__logout}>Выйти</button>
                </div>
            </div>
        </div>
    </header>
    <main>
        <section className={s.portfolio}>
            <div className={s.container}>
                <h1 className={s.portfolio__title}>Заполнение портфеля</h1>
                <p className={s.portfolio__active}>Тип актива:</p>
                <ul className={s.portfolio__list}>
                    <li className={s.portfolio__item}>
                        <p className={s.portfolio__text}>Акция</p>
                        <p className={s.portfolio__text}>Облигация</p>
                        <p className={s.portfolio__text}>Прочие</p>
                    </li>
                    <li className={s.portfolio__item}>
                        <select className={s.portfolio__select1} name="" id="">
                            <option value="Название компании">Название компании</option>
                        </select><br />
                        <select className={s.portfolio__select1} name="" id="">
                            <option value="Название компании">Название компании</option>
                        </select><br />
                        <select className={s.portfolio__select1} name="" id="">
                            <option value="Название компании">Выберите тип</option>
                        </select>
                    </li>
                    <li className={s.portfolio__item}>
                        <select className={s.portfolio__select2} name="" id="">
                            <option value="Количество">Количество</option>
                        </select><br />
                        <select className={s.portfolio__select2} name="" id="">
                            <option value="Количество">Количество</option>
                        </select><br />
                        <select className={s.portfolio__select2} name="" id="">
                            <option value="Количество">Количество</option>
                        </select>
                    </li>
                </ul>
            </div>
        </section>
        <section className={s.personal}>
            <div className={s.container}>
                <h1 className={s.personal__title}>Персональная информация</h1>
                <ul className={s['personal__list-1']}>
                    <li className={s.personal__item}>
                        <p className={s.personal__age}>Возраст</p>
                    </li>
                    <li className={s.personal__item}>
                        <select className={s['personal__select-1']} name="" id="">
                            <option value="Количество">Количество</option>
                        </select>
                    </li>
                </ul>
                <p className={s.personal__income}>Доходы:</p>
                <ul className={s['personal__list-2']}>
                    <li className={s.personal__item}>
                        <p className={s.personal__text}>Суммарный заработок в месяц</p>
                        <p className={s.personal__text}>Планируемая сумма накоплений в месяц</p>
                        <p className={s.personal__text}>Планируемая сумма накоплений в год</p>
                    </li>
                    <li className={s.personal__item}>
                        <select className={s.personal__select} name="" id="">
                            <option value="Количество">Количество</option>
                        </select><br />
                        <select className={s.personal__select} name="" id="">
                            <option value="Количество">Количество</option>
                        </select><br />
                        <select className={s.personal__select} name="" id="">
                            <option value="Количество">Количество</option>
                        </select>
                    </li>
                </ul>
            </div>
        </section>
    </main>
    </>
    )
}

export default ProfileInformation;