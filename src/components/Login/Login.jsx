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
            const data = await request ('http://20.52.53.19:80/login', 'POST', { ...values }) //данные которые передаются с сервера
        }
        catch (e) {

        }
    }

    return(
        <>
            <div class="testing">
             <div class="container">
                <div class="row">
                    <div class="col-md-offset-3 col-md-6">
                        <form class="form-horizontal" onSubmit={handleSubmit}>
                            <span class="heading">АВТОРИЗАЦИЯ</span>
                            <div class="form-group">
                                <input type="email"
                                    class="form-control"
                                    id="login"
                                    name="login"
                                    placeholder="E-mail"
                                    onChange={registerHandler}/>
                                    <i class="fa fa-user"></i>
                            </div>
                                <div class="form-group help">
                                    <input type="password" 
                                        class="form-control" 
                                        id="password"
                                        name="password" 
                                        placeholder="Password"
                                        onChange={registerHandler}/>
                                        <i class="fa fa-lock"></i>
                                        <a href="#" class="fa fa-question-circle"></a>
                                </div>
                                    <div class="form-group">
                                        <div class="main-checkbox">
                                            <input type="checkbox" value="none" id="checkbox1" name="check" />
                                            <label for="checkbox1"></label>
                                        </div>
                                        <span class="text">Запомнить</span>
                                        <button type="submit" class="btn btn-default">Войти</button>
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