import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Registration from '../Registration/Registration';
import Main from '../Main/Main';
import Login from '../Login/Login';
import UserProfile from '../UserProfile/UserProfile';
import Header from '../Header/Header';
import ProfileInformation from '../UserProfile/ProfileInformation';
import Footer from '../Footer/Footer';
// import Header from './components/Header/Header';

const MainPage = () => {
    if(localStorage.getItem('tokens')){
        return(
            // <UserProfile/>
            <Switch>
                <Route exact path="/home" component={UserProfile}/>
                <Route exact path="/worksheet" component={ProfileInformation}/>
            </Switch>
        )
    }
    else{
        return(
            <>
            <Header/>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Login}/>
                <Route path="/registration" component={Registration} />
            </Switch>
            <Footer/>
            </>
        )
    }
}

export default MainPage;