import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LIGHT_DURATION, COLOR_LIGHT } from "./LightDuration";

function TrafficLight() {

    const [red, setred] = useState("red")
    const [start, setstart] = useState("yellow");

    useEffect(() => {
        const time = setInterval(() => {
            switch (red) {
                case "green":
                    setTimeout(() => {
                        setred("yellow");
                        setstart("red")
                    });
                    break;
                case "yellow":
                    setTimeout(() => {
                        setred(start)
                    })
                    break;
                case "red":
                    setTimeout(() => {
                        setred("yellow");
                        setstart("green")
                    })
                default:
                    break;
            }
        }, LIGHT_DURATION[red])
        return () => clearInterval(time);
    }, [red, start])

    return (
        <>
            <section className=' pb-5' style={{ backgroundColor: '#111b22' }}>
                <Container>
                    <Row className=' justify-content-center align-items-center d-flex pt-5'>
                        <Col xs={{ span: 4 }} className='pt-5'>
                            <div className="traficlight">
                                <div className="">
                                    {
                                        COLOR_LIGHT.map((color) => (
                                            <div key={color} className={`innerlight ${color} ${red === color ? "activee" : " "}`}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default TrafficLight