import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Trucks from './components/Trucks';
import Activate from './components/Activate';

import Owner from './components/Owner';
import PrivateRoute from './components/PrivateRoute';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
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