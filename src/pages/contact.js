import React from "react";
//import { FaRegFilePdf } from "react-icons/fa";
import { Container, Row, Col, Form } from "react-bootstrap";

import Nav from "../components/nav";
import Footer from "../components/footer";

import "./login.css";

const contact = () => {
  return (
    <>
      <Nav />
      <Container fluid className="login-bg">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <div className="login-box">
              <h2 className="login-header my-5">We Want to Hear From You!</h2>
              <Form className="mx-5">
                <Form.Group className="mb-3" controlId="formBasicFullName">
                  <Form.Control type="name" placeholder="Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Control type="phone" placeholder="Phone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Control
                    type="textarea"
                    placeholder="Message"
                    className="text-area"
                  />
                </Form.Group>
                <button type="button" className="pp-btn mb-4">
                  Send
                </button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default contact;
