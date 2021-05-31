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
                                    <th>Свобдный балл</th>
                                    <th>Сред. дох-ть</th>
                                </tr>
                                <tr>
                                    <td>Татнефть</td>
                                    <td>TATN</td>
                                    <td>29,38</td>
                                    <td>14,39</td>
                                </tr>
                                <tr>
                                    <td>НЛМК</td>
                                    <td>NLMK</td>
                                    <td>25,25</td>
                                    <td>13,8</td>
                                </tr>
                                <tr>
                                    <td>НМТП</td>
                                    <td>NMTP</td>
                                    <td>24,28</td>
                                    <td>14,1</td>
                                </tr>
                                <tr>
                                    <td>Селигдар</td>
                                    <td>SELG</td>
                                    <td>22,32</td>
                                    <td>13,93</td>
                                </tr>
                                <tr>
                                    <td>ОГК-2</td>
                                    <td>OGKB</td>
                                    <td>21,53</td>
                                    <td>7,36</td>
                                </tr>
                                <tr>
                                    <td>Газпром нефть</td>
                                    <td>SCF</td>
                                    <td>21,12</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>Сбербанк</td>
                                    <td>SBNC</td>
                                    <td>20,72</td>
                                    <td>8,19</td>
                                </tr>
                                <tr>
                                    <td>Норникель</td>
                                    <td>NNIC</td>
                                    <td>20,24</td>
                                    <td>11,38</td>
                                </tr>
                                <tr>
                                    <td>МРСК Центра и Приволжья</td>
                                    <td>MRKP</td>
                                    <td>20,1</td>
                                    <td>11,72</td>
                                </tr>
                                <tr>
                                    <td>ММК</td>
                                    <td>MHQ</td>
                                    <td>18,8</td>
                                    <td>9,96</td>
                                </tr>
                            </table>
                        </section>
                        <p className={s.stock__text}>ТОП акций<br/> по стоимости</p>
                        <section className={s.stock__table}>
                            <table>
                                <tr>
                                    <th>Компания</th>
                                    <th>Изменение цены<br/> %</th>
                                    <th>Цена акции<br/> на 31 декабря 2020 года, $</th>
                                    <th>Цена акции<br/> на 31 мая 2021 года, $</th>
                                </tr>
                                <tr>
                                    <td>GameStop</td>
                                    <td>907,5</td>
                                    <td>18,84</td>
                                    <td>189,82</td>
                                </tr>
                                <tr>
                                    <td>Aemetis</td>
                                    <td>884,7</td>
                                    <td>2,49</td>
                                    <td>24,52</td>
                                </tr>
                                <tr>
                                    <td>The 9</td>
                                    <td>781,4</td>
                                    <td>3,54</td>
                                    <td>31,2</td>
                                </tr>
                                <tr>
                                    <td>Cassava Sciences</td>
                                    <td>559,1</td>
                                    <td>6,82</td>
                                    <td>44,95</td>
                                </tr>
                                <tr>
                                    <td>Koss</td>
                                    <td>553,8</td>
                                    <td>3,44</td>
                                    <td>22,49</td>
                                </tr>
                                <tr>
                                    <td>AMC Entertainment</td>
                                    <td>381,6</td>
                                    <td>2,12</td>
                                    <td>10,21</td>
                                </tr>
                                <tr>
                                    <td>CPS Techonogies</td>
                                    <td>370,9</td>
                                    <td>2,78</td>
                                    <td>13,09</td>
                                </tr>
                                <tr>
                                    <td>Marathon Digital Holdings</td>
                                    <td>360</td>
                                    <td>10,44</td>
                                    <td>48,02</td>
                                </tr>
                                <tr>
                                    <td>Express</td>
                                    <td>341,8</td>
                                    <td>0,91</td>
                                    <td>4,02</td>
                                </tr>
                                <tr>
                                    <td>Second Sight Medical Products</td>
                                    <td>341,2</td>
                                    <td>1,87</td>
                                    <td>8,25</td>
                                </tr>
                            </table>
                        </section>
                        <p className={s.stock__text}>ТОП акций<br/> по объему</p>
                        <section className={s.stock__table}>
                            <table>
                                <tr>
                                    <th>Компания</th>
                                    <th>Тикер</th>
                                    <th>Оьъем</th>
                                    <th>Рын. кап.</th>
                                    <th>Цена/Приб.</th>
                                </tr>
                                <tr>
                                    <td>Банк ВТБ</td>
                                    <td>VTBR</td>
                                    <td>18,33 B</td>
                                    <td>1,811 T</td>
                                    <td>6,01</td>
                                </tr>
                                <tr>
                                    <td>АО ПАО</td>
                                    <td>TGKA</td>
                                    <td>1,735 B</td>
                                    <td>48,179 B</td>
                                    <td>5,92</td>
                                </tr>
                                <tr>
                                    <td>КВАДРА ПАО АО</td>
                                    <td>TGKD</td>
                                    <td>907,2 M</td>
                                    <td>11,591 B</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>БАНК КУЗНЕЦКИЙ ПАО АО</td>
                                    <td>TGKD</td>
                                    <td>569,75 M</td>
                                    <td>11,591 B</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>ФСК ЕЭС ПАО АО</td>
                                    <td>FEES</td>
                                    <td>496,38 M</td>
                                    <td>278,056 B</td>
                                    <td>4,63</td>
                                </tr>
                                <tr>
                                    <td>ПАО РУСГИДРО</td>
                                    <td>HYDR</td>
                                    <td>435,563 M</td>
                                    <td>362,545 B</td>
                                    <td>7,43</td>
                                </tr>
                                <tr>
                                    <td>МРСК Центр</td>
                                    <td>MRKP</td>
                                    <td>95,12 M</td>
                                    <td>31,972 B</td>
                                    <td>4,98</td>
                                </tr>
                                <tr>
                                    <td>ТГК-2</td>
                                    <td>TGKB</td>
                                    <td>80 M</td>
                                    <td>6,246 B</td>
                                    <td>-</td>
                                </tr>
                                <tr>
                                    <td>МРСК Центра</td>
                                    <td>MRKC</td>
                                    <td>68,268 M</td>
                                    <td>17,732 B</td>
                                    <td>8,66</td>
                                </tr>
                                <tr>
                                    <td>Интер РАО</td>
                                    <td>IRAO</td>
                                    <td>35,069 M</td>
                                    <td>371,638 B</td>
                                    <td>4,96</td>
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