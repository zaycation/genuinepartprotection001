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
      <Nav.Item className="px-5">
        PartProtection® is a registered trademark with the United States
        Trademark Office. Copyright © 2021 All Rights Reserved.
      </Nav.Item>
    </Navbar>
  );
};

export default footer;
