
import React from 'react';
import s from '../UserAnalytics/UserAnalytics.module.css';

const ResultRecommendation = () => {
    
    const [col, setCol] = useState(1);
    const [data, setData] = useState('')
    const [data1, setData1] = useState('') 
    const [isFetching, setFetching] = useState(true)
    const [error, setError] = useState(null) 

    useEffect(()=>{
                fetch('http://51.116.170.180:80/users/get-current-user', {
                method: 'GET',
                headers: {
                    'authorization': localStorage.getItem('tokens')
                }
            })
                .then(res => res.json())
                // .then(res1Json => this.setState({ data1: res1Json}))
                .then(userId => {
                        fetch('http://51.116.170.180:80/get-recommendations/', {
                        method: 'GET',
                        headers: {
                            'authorization': localStorage.getItem('tokens')
                        }
                    })
                    .then(res2 => res2.json())
                    .then(res2Json => setData(data));
                });
    })

    if (isFetching) {
        return <div>...Loading</div>;
    }
    else{
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
    );
}
}

export default ResultRecommendation2;