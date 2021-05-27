import React from 'react';

import './registration.css';
import './../testing.css'
import { useState } from 'react';
import { useHttp } from '../../hooks/http.hook2';

const Registration = () => {
    const {loading, request} = useHttp()
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
            const data = await request ('http://51.116.170.180:80/users/sign-up', 'POST', { ...values }) //данные которые передаются с сервера
        }
        catch (e) {

        }
    }
   
    // const handleSubmit = () => {
    //     localStorage.setItem("email", email);
    //     localStorage.setItem("password", password);
        
    //     document.location.href="http://localhost:3000/";
        // document.location.href="http://invest-for.surge.sh/";
        // event.preventDefault()
    // }
    return (
        <>
            <div class="testing">
            <div class="container">
                <div class="row">
                    <div class="col-md-offset-3 col-md-6">
                        <form class="form-horizontal" onSubmit={handleSubmit}>
                            <span class="heading">РЕГИСТРАЦИЯ</span>
                            <div class="form-group">
                                <input type="email"
                                    class="form-control" 
                                    id="login" 
                                    name="login"
                                    value={values.login}
                                    placeholder="E-mail"
                                    onChange={registerHandler}/>
                                    <i class="fa fa-user"></i>
                            </div>
                                <div class="form-group help">
                                    <input type="password" 
                                        class="form-control" 
                                        id="password"
                                        name="password"
                                        value={values.password} 
                                        placeholder="Password"
                                        onChange={registerHandler}/>
                                        <i class="fa fa-lock"></i>
                                        <a href="#" class="fa fa-question-circle"></a>
                                </div>
                                    <div class="form-group">
                                        {/* <div class="main-checkbox">
                                            <input type="checkbox" value="none" id="checkbox1" name="check" />
                                            <label for="checkbox1"></label>
                                        </div> */}
                                        <button type="submit" class="btn btn-default">Зарегистрироваться</button>
                                    </div>
                        </form>
                    </div>
                    {/* <p>{email}</p> */}
                    {/* <p>{password}</p> */}
                </div>
            </div>
            </div>
        </>
    )
}

export default Registration;