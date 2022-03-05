import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import * as s from "./index.style";
// import HeaderLogo from "../../";
import Image from "next/image";

const HeaderComponent = () => {
  return (
    <>
      <s.HeaderComponentWrapper>
        <Navbar bg="dark" expand="lg" className="menu-navbar">
          <Container>
            <Navbar.Brand href="#home">
              {/* <Image src={HeaderLogo} alt="Logo" width={146} height={36} /> */}
              <img src="/images/logo.png" alt="HeaderLogo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="menu-nav">
                <Nav.Link href="#home" className="active">
                  Adauga Locatie
                </Nav.Link>
                <Nav.Link href="#link">Intra in cont</Nav.Link>
                <Nav.Link href="#link">Inregistrare</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </s.HeaderComponentWrapper>
    </>
  );
};
export default HeaderComponent;
