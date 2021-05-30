import React from 'react';
import s from './UserAnalytics.module.css';

class UserAnalytics extends React.Component {
    constructor(props) {
        super(props);
        this.state = { col: 1, data: {}, data1: {}, isFetching: true, error: null };
    }

    componentDidMount() {
        let response1 = fetch('http://51.116.170.180:80/users/get-current-user', {
            method: 'GET',
            headers: {
                'authorization': localStorage.getItem('tokens')
            }
        })
            .then(res => res.json())
            .then(res1Json => this.setState({ data1: res1Json}))
            .then(userId => {
                let response2 = fetch('http://51.116.170.180:80/get-analytics/', {
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

        let array = {
            company:[],
            tikers:[],
            price:[],
            percent:[]
        }

        if(data.table.Other.names.length){
            for(let i = 0; i < data.table.Other.names.length; i++){
                array.company.push(data.table.Other.names[i])
                array.tikers.push(data.table.Other.tikers[i])
                array.price.push(data.table.Other.price[i])
            }
        }
        
        if(data.table.HealthCare.names.length){
            for(let i = 0; i < data.table.HealthCare.names.length; i++){
                array.company.push(data.table.HealthCare.names[i])
                array.tikers.push(data.table.HealthCare.tikers[i])
                array.price.push(data.table.HealthCare.price[i])
            }
        }
        
        if(data.table.IT.names.length){
            for(let i = 0; i < data.table.IT.names.length; i++){
                array.company.push(data.table.IT.names[i])
                array.tikers.push(data.table.IT.tikers[i])
                array.price.push(data.table.IT.price[i])
            }
        }
        
        if(data.table.Industrials.names.length){
            for(let i = 0; i < data.table.Industrials.names.length; i++){
                array.company.push(data.table.Industrials.names[i])
                array.tikers.push(data.table.Industrials.tikers[i])
                array.price.push(data.table.Industrials.price[i])
            }
        }
        
        if(data.table.RealEstate.names.length){
            for(let i = 0; i < data.table.RealEstate.names.length; i++){
                array.company.push(data.table.RealEstate.names[i])
                array.tikers.push(data.table.RealEstate.tikers[i])
                array.price.push(data.table.RealEstate.price[i])
            }
        }
        
        if(data.table.Consumer.names.length){
            for(let i = 0; i < data.table.Consumer.names.length; i++){
                array.company.push(data.table.Consumer.names[i])
                array.tikers.push(data.table.Consumer.tikers[i])
                array.price.push(data.table.Consumer.price[i])
            }
        }
        
        if(data.table.Materials.names.length){
            for(let i = 0; i < data.table.Materials.names.length; i++){
                array.company.push(data.table.Materials.names[i])
                array.tikers.push(data.table.Materials.tikers[i])
                array.price.push(data.table.Materials.price[i])
            }
        }
        
        if(data.table.Telecom.names.length){
            for(let i = 0; i < data.table.Telecom.names.length; i++){
                array.company.push(data.table.Telecom.names[i])
                array.tikers.push(data.table.Telecom.tikers[i])
                array.price.push(data.table.Telecom.price[i])
            }
        }
        
        if(data.table.Financial.names.length){
            for(let i = 0; i < data.table.Financial.names.length; i++){
                array.company.push(data.table.Financial.names[i])
                array.tikers.push(data.table.Financial.tikers[i])
                array.price.push(data.table.Financial.price[i])
            }
        }
        
        if(data.table.Utilities.names.length){
            for(let i = 0; i < data.table.Utilities.names.length; i++){
                array.company.push(data.table.Utilities.names[i])
                array.tikers.push(data.table.Utilities.tikers[i])
                array.price.push(data.table.Utilities.price[i])
            }
        }
        
        if(data.table.Energy.names.length){
            for(let i = 0; i < data.table.Energy.names.length; i++){
                array.company.push(data.table.Energy.names[i])
                array.tikers.push(data.table.Energy.tikers[i])
                array.price.push(data.table.Energy.price[i])
            }
        }

        let array_test2 = []

        let arrayCol = []
        let arrayStock = []

        arrayCol = Object.values(data1.stocks)
        arrayStock = Object.keys(data1.stocks)

        let result = arrayStock.map((v, i) => [array.company.indexOf(v), v, arrayCol[i]])
            .sort((a, b) => a[0] - b[0])
            .map(v => v[2]);

        for(let i = 0; i < array.company.length; i++){
            array_test2.push({});
            array_test2[i].stock = array.company[i]
            array_test2[i].ticket = array.tikers[i]
            array_test2[i].price = array.price[i]
            array_test2[i].col = result[i]
            array_test2[i].percent = array.percent[i]
        }

    return(
        <>
            <main>
                <div className={s.container}>
                    <h1 className={s.reccomendation__title}>Рекомендации и прогнозы</h1>
                    <section className={s.reccomendation__table}>
                    <table>
                        <tr>
                            <th>Акция</th>
                            <th>Тикет</th>
                            <th>Цена</th>
                            <th>Количество</th>
                        </tr>
                    {col ? array_test2.map((item) => (
                            <>
                                <tr>
                                    <td>{item.stock}</td>
                                    <td>{item.ticket}</td>
                                    <td>{item.price}</td>
                                    <td>{item.col}</td>
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
export default UserAnalytics;