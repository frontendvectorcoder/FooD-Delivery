import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';


function SectionSeven() {
    return (
        <>

            <section className='contect_section'>
                <Container>
                    <Row className=' justify-content-center'>
                        <Col sm={8} className=' text-center'>
                            <h4>Lorem ipsum, dolor </h4>
                            <h2>Lorem ipsum dolor sit amet.</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non deserunt iste placeat eligendi doloribus. Impedit molestias numquam nihil harum accusantium voluptas esse deserunt?</p>
                            <Link to="/" className='btn btn_red'>Contect With US</Link>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default SectionSeven