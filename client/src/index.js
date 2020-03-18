import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
// import { BrowserRouter, Route, Switch,} from "react-router-dom";

// styles for this kit
import "./assets/css/bootstrap.min.css";
import "./assets/scss/now-ui-kit.scss";
import "./assets/demo/demo.css";
import "./assets/demo/nucleo-icons-page-styles.css";



ReactDOM.render(<Routes />, document.getElementById('root'));