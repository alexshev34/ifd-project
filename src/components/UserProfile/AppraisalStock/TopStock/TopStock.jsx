import React from 'react';
import Recommendation from '../../Recommendation/Recommendation';
import s from './TopStock.module.css';

const TopStock = () => {
    return(
        <>
            <Recommendation/>
            <main>
                <section className={s.stock}>
                    <div className={s.container}>
                        <h1 className={s.stock__title}>Оценка акций</h1>
                        <p className={s.stock__text}>ТОП акций<br/> по дивидендам</p>
                        <section className={s.stock__table}>
                            <table>
                                <tr>
                                    <th>Компания</th>
                                    <th>Тикер</th>
                                    <th>Див. дох-ть</th>
                                    <th>Накопления див. дох-ть</th>
                                </tr>
                                <tr>
                                    <td>Норникель</td>
                                    <td>GMKN RX</td>
                                    <td>10.2%</td>
                                    <td>31%</td>
                                </tr>
                                <tr>
                                    <td>Норникель dgfhdghdfhf dfgdfgdfg</td>
                                    <td>GMKN RX</td>
                                    <td>10.2%</td>
                                    <td>31%</td>
                                </tr>
                                <tr>
                                    <td>Норникель</td>
                                    <td>GMKN RX</td>
                                    <td>10.2%</td>
                                    <td>31%</td>
                                </tr>
                                <tr>
                                    <td>Норникель</td>
                                    <td>GMKN RX</td>
                                    <td>10.2%</td>
                                    <td>31%</td>
                                </tr>
                            </table>
                        </section>
                        <p className={s.stock__text}>ТОП акций<br/> по стоимости</p>
                        <section className={s.stock__table}>
                            <table>
                                <tr>
                                    <th>Компания</th>
                                    <th>Тикер</th>
                                    <th>Див. дох-ть</th>
                                    <th>Накопления див. дох-ть</th>
                                </tr>
                                <tr>
                                    <td>Норникель</td>
                                    <td>GMKN RX</td>
                                    <td>10.2%</td>
                                    <td>31%</td>
                                </tr>
                                <tr>
                                    <td>Норникель</td>
                                    <td>GMKN RX</td>
                                    <td>10.2%</td>
                                    <td>31%</td>
                                </tr>
                                <tr>
                                    <td>Норникель</td>
                                    <td>GMKN RX</td>
                                    <td>10.2%</td>
                                    <td>31%</td>
                                </tr>
                                <tr>
                                    <td>Норникель</td>
                                    <td>GMKN RX</td>
                                    <td>10.2%</td>
                                    <td>31%</td>
                                </tr>
                            </table>
                        </section>
                        <p className={s.stock__text}>ТОП акций<br/> по объему</p>
                        <section className={s.stock__table}>
                            <table>
                                <tr>
                                    <th>Компания</th>
                                    <th>Тикер</th>
                                    <th>Див. дох-ть</th>
                                    <th>Накопления див. дох-ть</th>
                                </tr>
                                <tr>
                                    <td>Норникель</td>
                                    <td>GMKN RX</td>
                                    <td>10.2%</td>
                                    <td>31%</td>
                                </tr>
                                <tr>
                                    <td>Норникель</td>
                                    <td>GMKN RX</td>
                                    <td>10.2%</td>
                                    <td>31%</td>
                                </tr>
                                <tr>
                                    <td>Норникель</td>
                                    <td>GMKN RX</td>
                                    <td>10.2%</td>
                                    <td>31%</td>
                                </tr>
                                <tr>
                                    <td>Норникель</td>
                                    <td>GMKN RX</td>
                                    <td>10.2%</td>
                                    <td>31%</td>
                                </tr>
                            </table>
                        </section>
                    </div>
                    <div></div>
                </section>
            </main>
        </>
    );
}

export default TopStock;