import React from 'react';
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import HomeNavbar from "./components/HomeNavbar.js";
// import HomeNavbar from "./components/Navbars/HomeNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import Layout from './components/Layout';


const App = () => {
  return (
    <Layout>   
    <h1>Midnight Food Vice Landing Page</h1>
    </Layout>
  )
}

export default App;
