import React from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import * as s from "./index.style";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faYoutube,
  faVimeo,
  faLinkedin,
  faGooglePlus,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
  return (
    <>
      <s.FooterComponentWrapper>
        <Container>
          <Row>
            <Col md={6}>
              <s.FooterMenuMain>
                <s.FooterMenuUl>
                  <s.FooterMenuli>
                    <Nav.Link href="#link">Blog</Nav.Link>
                  </s.FooterMenuli>
                  <s.FooterMenuli>
                    <Nav.Link className="active" href="#link">
                      Adauga Locatie
                    </Nav.Link>
                  </s.FooterMenuli>
                  <s.FooterMenuli>
                    <Nav.Link href="#link">Cum functioneaza</Nav.Link>
                  </s.FooterMenuli>
                  <s.FooterMenuli>
                    <Nav.Link href="#link">Contact</Nav.Link>
                  </s.FooterMenuli>
                </s.FooterMenuUl>
              </s.FooterMenuMain>
            </Col>
            <Col md={3}>
              <s.FooterSoicalMain>
                <s.FooterBoxTitle>Urmareste-ne</s.FooterBoxTitle>
                <s.FooterSoicalUl>
                  <s.FooterSoicalli>
                    <Nav.Link href="#">
                      <FontAwesomeIcon icon={faRss} />
                    </Nav.Link>
                  </s.FooterSoicalli>
                  <s.FooterSoicalli>
                    <Nav.Link href="#link">
                      <FontAwesomeIcon icon={faFacebook} />
                    </Nav.Link>
                  </s.FooterSoicalli>
                  <s.FooterSoicalli>
                    <Nav.Link href="#link">
                      <FontAwesomeIcon icon={faTwitter} />
                    </Nav.Link>
                  </s.FooterSoicalli>
                  <s.FooterSoicalli>
                    <Nav.Link href="#link">
                      <FontAwesomeIcon icon={faGooglePlus} />
                    </Nav.Link>
                  </s.FooterSoicalli>
                  <s.FooterSoicalli>
                    <Nav.Link href="#link">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Nav.Link>
                  </s.FooterSoicalli>
                  <s.FooterSoicalli>
                    <Nav.Link href="#link">
                      <FontAwesomeIcon icon={faYoutube} />
                    </Nav.Link>
                  </s.FooterSoicalli>
                  <s.FooterSoicalli>
                    <Nav.Link href="#link">
                      <FontAwesomeIcon icon={faVimeo} />
                    </Nav.Link>
                  </s.FooterSoicalli>
                </s.FooterSoicalUl>
              </s.FooterSoicalMain>
            </Col>
            <Col md={3}>
              <s.FooterSoicalMain>
                <s.FooterBoxTitle>Newsletter</s.FooterBoxTitle>
                <s.NewsletterBox>
                  <InputGroup>
                    <FormControl type="text" />
                    <Button className="newsletter-submit" type="submit">
                      Trimite
                    </Button>
                  </InputGroup>
                </s.NewsletterBox>
              </s.FooterSoicalMain>
            </Col>
          </Row>
        </Container>

        <s.FooterCopyWrapper>
          <Container>
            <Row>
              <Col md={4}>
                <s.FooterCopyrightText>
                  Politica de Confidentialitate
                </s.FooterCopyrightText>
              </Col>
              <Col md={8}>
                <s.FooterPrivacyPolicy>
                  <Nav.Link href="#">Politica de Confidentialitate</Nav.Link>
                  <Nav.Link href="#">Termeni de utilizare</Nav.Link>
                </s.FooterPrivacyPolicy>
              </Col>
            </Row>
          </Container>
        </s.FooterCopyWrapper>
      </s.FooterComponentWrapper>
    </>
  );
};
export default FooterComponent;
