import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuth, signout} from './helpers';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
//use ( instead of { after the arrow to aavoid requirement for a return statement
//...rest brings in the rest of the props
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
        {...rest} 
        render={props => 
            isAuth() ? (<Component {...props} /> 
            ) : (
                <Redirect 
                    to={{
                        pathname: "/signin",
                        state: { from: props.location }
                    }}
                />
            )
        }
    ></Route>
);

export default PrivateRoute;