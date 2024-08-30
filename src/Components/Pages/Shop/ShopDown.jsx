import React, { useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


const countries = [
    {
        name: 'Select', value: "disabled", disabled: 'disabled', selected: "true"
    },
    {
        name: 'USA', value: "usa", cities: [
            'new york',
            'york'
        ]
    },
    {
        name: 'pakistan', value: "pk", cities: [
            'Faisalabad',
            'Lahore'
        ]
    },
    {
        name: 'Bangladesh', value: "bn", cities: [
            'Dhaka',
            'Chittagong'
        ]
    },
]


function ShopDown() {


    const [disable, setdisable] = useState(true)
    const [second , setsecond] = useState([])

    let Selectedcity = (choice) => {
        console.log("Two")

        for (let i = 0; i < countries.length; i++) {
            
            
        }

        if (choice.target.value) {
           let newvalue = countries.map((item)=>item.value)
           console.log("newvalue" , newvalue)
           for (let index = 0; index < newvalue.length; index++) {
            let secondselect = newvalue[index]
               if (choice.target.value == secondselect) {
                setdisable(false)
                console.log(secondselect)
               }            
           }
        }
    }

    return (
        <section className=" pb-5" style={{ backgroundColor: "#111b22" }}>
            <Container>
                <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
                    <Col lg={{ span: 4 }} className="pt-5">
                        <Form.Select onChange={(choice) => Selectedcity(choice)}  >
                            {
                                countries.map((country, index) => (
                                    <option value={country.value} key={index} disabled={country.disabled} selected={country.selected} >{country.name}</option>
                                ))
                            }
                        </Form.Select>
                    </Col>
                    <Col lg={{ span: 4 }} className="pt-5">
                        <Form.Select disabled={disable} aria-label="Default select example">
                            {
                                disable == "true" ? "not" : (
                                    <option></option>
                                )
                            }
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ShopDown