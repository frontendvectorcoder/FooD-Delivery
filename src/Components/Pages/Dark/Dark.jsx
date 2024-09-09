import React, { useContext } from "react";
import { ContentApi } from "./ContentApi";
import { Container, Row, Col } from "react-bootstrap";
import Layout from '../../Layout/Layout'
import "../../Style/Dark.css"


function Dark() {

    const context = useContext(ContentApi);

    // // Check if context is available and has the expected properties
    // if (!context) {
    //     return <div>Error: Context is undefined. Ensure that ContentProvider is correctly wrapping the component tree.</div>;
    // }

    const { themetoggle, checklocal } = context;

    return (
        <Layout>
            <section className={`switch ${checklocal} pb-5`}>
                <Container>
                    <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
                        <Col lg={{ span: 12 }} className="pt-5">
                            <div className="pt-5">
                                <div className="">
                                    <h1>React Theme Switcher Color</h1>
                                    <button onClick={themetoggle}>
                                        Switch to {checklocal === 'light' ? 'Light' : 'Dark'}
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}
export default Dark;