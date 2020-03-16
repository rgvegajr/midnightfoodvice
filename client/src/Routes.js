import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Trucks from './components/Trucks';
import Activate from './components/Activate';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';


import Owner from './components/Owner';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/home-page" exact component={HomePage} />
                <Route path="/landing-page" exact component={LandingPage} />
                <Route path="/login-page" exact component={LoginPage} />
                <Route path="/signup-page" exact component={SignupPage} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/activate/:token" exact component={Activate} />
                <Route path="/trucks" exact component={Trucks} />
                <PrivateRoute path="/owner" exact component={Owner} />
            </Switch>            
        </BrowserRouter>
    );
};

export default Routes;