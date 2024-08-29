import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


const countries = [
    { name: 'USA', value:"usa" , cities:[
        'new york',
        'york'
    ] },
    { name: 'pakistan', value:"pk" , cities:[
        'Faisalabad',
        'Lahore'
    ] },
    { name: 'Bangladesh', value:"bn" , cities:[
        'Dhaka',
        'Chittagong'
    ] },
]


function ShopDown() {
    return (
        <section className=" pb-5" style={{ backgroundColor: "#111b22" }}>
            <Container>
                <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
                    <Col lg={{ span: 4 }} className="pt-5">
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                    <Col lg={{ span: 4 }} className="pt-5">
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ShopDown