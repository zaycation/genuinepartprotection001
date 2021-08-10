import React from "react";
//import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { Container, Row, Col, Form } from "react-bootstrap";

import Nav from "../components/nav";
import Footer from "../components/footer";

import "./login.css";

const forgot = () => {
  return (
      <Container fluid className="login-bg">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <div className="forgot-box">
              <h2 className="login-header my-5">Forgot your password?</h2>

              <Form className="mx-5">
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Please enter your Username</Form.Label>
                  <Form.Control type="username" placeholder="Username" />
                </Form.Group>
                <button type="button" className="pp-btn">
                  Email link
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
  );
};

export default forgot;
