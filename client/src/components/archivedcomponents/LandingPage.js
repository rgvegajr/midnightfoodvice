import React from "react";


// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import HomeNavbar from "../Navbars/HomeNavbar.js";
import HomePageHeader from "components/Headers/HomePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <HomeNavbar />
      <div className="wrapper">
        <HomePageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Add Your Business Details</h2>
                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s3">
                        <i class="material-icons prefix">account_circle</i>
                        <input id="icon_prefix" type="text" class="validate" />
                        <label for="icon_prefix">Company</label>
                      </div>
                      <div class="input-field col s3">
                        <i class="material-icons prefix">phone</i>
                        <input id="icon_telephone" type="tel" class="validate" />
                        <label for="icon_telephone">Telephone</label>
                      </div>
                      <div class="input-field col s3">
                        <i class="material-icons prefix">devices</i>
                        <input id="icon_prefix" type="text" class="validate" />
                        <label for="icon_prefix">Website</label>
                      </div>
                    </div>
                  </form>
                </div>

                <div class="row">
                  <form class="col s12">
                    <div class="row">
                      <div class="input-field col s12">
                        <input placeholder="Address" id="first_name" type="text" class="validate" />
                        <label for="textarea1">Location</label>
                      </div>
                    </div>
                  </form>
                </div>
                <form class="col s12">
                  <div class="row">
                    <div class="input-field col s12">
                      <input placeholder="Friday 6pm-2am Saturday 8pm-3am" id="first_name" type="text" class="validate" />
                      <label for="textarea1">Hours of Operation</label>
                    </div>
                  </div>
                </form>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>

          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
