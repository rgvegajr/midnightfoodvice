import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import App from './App';

import AddTruck from './components/AddTruck';
// import Activate from './components/Activate';
import HomePage from './components/HomePage';
import DisplayTruck from './components/DisplayTruck';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
// import TruckInfo from './components/TruckInfo._js';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />

                <Route path="/login-page" exact component={LoginPage} />
                <Route path="/signup-page" exact component={SignupPage} />

                <Route path="/truckinfo/:id" exact component={DisplayTruck} />                

                <PrivateRoute path="/addtruck" exact component={AddTruck} />
            </Switch>            
        </BrowserRouter>
    );
};

export default Routes;