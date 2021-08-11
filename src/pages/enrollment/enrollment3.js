import React from "react";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";

import Nav2 from "../../components/nav2";
import Footer from "../../components/footer2";
import Line from "../../images/grayln.png";
import "./enrollment3.css";

const enrollment3 = () => {
  return (
    <>
      <Nav2 />
      <Container fluid className="enrollment-bg">
        <Row>
          <Col className="my-5 text-center text-white">
            <h1 className="mt-5">Dealership Enrollment</h1>
            <p className="mt-4">
              Please fill out the form below and press "Enroll Now" at the end
              to complete your enrollment
            </p>
            <div className="d-flex flex-row align-items-center justify-content-center mt-4">
              <div className="step-1-box ms-3">
                <p className="step-1-txt mt-2">1</p>
              </div>
              <p className="mt-2 me-3 ms-3">Dealership Info</p>
              <Image src={Line} rounded width="100px" />
              <div className="step-1-box ms-3">
                <p className="step-1-txt mt-2">2</p>
              </div>
              <p className="mt-2 me-3 ms-3">Billing Info</p>
              <Image src={Line} rounded width="100px" />
              <div className="step-1-box ms-3">
                <p className="step-1-txt mt-2">3</p>
              </div>
              <p className="mt-2 me-3 ms-3">Confirmation</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mx-5">
          <Col>
            <h5 className="header-txt my-4 text-center">
              Registration Information
            </h5>
            <Form>
              <Row>
                <Col>
                  <Form.Select
                    className="mb-3"
                    aria-label="Default select example"
                  >
                    <option>Select Preference</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>{" "}
                </Col>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control placeholder="Phone*" />
                </Col>
                <Col>
                  <Form.Control placeholder="Email*" />
                </Col>
                <Col>
                  <Form.Control placeholder="Username" />
                </Col>
              </Row>
        <Row className="mx-5">
                <Col>
                  <Form.Group className="my-3" id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      label="I hereby certify that I am authorized to enroll in the Genuine PartProtection program, including authorizing DMS integration, paying all applicable program fees, and agreeing to the Terms and Conditions for use of this site."
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
        <Row className="mx-5">
          <Col className="d-flex flex-row align-items-center justify-content-center">
            <Button
              variant="outline-dark"
              type="submit"
              size="lg"
              className="back-btn me-4"
              onClick={() => {
                window.open("/enroll2", "_self");
              }}
            >
              Back
            </Button>
            <Button variant="dark" type="submit" size="lg" className="next-btn">
              Enroll Now
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default enrollment3;
