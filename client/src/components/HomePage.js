import React from "react";

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
import HomeNavbar from "../components/Navbars/HomeNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function HomePage() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("home-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("home-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <HomeNavbar />
      <div className="wrapper">
        <HomePageHeader />
        <div className="section">
          <Container>
            <div className="button-container">
              <Button className="btn-round" color="info" size="lg">
                Follow
              </Button>
            </div>
            <h3 className="title">About us</h3>
            <h5 className="description">
              Dont settle for the boring fast food. We're here to help you discover the best food truck in town. 
            </h5>
            <h3 className="title">Find Nearest Food Truck</h3>
            <h5 className="description">
               
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="6">
                <h4 className="title text-center">Trending Food Trucks</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <i className="now-ui-icons design_image"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons location_world"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons sport_user-run"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg1.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg3.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg8.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg7.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/cheeseBurgerBaby.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/monsterBite.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/comelon.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/peru.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg3.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg8.jpg")}
                        ></img>
                      </Col>
                      <Col md="6">
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg7.jpg")}
                        ></img>
                        <img
                          alt="..."
                          className="img-raised"
                          src={require("../assets/img/bg6.jpg")}
                        ></img>
                      </Col>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        {/* <DefaultFooter /> */}
      </div>
    </>
  );
}

export default HomePage;
