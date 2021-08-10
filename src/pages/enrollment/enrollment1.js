import React from "react";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";

import Nav2 from "../../components/nav2";
import Footer from "../../components/footer2";
import Line from "../../images/grayln.png";
import "./enrollment1.css";

const enrollment1 = () => {
  return (
    <>
      <Nav2 />
      <Container fluid className="enrollment-bg">
        <Row>
          <Col className="my-5 text-center">
            <h1 className="mt-5 text-white">Dealership Enrollment</h1>
            <p className="mt-4 text-white">
              Please fill out the form below and press "Enroll Now" at the end
              to complete your enrollment
            </p>
            <div className="d-flex flex-row align-items-center justify-content-center mt-4">
              <div className="step-1-box ms-3">
                <p className="step-1-txt mt-2">1</p>
              </div>
              <p className="mt-2 me-3 ms-3 text-white">Dealership Info</p>
              <Image src={Line} rounded width="100px" />
              <div className="step-2-box ms-3">
                <p className="step-2-txt mt-2 text-black">2</p>
              </div>
              <p className="mt-2 me-3 ms-3 text-white">Billing Info</p>
              <Image src={Line} rounded width="100px" />
              <div className="step-3-box ms-3">
                <p className="step-1-txt mt-2">3</p>
              </div>
              <p className="mt-2 me-3 ms-3 text-white">Confirmation</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mx-5">
          <Col>
            <h5 className="header-txt my-4">Dealership Information</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Dealer Code</Form.Label>
                <Form.Control type="code" placeholder="121212" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="dealership" placeholder="Dealership*" />
              </Form.Group>

              <Form.Label>Makes</Form.Label>
              <Form.Select className="mb-3" aria-label="Default select example">
                <option>Select Default Make</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="address" placeholder="Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="city" placeholder="City" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="zip" placeholder="Zip" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="phone" placeholder="Phone Number" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <h5 className="header-txt my-4">Program Fees</h5>
            <Form>
              <Form.Label>DMS Types</Form.Label>
              <Form.Select className="mb-3" aria-label="Default select example">
                <option>Select DMS</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form>
            <div className="results-box">
              <div className="d-flex flex-row align-items-center justify-content-between pt-4 result-container">
                <p className="left-result">DMS Monthly Fee</p>
                <p className="right-result">$100</p>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-between pt-4 result-container">
                <p className="left-result">Monthly Program Fee</p>
                <p className="right-result">$0</p>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-between pt-4 result-container">
                <p className="left-result">Total Monthly Fee</p>
                <p className="right-result">$0</p>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-between pt-4">
                <p className="left-result">One Time DMS Enrollment Fee</p>
                <p className="right-result">$0</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mx-5">
          <Col className="d-flex flex-row align-items-center justify-content-center">
            <Button
              variant="dark"
              type="submit"
              size="lg"
              className="next-btn"
              onClick={() => {
                window.open("/enroll2", "_self");
              }}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default enrollment1;
