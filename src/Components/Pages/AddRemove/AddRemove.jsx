import React, { useState } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import Layout from '../../Layout/Layout'

function AddRemove() {

    const [item, setitem] = useState('');
    const [Array, setArray] = useState([]);

    let additem = () => {
        if (item.trim()) {
            console.log(item)
            setArray([...Array, item.trim()])
            setitem('')
            console.log(Array)
        }
    }
    let removeitem = (index) => {
        setArray(Array => Array.filter((_, i) => i !== index));
    }

    return (
        <Layout>
            <section className=' pb-5' style={{ backgroundColor: '#111b22', height: '100vh' }}>
                <Container className=" justify-content-center align-items-center d-flex pt-5 pb-5">
                    <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
                        <Col lg={{ span: 12 }} >
                            <h1 className="Dyamic py-5 text-center">Dyamic List</h1>
                            <div className=" d-flex align-content-center justify-content-center">
                                <input type="text" value={item} placeholder="Type here..." className='p-1' onChange={(e) => { setitem(e.target.value) }} />
                                <Button className='ms-1' onClick={additem} >ADD ITEMS</Button>
                            </div>
                            <div className="list pt-3">
                                <ul>
                                    {
                                        Array.map((items, index) => (
                                            <li className='py-2' key={index}>
                                                {items}
                                                <Button className='ms-3' onClick={() => removeitem(index)}>REMOVE</Button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}

export default AddRemove