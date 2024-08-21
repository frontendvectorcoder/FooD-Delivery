import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from "../../../assets/about/Pizza.png"
import Salad from "../../../assets/about/salad.png"
import Delivery from "../../../assets/about/delivery-bike.png"

// Mock Data Cards
const mockData = [
    {
        image: Pizza,
        title: "Original",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
        image: Salad,
        title: "Qualty Foods",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    {
        image: Delivery,
        title: "Fastest Delivery",
        paragraph: `Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae integer orci congue and metus integer primis in integer metus`,
    },
    // Add more mock data objects as needed
];


function SectionTwo() {
    return (
        <>
            <section className='about_section'>
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }}>
                            <div className=" text-center">
                                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe velit alias. Accusantium, omnis sequi pariatur labore laudantium suscipit eveniet.</p>
                                <Link to="/" className='btn order_now btn_red'>Explor Full Menu</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='about_section_two'>
                <Container>
                    <Row className=' justify-align-content-md-center'>
                        {mockData.map((items, index) => (
                            <Col md={6} lg={4} className='mb-4 mb-md-0'>
                                <div className="about_text text-center">
                                    <div className="about_icon">
                                        <img src={items.image} alt="ICONS" className=' img-fluid' />
                                    </div>
                                    <div className="about_heding">
                                        <h3>{items.title}</h3>
                                    </div>
                                    <div className="about_text text-gray">
                                        <p>{items.paragraph}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SectionTwo