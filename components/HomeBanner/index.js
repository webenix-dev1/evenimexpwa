import React from "react";
import { Carousel, Container,Button,FormControl,Form,Row,Col } from 'react-bootstrap';
import Image from 'next/image'
import * as s from "./index.style";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const options = [
  { value: 'Localizare (Oras)', label: 'Localizare (Oras)' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

function HomeBannerComponent() {

  return (
    <>
     <s.HomeBannerWrapper>
        <Carousel fade>
          <Carousel.Item>
            <img src="../../assets/images/home-slide-01.jpg" alt="Logo"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../assets/images/home-slide-02.jpg" alt="Logo"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../assets/images/home-slide-03.jpg" alt="Logo"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../assets/images/home-slide-04.jpg" alt="Logo"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../assets/images/home-slide-05.jpg" alt="Logo"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../assets/images/home-slide-06.jpg" alt="Logo"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../assets/images/home-slide-07.jpg" alt="Logo"/>
          </Carousel.Item>
          <Carousel.Item>
            <img src="../../assets/images/home-slide-08.jpg" alt="Logo"/>
          </Carousel.Item>
        </Carousel>

          <s.HomeBannerContent>
            <Container>
            <s.Title>Evenimentul tau</s.Title>
            <s.Descipition>Cauta prin cele peste 10,000 de locatii.</s.Descipition>
            </Container>
            <s.BannerSearchboxwarpper>
              <Container>
                <Row>
                  <Col md={3}>
                    <Select options={options}  />
                  </Col>
                  <Col md={3}>
                    <DatePicker placeholderText="Data evenimentului"/>
                  </Col>
                  <Col md={2}>
                  <FormControl type="number" placeholder="Numar participanti" />
                  </Col>
                  <Col md={2}>
                    <Form.Select>
                      <option value="">Tip Eveniment</option>
                      <option value="1">Nunta</option>
                      <option value="17">Evenimente sociale</option>                      
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <Button className="equiryform-btn" type="submit">Cauta</Button>
                  </Col>                  
                </Row>
                </Container>
                 
              </s.BannerSearchboxwarpper>
          </s.HomeBannerContent>

          
        
      </s.HomeBannerWrapper>
    </>
  );
  
}
export default HomeBannerComponent;