import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {isAuth, signout} from '../helpers';
// import HomeNavbar from './components/Navbars/HomeNavbar';
// import HomeNavbar from '../HomeNavbar';


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
                    <Link to="/signup-page" className="nav-link" style={isActive("/signup-page")}>
                        Signup
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login-page" className="nav-link" style={isActive("/login-page")}>
                        Login
                    </Link>
                </li>
            </Fragment>
            )}
            <li className="nav-item">
                <Link to="/truckinfo/:id" className="nav-link" style={isActive("/truckinfo/:id")}>
                    TruckInfo
                </Link>
            </li>

            
            {isAuth() && (
                <Fragment>
                <li className="nav-item">
                    <span 
                        className="nav-link">Signed in as: {isAuth().name}
                    </span>
                </li>
                            <li className="nav-item">
                            <Link to="/addtruck" className="nav-link" style={isActive("/addtruck")}>
                                AddTruck
                            </Link>
                        </li>
                        </Fragment>
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
        {/* <HomeNavbar /> */}
            {nav()}
            <div className="container">{children}</div>
        </Fragment>
    );
};

export default withRouter(Layout);