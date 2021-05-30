import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import Registration from '../Registration/Registration';
import Main from '../Main/Main';
import Login from '../Login/Login';
import UserProfile from '../UserProfile/UserProfile';
import Header from '../Header/Header';
import ProfileInformation from '../UserProfile/ProfileInformation';
import Footer from '../Footer/Footer';
import PortfolioAppraisal from '../UserProfile/PortfolioAppraisal/PortfolioAppraisal';
import UserAnalytics from '../UserProfile/UserAnalytics/UserAnalytics';
import UserHeader from '../UserProfile/UserHeader/UserHeader';
import UserPortfolio from '../UserProfile/UserPortfolio/UserPortfolio';
import TopStock from '../UserProfile/AppraisalStock/TopStock/TopStock';
import ResultRecommendation2 from '../UserProfile/ResultRecommendation/ResultRecommendation';

const MainPage = () => {
    if(localStorage.getItem('tokens')){
        return(
            <>
            <UserHeader/>
            <Switch>
                <Route exact path="/" component={UserProfile}/>
                <Route exact path="/home" component={UserProfile}/>
                <Route exact path="/worksheet" component={ProfileInformation}/>
                <Route exact path="/appraisal" component={PortfolioAppraisal}/>
                <Route exact path="/analytics" component={UserAnalytics}/>
                <Route exact path="/portfolio" component={UserPortfolio}/>
                <Route exact path="/top-stock" component={TopStock}/>
                <Route exact path="/recommendation" component={ResultRecommendation2}/>
            </Switch>
            </>
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