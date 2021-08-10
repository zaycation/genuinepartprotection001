import React from "react";
import { Container, Row, Col, Button, Image, Form } from "react-bootstrap";

import Nav2 from "../../components/nav2";
import Footer from "../../components/footer2";
import Line from "../../images/grayln.png";
import "./enrollment2.css";

const enrollment2 = () => {
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
              <div className="step-box-2 ms-3">
                <p className="step-1-txt mt-2">2</p>
              </div>
              <p className="mt-2 me-3 ms-3">Billing Info</p>
              <Image src={Line} rounded width="100px" />
              <div className="step-3-box ms-3">
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
            <h5 className="header-txt my-4">Office Manager / Controller</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="firstname" placeholder="Anna" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="lastname" placeholder="Brown*" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="phone" placeholder="Phone Number*" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email*" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="fax" placeholder="Fax" />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <h5 className="header-txt my-4">Program Fees</h5>
            <Form>
              <Form.Group className="my-3" controlId="formBasicEmail">
                <Form.Control
                  type="address"
                  placeholder="Address"
                  className="my-3"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="city" placeholder="City" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="state" placeholder="State" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="zip" placeholder="Zip" />
              </Form.Group>

              <Form.Label>Billing Preference</Form.Label>
              <Form.Select className="mb-3" aria-label="Default select example">
                <option>Select Preference</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
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
                window.open("/enroll1", "_self");
              }}
            >
              Back
            </Button>
            <Button
              variant="dark"
              type="submit"
              size="lg"
              className="next-btn"
              onClick={() => {
                window.open("/enroll3", "_self");
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

export default enrollment2;
