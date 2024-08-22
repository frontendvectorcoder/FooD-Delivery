import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className=' mb-4 mb-lg-0'>
              <div className=" text-center">
                <h5>LOCATION</h5>
                <p>Lorem ipsum dolor sit.</p>
                <p>Main Bazar England</p>
                <p>United State.</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className=' mb-4 mb-lg-0'>
              <div className=" text-center">
                <h5>Working Hours</h5>
                <p>Lorem ipsum 10:30</p>
                <p>Lorem 12:30 to 10:30</p>
                <p>Lorem ipsum 10:30</p>
              </div>
            </Col>
            <Col sm={6} lg={3} className=' mb-4 mb-lg-0'>
              <div className=" text-center">
                <h5>Order Now</h5>
                <p>Lorem ipsum dolor sit.</p>
                <Link to="tel:444334444434" className='calling'>444334444434</Link>
              </div>
            </Col>
            <Col sm={6} lg={3} className=' mb-4 mb-lg-0'>
              <div className=" text-center">
                <h5>Follow Us</h5>
                <p>Lorem ipsum dolor sit.</p>
                <ul className=' list-unstyled text-center mt-2'>
                  <li>
                    <Link to="/" className=''><i className="bi bi-whatsapp"></i></Link>
                  </li>
                  <li>
                    <Link to="/" className=''><i className='bi bi-facebook'></i></Link>
                  </li>
                  <li>
                    <Link to="/" className=''><i className='bi bi-youtube'></i></Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer