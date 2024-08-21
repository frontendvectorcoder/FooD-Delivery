import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import storIOS from "../../../assets/shop/appstore.png";
import storeis from "../../../assets/shop/googleplay.png";
import eshop from "../../../assets/shop/e-shop.png";

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
                <img src={storIOS} alt="image" className=" img-fluid me-3" />
              </Link>
              <Link to="/">
                <img src={storeis} alt="image" className=" img-fluid me-3" />
              </Link>
            </Col>
            <Col lg={6}>
              <img src={eshop} className=" img-fluid" alt="shop name" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default SectionFive;
