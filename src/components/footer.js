import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./footer.css";

const footer = () => {
  return (
    <Navbar
      className="justify-content-center footer-nav"
      fixed="bottom"
      activeKey="/home"
    >
      <Nav.Item className="px-5 text-white">
        Copyright © 2017-2021 Genuine PartProtection. All Rights Reserved
      </Nav.Item>
    </Navbar>
  );
};

export default footer;
