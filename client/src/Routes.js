import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
// import Signup from './components/Signup';
// import Signin from './components/Signin';
import AddTruck from './components/AddTruck';
// import Activate from './components/Activate';
import HomePage from './components/HomePage';
// import LandingPage from './components/archivedcomponents/LandingPage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import TruckInfo from './components/TruckInfo';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePage} />
                {/* <Route path="/home-page" exact component={HomePage} /> */}
                {/* <Route path="/landing-page" exact component={LandingPage} /> */}
                <Route path="/login-page" exact component={LoginPage} />
                <Route path="/signup-page" exact component={SignupPage} />
                {/* <Route path="/signin" exact component={Signin} /> */}
                {/* <Route path="/signup" exact component={SignupPage} /> */}
                {/* <Route path="/activate/:token" exact component={Activate} /> */}
                <Route path="/truckinfo/:id" exact component={TruckInfo} />
                <PrivateRoute path="/addtruck" exact component={AddTruck} />
            </Switch>            
        </BrowserRouter>
    );
};

export default Routes;