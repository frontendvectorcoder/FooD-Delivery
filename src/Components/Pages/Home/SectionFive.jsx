import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import storIOS from "../../../assets/shop/appstore.png";
import storeis from "../../../assets/shop/googleplay.png";
import eshop from "../../../assets/shop/e-shop.png";
import brand1 from "../../../assets/brands/brand-11.png"
import brand2 from "../../../assets/brands/brand-12.png"
import brand3 from "../../../assets/brands/brand-13.png"
import brand4 from "../../../assets/brands/brand-14.png"
import brand5 from "../../../assets/brands/brand-15.png"
import brand6 from "../../../assets/brands/brand-16.png"
import brand7 from "../../../assets/brands/brand-17.png"

function SectionFive() {
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row className=" align-content-center">
            <Col lg={6} className=" text-center text-lg-start mb-5 mb-lg-0">
              <h4>Lorem ipsum dolor sit amet.</h4>
              <h2>save upto 50%</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
                blanditiis architecto inventore mollitia doloribus tempore
                repellat quasi deserunt laboriosam cumque.
              </p>
              <Link to="/">
                <img src={storIOS} alt="image" className=" img-fluid me-3 store" />
              </Link>
              <Link to="/">
                <img src={storeis} alt="image" className=" img-fluid me-3 store" />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={eshop} className=" img-fluid" alt="shop name" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="brand_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className=" d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={brand1} className=" img-fluid" alt="Beands" />
                    </div>
                    <div className="brand_img">
                      <img src={brand2} className=" img-fluid" alt="Beands" />
                    </div>
                    <div className="brand_img">
                      <img src={brand3} className=" img-fluid" alt="Beands" />
                    </div>
                    <div className="brand_img">
                      <img src={brand4} className=" img-fluid" alt="Beands" />
                    </div>
                    <div className="brand_img">
                      <img src={brand5} className=" img-fluid" alt="Beands" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className=" d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={brand3} className=" img-fluid" alt="Beands" />
                    </div>
                    <div className="brand_img">
                      <img src={brand4} className=" img-fluid" alt="Beands" />
                    </div>
                    <div className="brand_img">
                      <img src={brand5} className=" img-fluid" alt="Beands" />
                    </div>
                    <div className="brand_img">
                      <img src={brand6} className=" img-fluid" alt="Beands" />
                    </div>
                    <div className="brand_img">
                      <img src={brand7} className=" img-fluid" alt="Beands" />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SectionFive;
