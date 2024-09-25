import React, { useState } from "react";
import Layout from "../../Layout/Layout";
import { Container, Row, Col, Button } from "react-bootstrap";

const HOC = (Component) => {
  return (
    <Layout>
      <section className=" pb-5" style={{ backgroundColor: "#111b22" }}>
        <Container>
          <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
            <Col lg={{ span: 12 }} className="pt-5">
              {/* <Count /> */}
              <CountD com={Count} />
              <CountYELLOW com={Count} />
              <CountRED com={Count} />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

function Count() {
  let [count, setcount] = useState(0);

  return (
    <Button
      onClick={() => {
        setcount(count + 5);
      }}
    >
      {count}
    </Button>
  );
}

function CountD(props) {
  return (
    <h2 style={{ backgroundColor: "red" }}>
      <props.com />
    </h2>
  );
}
function CountRED(props) {
  return (
    <h2 style={{ backgroundColor: "green" }}>
      <props.com />
    </h2>
  );
}
function CountYELLOW(props) {
  return (
    <h2 style={{ backgroundColor: "yellow" }}>
      <props.com />
    </h2>
  );
}

export default HOC;
