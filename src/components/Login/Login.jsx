import React, { useState } from 'react';
import './../testing.css'
import { useHttp } from "../../hooks/http.hook";

const Login = () => {
    const { loading, request} = useHttp()
    const [values, setValues] = useState({
        login: '',
        password: ''
    })

    const registerHandler = e => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const data = await request ('http://51.116.170.180:80/login', 'POST', { ...values }) //данные которые передаются с сервера
        }
        catch (e) {

        }
    }

    return(
        <>
            <div className="testing">
             <div className="container">
                <div className="row">
                    <div className="col-md-offset-3 col-md-6">
                        <form className="form-horizontal" onSubmit={handleSubmit}>
                            <span className="heading">АВТОРИЗАЦИЯ</span>
                            <div className="form-group">
                                <input type="email"
                                    className="form-control"
                                    id="login"
                                    name="login"
                                    placeholder="E-mail"
                                    onChange={registerHandler}/>
                                    <i className="fa fa-user"></i>
                            </div>
                                <div className="form-group help">
                                    <input type="password" 
                                        className="form-control" 
                                        id="password"
                                        name="password" 
                                        placeholder="Password"
                                        onChange={registerHandler}/>
                                        <i className="fa fa-lock"></i>
                                        <a href="#" className="fa fa-question-circle"></a>
                                </div>
                                    <div className="form-group">
                                        <div className="main-checkbox">
                                            <input type="checkbox" value="none" id="checkbox1" name="check" />
                                            <label for="checkbox1"></label>
                                        </div>
                                        <span className="text">Запомнить</span>
                                        <button type="submit" className="btn btn-default">Войти</button>
                                    </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Login;