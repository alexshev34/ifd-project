import React, {useState, useEffect} from 'react';
import s from './PortfolioAppraisal.module.css'
import f from './../UserAnalytics/UserAnalytics.module.css';
import { useHttp } from '../../../hooks/http.hookProfile';

const PortfolioAppraisal = () => {
    const {loading, request, data, isFetching, col} = useHttp()
    const [form, setForm] = useState({
        money_available: ''
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
        <main>
            <form onSubmit={handleSubmit}>
                <section className={s.portfolio}>
                    <div className={s.container}>
                        <h1 className={s.portfolio__title}>Рекомендации/прогнозы</h1>
                        <ul className={s.portfolio__list}>
                            <li className={s.portfolio__item}>
                                <p className={s.portfolio__text}>Введите доступную сумму</p>
                            </li>
                            <li className={s.portfolio__item}>
                                <input className={s.portfolio__select1} type="text" name="money_available" id="money_available" value={form.money_available} onChange={orderHandler}/>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={s.personal}>
                    <div className={s.container}>
                        <button className={s.personal__btn} type="submit">Добавить</button>
                    </div>
                </section>
            </form>
            {isFetching ? 
            <div className={f.container}>
                    <p className={f.reccomendation__text}>По вашим параметрам в {data.sum} рублей оптимальным вариантом будет</p>
                    <section className={f.reccomendation__table}>
                        <table>
                            <tr>
                                <th>Акция</th>
                                <th>Тикет</th>
                                <th>Цена</th>
                                <th>Количество</th>
                                <th>Сумма</th>
                            </tr>
                        {data.recommendations.map((item) => (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.tiker}</td>
                                    <td>{item.price}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.total}</td>
                                </tr>
                            ))
                            }
                        </table>
                    </section>
            </div>
            : <p style={{textAlign: 'center'}}>Создайте рекомендацию</p>
            }
            </main>
    )
}


export default PortfolioAppraisal;