import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

import Nav from "../components/nav";
import Footer from "../components/footer";

import Benz from "../images/benzlogo.png";

import "./home.css";

const home = () => {
  return (
    <>
      <Nav />
      <Container fluid className="hero-bg">
        <Row>
          <Col className="my-5" sm={8}>
            <div className="hero-text-div my-5">
              <div className="d-flex flex-row align-items-center">
                <Image src={Benz} width="40px" />
                <p className="text-white my-2 ms-3">
                  Introducing Genuiner PartProtection for Mercedes-Benz
                </p>
              </div>
              <h1 className="my-3 text-white hero-header hero-txt">
                Lifetime Limited Warranty on Parts & Labor
              </h1>
              <p className="text-white hero-subtxt">
                Protecting vehicle owners for the road ahead, Genuine
                PartProtection presents a lifetime limited warranty that helps
                policy holders avoid unexpected, costly repairs on their new or
                pre-owned vehicle.
              </p>
              <Button
                variant="dark"
                className="learnmore-btn"
                size="lg"
                onClick={() => {
                  window.open("/learnmore", "_self");
                }}
              >
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default home;
