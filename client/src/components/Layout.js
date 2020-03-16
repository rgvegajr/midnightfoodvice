import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {isAuth, signout} from './helpers';

const Layout = ({children, match, history }) => {
    const isActive = path => {
        if(match.path === path) {
            return { color: '#000'};
        } else {
            return { color: '#fff'};
        }
    };

    const nav = () => (
        <ul className="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link to="/" className="nav-link" style={isActive("/")}>
                    Home
                </Link>
            </li>
            {!isAuth() && (
            <Fragment>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link" style={isActive("/signup")}>
                        Signup
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signin" className="nav-link" style={isActive("/signin")}>
                        Signin
                    </Link>
                </li>
            </Fragment>
            )}
            <li className="nav-item">
                <Link to="/trucks" className="nav-link" style={isActive("/trucks")}>
                    Trucks
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/home-page" className="nav-link" style={isActive("/home-page")}>
                    Homepage
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/landing-page" className="nav-link" style={isActive("/landing-page")}>
                    Landingpage
                </Link>
            </li>
            
            {isAuth() && (
                <li className="nav-item">
                    <span 
                        className="nav-link">Signed in as: {isAuth().name}
                    </span>
                </li>
            )}
            
            {isAuth() && (
                <li className="nav-item">
                    <span 
                        className="nav-link"
                        style={{cursor : 'pointer', color: '#fff'}}  
                        onClick={() => {
                        signout(() => {
                            history.push('/')
                        });
                    }}>
                        Signout
                    </span>
                </li>
            )}
        </ul>
    );
    return (
        <Fragment>
            {nav()}
            <div className="container">{children}</div>
        </Fragment>
    );
};

export default withRouter(Layout);