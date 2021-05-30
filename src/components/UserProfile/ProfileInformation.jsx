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
                                <option value="MD Medical Group Investments PLC">MD Medical Group Investments PLC</option>
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
                                <option value="Городские Инновационные Технологии">Городские Инновационные Технологии</option>
                            </select><br />
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