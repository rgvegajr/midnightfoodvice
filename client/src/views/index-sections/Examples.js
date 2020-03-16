import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row } from "reactstrap";

// core components

function Examples() {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
          <Row>
            <div className="col">
              <a href="examples/landing-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/landing.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/landing-page"
                outline
                tag={Link}
              >
                View Landing Page
              </Button>
            </div>
            <div className="col">
              <a href="examples/home-page.html" target="_blank">
                <img
                  alt="..."
                  className="img-raised"
                  src={require("assets/img/newVice.jpg")}
                ></img>
              </a>
              <Button
                className="btn-round"
                color="default"
                to="/home-page"
                outline
                tag={Link}
              >
                View Home Page
              </Button>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Examples;
