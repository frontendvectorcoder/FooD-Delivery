import React from "react";
import Layout from "../../Layout/Layout";
import { Container, Row, Col } from "react-bootstrap";

const HOC = (Component) => {
  return (
    <Layout>
      <section className=" pb-5" style={{ backgroundColor: "#111b22" }}>
        <Container>
          <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
            <Col lg={{ span: 12 }} className="pt-5">

            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default HOC;
