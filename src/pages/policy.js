import React from "react";
//import { FaRegFilePdf } from "react-icons/fa";
import { Container, Row, Col, Form } from "react-bootstrap";

import Nav from "../components/nav2";
import Footer from "../components/footer2";

import "./login.css";
import "./policy.css";

const policy = () => {
  return (
    <>
      <Nav />
      <Container fluid className="policy-bg">
        <Row>
          <Col className="my-5 text-center text-white">
            <h1 className="mt-5">Policy Lookup</h1>
            <p className="mt-4">
              Please fill out the form below to find contract(s)
            </p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <div className="policy-box text-center">
              <Form className="mx-5 my-5">
                <Row>
                  <Col>
                    <Form.Control placeholder="Vin (last 7)" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Contract No." />
                  </Col>
                  <Col>
                    <p>OR</p>
                  </Col>
                  <Col>
                    <Form.Control placeholder="Last Name or Email" />
                  </Col>
                </Row>

                <button type="button" className="search-btn mt-5">
                  Search
                </button>
              </Form>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <div className="policy-box text-center">
              <Form className="mx-5 my-5">
                <Row>
                  <Col>
                    <Form.Control placeholder="RO/Invoice" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Customer" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="VIN" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Created By" />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <Form.Control placeholder="Contract #" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Address" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Vehicle" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Date" />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <Form.Control placeholder="Status" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Phone" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Mileage" />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Paperwork" />
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="mt-5" />
          <div className="mt-5" />
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default policy;
