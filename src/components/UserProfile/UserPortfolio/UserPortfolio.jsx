import React, {useEffect} from 'react';
import Recommendation from '../Recommendation/Recommendation';
import s from './UserPortfolio.module.css';

class UserPortfolio extends React.Component{
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
    
    return(
        <>
            <Recommendation/>
            <section className={s.appraisal}>
                <div className={s.container}>
                    <h1 className={s.appraisal__title}>Оценка риск-профиля портфеля</h1>
                    <ul className={s.appraisal__list}>
                        <li className={s.appraisal__item}>
                            <p className={s['appraisal__item-text']}>Консервативный</p>
                            <div className={s.appraisal__block}>
                                <p className={s.appraisal__average}>Среднегодовая доходность: 7,6%</p>
                                <p className={s.appraisal__best}>Лучший год: 22,8%</p>
                                <p className={s.appraisal__worst}>Худший год: -4,6%</p>
                            </div>
                            <div className={s.appraisal__block2}>Для инвестров, которые ищут текущие доходы и стабильность и меньше обеспокоены ростом.</div>
                        </li>
                        <li className={s.appraisal__item}>
                            <p className={s['appraisal__item-text']}>Умеренно Консервативный</p>
                            <div className={s.appraisal__block}>
                                <p className={s.appraisal__average}>Среднегодовая доходность: 8,8%</p>
                                <p className={s.appraisal__best}>Лучший год: 27,0%</p>
                                <p className={s.appraisal__worst}>Худший год: -12,5%</p>
                            </div>
                            <div className={s.appraisal__block2}>Для инвесторов, которые ищут текущие доходы и стабильность, со скромным потенциалом для увеличения стоимости своих инвестиций</div>
                        </li>
                        <li className={s.appraisal__item}>
                            <p className={s['appraisal__item-text']}>Умеренный</p>
                            <div className={s.appraisal__block}>
                                <p className={s.appraisal__average}>Среднегодовая доходность: 9,4%</p>
                                <p className={s.appraisal__best}>Лучший год: 30,9%</p>
                                <p className={s.appraisal__worst}>Худший год: -20,9%</p>
                            </div>
                            <div className={s.appraisal__block2}>Для долгосрочных инвесторов, которые не нуждаются в текущем доходе и нуждаются в потенциале роста. Вероятно, портфель повлечет за собой некоторые колебания стоимости, но представляет меньшую волатильность, чем рынок акций.</div>
                        </li>
                        <li className={s.appraisal__item}>
                            <p className={s['appraisal__item-text']}>Умеренно Агрессивный</p>
                            <div className={s.appraisal__block}>
                                <p className={s.appraisal__average}>Среднегодовая доходность: 9,9%</p>
                                <p className={s.appraisal__best}>Лучший год: 34,4%</p>
                                <p className={s.appraisal__worst}>Худший год: -29,5%</p>
                            </div>
                            <div className={s.appraisal__block2}>Для долгосрочных инвесторов, которые хотят хорошего роста и не нуждаются в текущем доходе. Портфель влечет за собой значительную волатильность, но не столько, сколько портфель, инвестированный исключительно в акции</div>
                        </li>
                        <li className={s.appraisal__item}>
                            <p className={s['appraisal__item-text']}>Агрессивный</p>
                            <div className={s.appraisal__block}>
                                <p className={s.appraisal__average}>Среднегодовая доходность: 10,1%</p>
                                <p className={s.appraisal__best}>Лучший год: 39,9%</p>
                                <p className={s.appraisal__worst}>Худший год: -36,0%</p>
                            </div>
                            <div className={s.appraisal__block2}>Для долгосрочных инвесторов, которые хотят высокого потенциала роста и не нуждаются в текущем доходе. Может повлечь за собой значительную волатильность в годовом исчеслении в обмен на потенциально высокую долгосрочную прибыль.</div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={s.risk}>
                <div className={s.container}>
                    <h1 className={s.risk__title}>Как определить свой риск-профиль?</h1>
                    <ul className={s.risk__list}>
                        <li className={s.risk__item}>
                            <p className={s.risk__text}><b>Цели и срок инвестирования</b></p>
                            <p className={s.risk__text}>Перед тем, как покупать ценные бумаги, нужно определить цели и срок инвестирования. Если вам нужно заработать много и в короткий срок, используйте агрессивную стратегию. Если вам не понадобятся инвестируемые деньги ближайшие 5-10 лет, можете инвестировать в волатильные акции. Они могут подорожать в долгосрочной перспективе и обеспечить более высокую доходность.</p>
                        </li>
                        <li className={s.risk__item}>
                            <p className={s.risk__text}><b>Возраст</b></p>
                            <p className={s.risk__text}>Обычно чем старше инвестор, тем меньше он склонен к риску. Приближение к пенсионному возрасту говорит о том, что доход от инвестиций понадобится в ближайшем будущем в качестве надбавки к пенсии — поэтому нужно присмотреться к консервативной или рациональной стратегии. И, наоборот, если у вас есть постоянный доход и финансовая подушка безопасности, вы можете рискнуть и получить доход выше.</p>
                        </li>
                        <li className={s.risk__item}>
                            <p className={s.risk__text}><b>Ваши сбережения</b></p>
                            <p className={s.risk__text}>Человек, у которого количество денег и других активов превышает количество долгов, больше склонен к риску. И наоборот, человек с небольшим количеством активов и высокими обязательствами не хочет брать на себя риск. Если вы планируете инвестировать больше 50% своих сбережений — значит, вы расположены к риску. Менее 10% от сбережений — скорее всего вы консерватор.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
}

export default UserPortfolio;