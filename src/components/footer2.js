import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./footer.css";

const footer2 = () => {
  return (
    <Navbar
      className="justify-content-center footer-nav"
      activeKey="/home"
    >
      <Nav.Item className="px-5 gray-clr">
        Copyright © 2017-2021 Genuine PartProtection. All Rights Reserved
      </Nav.Item>
    </Navbar>
  );
};

export default footer2;
