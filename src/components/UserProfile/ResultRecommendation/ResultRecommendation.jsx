import { render } from '@testing-library/react';
import React from 'react';
import s from '../UserAnalytics/UserAnalytics.module.css';

class ResultRecommendation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { col: 1, data: {}, data1: {}, isFetching: true, error: null };
    }
    componentDidMount(){
        let response1 = fetch('http://51.116.170.180:80/users/get-current-user', {
                method: 'GET',
                headers: {
                    'authorization': localStorage.getItem('tokens')
                }
            })
                .then(res => res.json())
                .then(res1Json => this.setState({ data1: res1Json}))
                .then(userId => {
                    let response2 = fetch('http://51.116.170.180:80/get-recommendations/', {
                        method: 'GET',
                        headers: {
                            'authorization': localStorage.getItem('tokens')
                        }
                    })
                    .then(res2 => res2.json())
                    .then(res2Json => this.setState({ data: res2Json, isFetching: false }));
                });
    }
    render(){
        const { col, data, data1, isFetching, error } = this.state;
        if (isFetching) return <div>...Loading</div>;
    return(
        <>
            <main>
                <div className={s.container}>
                    <h1 className={s.reccomendation__title}>Рекомендации и прогнозы</h1>
                    <p className={s.reccomendation__text}>По вашим параметрам в {data.sum} рублей оптимальным вариантом будет</p>
                    <section className={s.reccomendation__table}>
                    <table>
                        <tr>
                            <th>Акция</th>
                            <th>Тикет</th>
                            <th>Цена</th>
                            <th>Количество</th>
                            <th>Сумма</th>
                        </tr>
                    {col ? data.recommendations.map((item) => (
                            <>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.tiker}</td>
                                    <td>{item.price}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.total}</td>
                                </tr>
                            </>
                        ))
                        : <p>У Вас ещё пока нет заказов</p>
                        }
                    </table>
                    </section>
                </div>
            </main>
        </>
    )
}
}

export default ResultRecommendation;