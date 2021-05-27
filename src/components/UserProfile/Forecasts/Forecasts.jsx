import React, { useState } from 'react';
import s from './ProfileInformation.module.css'
import { useHttp } from '../../hooks/http.hookProfile';

c ProfileInformation = () => {
    const {loading, request} = useHttp()
    const [form, setForm] = useState({
        sum: ''
    })

    const orderHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        try{
            e.preventDefault();
            const data = await request ('http://51.116.170.180:80/get-recommendations', 'POST', { ...form })
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
                    <h1 className={s.portfolio__title}>Рекомендации/прогнозы</h1>
                    <p className={s.portfolio__active}>Тип актива:</p>
                    <ul className={s.portfolio__list}>
                        <li className={s.portfolio__item}>
                            <p className={s.portfolio__text}>Введите доступную сумму</p>
                            {/* <p className={s.portfolio__text}>Облигация</p>
                            <p className={s.portfolio__text}>Прочие</p> */}
                        </li>
                        <li className={s.portfolio__item}>
                            <input className={s.portfolio__select1} type="text" name="sum" id="sum" value={form.sum} onChange={orderHandler}/>
                            {/* <select className={s.portfolio__select2} name="" id="" onChange={orderHandler}>
                                <option selected>Количество</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select><br />
                            <select className={s.portfolio__select2} name="" id="" onChange={orderHandler}>
                                <option selected>Количество</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select> */}
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
                </div>
            </section>
        </form>

    </main>
    </>
    )
}

export default ProfileInformation;