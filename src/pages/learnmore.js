import React from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

import Nav from "../components/nav";
import Footer from "../components/footer";

import "./login.css";

const learnmore = () => {
  return (
    <>
      <Nav />
      <Container fluid className="login-bg">
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <div className="login-box text-center">
              <h2 className="login-header mt-5">Learn more</h2>
              <p className="my-3">Download information brochure pdf</p>
              <div className="mt-5 d-flex align-items-center justify-content-evenly">
                <div>
                  <FaRegFilePdf size={56} color="#ff0000" />
                  <h5 className="mt-4">Customer Information</h5>
                  <p>PDF, 761kB</p>
                  <button type="button" className="learn-btn">
                    Download
                  </button>
                </div>
                <div>
                  <FaRegFilePdf size={56} color="#ff0000" />
                  <h5 className="mt-4">Dealer Information</h5>
                  <p>PDF, 761kB</p>
                  <button type="button" className="learn-btn">
                    Download
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default learnmore;
