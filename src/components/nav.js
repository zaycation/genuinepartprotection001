import React from "react";
import { FaPhoneAlt, FaUserAlt } from "react-icons/fa";
import { Nav, Navbar, Container, Image } from "react-bootstrap";

import Logo from "../images/gpp-logo.png";

import "./nav.css";

const BootstrapNav = () => {
  return (
    <Navbar variant="dark" expand="md" fixed="top" className="nav-container">
      <Container>
        <Navbar.Brand href="/" className="">
          <Image src={Logo} rounded width="180px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex justify-content-end">
            <Nav.Link href="/policy-lookup">Policy Lookup</Nav.Link>
            <Nav.Link href="/enroll">Enroll Dealership</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link
              href="/login"
              className="d-flex align-items-center justify-contenr-center"
            >
              <FaUserAlt size={18} className="me-2" />
              Log In
            </Nav.Link>
            <Nav.Link
              href="tel:307-699-9730"
              className="d-flex align-items-center justify-contenr-center"
            >
              <FaPhoneAlt size={18} className="me-2" />
              +1 (307) 699 - 9730
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BootstrapNav;
