import React from "react";
//import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { Container, Row, Col, Form } from "react-bootstrap";

import Nav from "../components/nav";
import Footer from "../components/footer";

import "./login.css";

const login = () => {
  return (
    <>
      <Nav />
      <Container fluid className="login-bg">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <div className="login-box">
              <h2 className="login-header my-5">Log in</h2>

              <Form className="mx-5">
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="username" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <button type="button" className="pp-btn">
                  Log in
                </button>
                <br />
                <p
                  className="mt-4 text-center pw-text"
                  onClick={() => {
                    window.open("/forgot", "_self");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Forgot Password?
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default login;
