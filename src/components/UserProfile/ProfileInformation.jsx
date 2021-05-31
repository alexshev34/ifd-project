import React, { useState } from 'react';
import s from './ProfileInformation.module.css'
import { useHttp } from '../../hooks/http.hookProfile';
import { NavLink } from 'react-router-dom';

const ProfileInformation = () => {
    const {loading, request, data, isFetching, array_test2} = useHttp()
    const [form, setForm] = useState({
        stock: '',
        col: ''
    })
    let array = [
        'MD Medical Group Investments PLC',
        'ИСКЧ',
        'Globaltrans Investment PLC',
        'Аэрофлот',
        'ГК Самолет',
        'Городские Инновационные Технологии',
        'ГТМ',
        'ДВМП',
        'КАМАЗ',
        'Корпорация ИРКУТ',
        'Мостотрест',
        'Мультисистема',
        'НКХП',
        'НМТП',
        'Объединенная авиастроительная корпорация',
        'ОВК',
        'РКК Энергия им.С.П.Королева',
        'Сегежа',
        'Совкомфлот',
        'ТрансКонтейнер',
        'Трубная Металлургическая Компания',
        'Etalon Group PLC',
        'Группа ЛСР',
        'ПИК',
        'Fix Price Group',
        'O\'Key Group SA',
        'Ozon Holdings PLC',
        'АбрауДюрсо',
        'Аптечная сеть 36,6',
        'Белуга Групп ПАО ао',
        'ГДР X5 RetailGroup',
        'Группа Черкизово',
        'Детский Мир',
        'Красный Октябрь',
        'Лента',
        'М.Видео',
        'Магнит',
        'Обувь России',
        'РусАгро',
        'Русгрэйн',
        'Русская аквакультура',
        'СОЛЛЕРС',
        'Фармсинтез',
        'En+ Group',
        'Petropavlovsk PLC',
        'Polymetal',
        'Акрон',
        'АЛРОСА',
        'АЛРОСА-Нюрба',
        'Ашинский метзавод',
        'ВСМПО-АВИСМА',
        'Лензолото',
        'Магнитогорский металлургический комбинат',
        'Мечел',
        'Нижнекамскнефтехим',
        'НЛМК',
        'Норильский никель',
        'ПАО «КАЗАНЬОРГСИНТЕЗ»',
        'Полюс Золото',
        'Распадская',
        'РУСАЛ',
        'Русолово',
        'Русполимет',
        'Северсталь',
        'Селигдар',
        'ФосАгро',
        'ЧЗПСН',
        'ЧМК',
        'ЧТПЗ',
        'ЮУНК',
        'MAIL.RU',
        'Yandex',
        'АФК Система',
        'МТС',
        'Наука-Связь',
        'Ростелеком',
        'Таттелеком',
        'Центральный Телеграф',
        'QIWI',
        'TCS Group',
        'Банк ВТБ',
        'Банк Санкт-Петербург',
        'МКБ',
        'Московская Биржа',
        'САФМАР',
        'Сбер Банк',
        'Вторая генерирующая компания оптового рынка электроэнергии',
        'Дагестанская энергосбытовая компания',
        'ДЭК',
        'Интер РАО ЕЭС',
        'Иркутскэнерго',
        'Калужская сбытовая компания',
        'Квадра',
        'Ленэнерго',
        'Мосэнерго',
        'МОЭСК',
        'МРСК Волги',
        'МРСК Северо-Запада',
        'МРСК Сибири',
        'МРСК Урала',
        'МРСК Центра',
        'МРСК Центра и Приволжья',
        'МРСК Юга',
        'Пермэнергосбыт',
        'Российские сети',
        'РусГидро',
        'ТГК-1',
        'ТГК-14',
        'ТГК-2',
        'ТНС энерго Воронеж',
        'ФСК ЕЭС',
        'Энел Россия',
        'Юнипро',
        'Башнефть',
        'Газпром',
        'Газпром нефть',
        'ЛУКОЙЛ',
        'НОВАТЭК',
        'Роснефть',
        'РуссНефть',
        'Сургутнефтегаз',
        'Татнефть',
        'Транснефть'
    ];

    const orderHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const data = await request ('http://51.116.170.180:80/add-stock', 'POST', { ...form })
        }
        catch (e) {

        }
    }
    return(
        <>
    <main>
        <form onSubmit={handleSubmit}>
            <section className={s.portfolio}>
                <div className={s.container}>
                    <h1 className={s.portfolio__title}>Заполнение портфеля</h1>
                    <ul className={s.portfolio__list}>
                        <li className={s.portfolio__item}>
                            <p className={s.portfolio__text}>Акция</p>
                        </li>
                        <li className={s.portfolio__item}>
                            <select className={s.portfolio__select1} name="stock" id="stock" onChange={orderHandler}>
                                <option selected>Компания</option>
                                { array.map((item) => (
                                 <option value={item}>{item}</option>
                        ))}
                                {/* <option value="MD Medical Group Investments PLC">MD Medical Group Investments PLC</option>
                                <option value="ИСКЧ">ИСКЧ</option>
                                <option value="Globaltrans Investment PLC">Globaltrans Investment PLC</option>
                                <option value="Аэрофлот">Аэрофлот</option>
                                <option value="ГК Самолет">ГК Самолет</option>
                                <option value="Городские Инновационные Технологии">Городские Инновационные Технологии</option>

                                <option value="ГТМ">ГТМ</option>
                                <option value="ДВМП">ДВМП</option>
                                <option value="КАМАЗ">КАМАЗ</option>
                                <option value="Мостотрест">Корпорация ИРКУТ</option>
                                <option value="Мультисистема">Мультисистема</option>
                                <option value="НКХП">НКХП</option>
                                <option value="НМТП">НМТП</option>
                                <option value="Объединенная авиастроительная корпорация">Объединенная авиастроительная корпорация</option>
                                <option value="ОВК">ОВК</option>
                                <option value="РКК Энергия им.С.П.Королева">РКК Энергия им.С.П.Королева</option>

                                <option value="Сегежа">Сегежа</option>
                                <option value="Совкомфлот">Совкомфлот</option>
                                <option value="ТрансКонтейнер">ТрансКонтейнер</option>
                                <option value="Трубная Металлургическая Компания">Трубная Металлургическая Компания</option>
                                <option value="Etalon Group PLC">Etalon Group PLC</option>
                                <option value="Группа ЛСР">Группа ЛСР</option>
                                <option value="ПИК">ПИК</option>

                                <option value="Fix Price Group">Fix Price Group</option>
                                <option value="O'Key Group SA">O'Key Group SA</option>
                                <option value="Ozon Holdings PLC">Ozon Holdings PLC</option>
                                <option value="АбрауДюрсо">АбрауДюрсо</option>
                                <option value="Аптечная сеть 36,6">Аптечная сеть 36,6</option>
                                <option value="Белуга Групп ПАО ао">Белуга Групп ПАО ао</option>
                                <option value="ГДР X5 RetailGroup">ГДР X5 RetailGroup</option>

                                <option value="Группа Черкизово">Группа Черкизово</option>
                                <option value="Детский Мир">Детский Мир</option>
                                <option value="Красный Октябрь">Красный Октябрь</option>
                                <option value="Лента">Лента</option>
                                <option value="М.Видео">М.Видео</option>
                                <option value="Магнит">Магнит</option>
                                <option value="Обувь России">Обувь России</option>

                                <option value="РусАгро">РусАгро</option>
                                <option value="Обувь России">Обувь России</option>
                                <option value="Обувь России">Обувь России</option>
                                <option value="Обувь России">Обувь России</option>
                                <option value="Обувь России">Обувь России</option>
                                <option value="Обувь России">Обувь России</option>
                                <option value="Обувь России">Обувь России</option>
                                <option value="Обувь России">Обувь России</option> */}
                                 </select>
                            <br />
                        </li>
                        <li className={s.portfolio__item}>
                            <input className={s.portfolio__select2} type="text" name="col" id="col" value={form.col} onChange={orderHandler} placeholder="Количество"/><br />
                        </li>
                    </ul>
                </div>
            </section>
            <section className={s.personal}>
                <div className={s.container}>
                    {/* <h1 className={s.personal__title}>Персональная информация</h1>
                    <ul className={s['personal__list-1']}>
                        <li className={s.personal__item}>
                            <p className={s.personal__age}>Возраст</p>
                        </li>
                        <li className={s.personal__item}>
                            <select className={s['personal__select-1']} name="age" id="age" onChange={orderHandler}>
                                <option selected>Количество</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </li>
                    </ul> */}
                    {/* <p className={s.personal__income}>Доходы:</p> */}
                    {/* <ul className={s['personal__list-2']}>
                        <li className={s.personal__item}>
                            <p className={s.personal__text}>Суммарный заработок в месяц</p>
                            <p className={s.personal__text}>Планируемая сумма накоплений в месяц</p>
                            <p className={s.personal__text}>Планируемая сумма накоплений в год</p>
                        </li>
                        <li className={s.personal__item}>
                            <input className={s.personal__select} type="text" placeholder="Количество:" name="month_income" id="month_income" onChange={orderHandler}/><br/>
                            <input className={s.personal__select} type="text" placeholder="Количество:" name="plan_month" id="plan_month" onChange={orderHandler}/><br/>
                            <input className={s.personal__select} type="text" placeholder="Количество:" name="plan_year" id="plan_year" onChange={orderHandler}/><br/>
                        </li>
                    </ul> */}
                    <button className={s.personal__btn} type="submit">Добавить</button>
                    <NavLink to="/analytics">Смотреть</NavLink>
                </div>
            </section>
        </form>
        {/* {isFetching ?
        <div className={s.container}>
                    <h1 className={s.reccomendation__title}>Рекомендации и прогнозы</h1>
                    <p className={s.reccomendation__text}>По вашим параметрам оптимальным вариантом будет</p>
                    <section className={s.reccomendation__table}>
                    <table>
                        <tr>
                            <th>Акция</th>
                            <th>Тикет</th>
                            <th>Цена</th>
                            <th>Количество</th>
                        </tr>
                    {array_test2.map((item) => (
                            <>
                                <tr>
                                    <td>{item.stock}</td>
                                    <td>{item.ticket}</td>
                                    <td>{item.price}</td>
                                    <td>{item.col}</td>
                                </tr>
                            </>
                        ))
                        }
                    </table>
                    </section>
                </div>
        :<p>Добавьте акции</p>
        } */}
    </main>
    </>
    )
}

export default ProfileInformation;