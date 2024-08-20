import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Burger from "../../../assets/hero/hero-2.png"
import { Link } from 'react-router-dom'

function SectionOne() {
    return (
        <>
            <section className='hero_section'>
                <Container>
                    <Row>
                        <Col lg={7} className='mb-5 mb-lg-0'>
                            <div className=" position-relative">
                                <img src={Burger} className=' img-fluid' alt="Hero" />
                                <div className="price_bag">
                                    <div className="badge_text">
                                        <h4 className='h4_xs'>Only</h4>
                                        <h4 className='h3_xs'>$6.66</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="hero_text text-center">
                                <h1 className=''>New <br /> Burger</h1>
                                <h3 className=''>Whit Onion</h3>
                                <p className='text-white pt-2 pb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam doloremque dolores eaque quam pariatur eveniet expedita porro id itaque alias.</p>
                                <Link to="/" className='btn order_now'> Order now </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SectionOne