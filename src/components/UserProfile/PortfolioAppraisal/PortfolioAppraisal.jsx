import React, {useState} from 'react';
import s from './../ProfileInformation.module.css'
import { useHttp } from '../../../hooks/http.hookProfile';
import { NavLink } from 'react-router-dom';

const PortfolioAppraisal = () => {
    const {loading, request} = useHttp()
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
                            {/* <p className={s.portfolio__text}>Облигация</p>
                            <p className={s.portfolio__text}>Прочие</p> */}
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
                    <NavLink to="/recommendation">Смотреть</NavLink>
                </div>
            </section>
        </form>
    </main>
    )
}

export default PortfolioAppraisal;