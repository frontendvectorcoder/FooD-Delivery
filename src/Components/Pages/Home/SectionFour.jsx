import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Promotion from "../../../assets/promotion/pro.png"


function SectionFour() {
    return (
        <>
            <section className=''>
                <Container>
                    <Row className=' align-items-center'>
                        <Col lg={6} className=' text-center mb-5 mb-lg-0'>
                            <img src={Promotion} alt="Image" className=' img-fluid' />
                        </Col>
                        <Col lg={6} className='px-5'>
                            <h3>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit asperiores quos qui at inventore illum fuga alias hic architecto voluptates.</p>
                            <ul>
                                <li>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum distinctio consequatur placeat.</p>
                                </li>
                                <li>
                                    <p>Rerum fugiat similique vero eaque repellat ut dicta provident consequatur quos autem.</p>
                                </li>
                                <li>
                                    <p>Ducimus odit suscipit atque at porro accusantium expedita? Voluptate, ullam? Maxime, quasi.</p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

                <section className='bg_paralax'>

                </section>

        </>
    )
}

export default SectionFour