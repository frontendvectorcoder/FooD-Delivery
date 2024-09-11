import React, { lazy, Suspense, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Layout from "../../Layout/Layout";

const LazySComponent = lazy(() => import("./Suspence.jsx"));

function LazyComponent() {
  let [buttondata, setbuttondata] = useState(false);

  let showlazy = () => {
    setbuttondata(true);
  };

  return (
    <Layout>
      <section
        className=" pb-5"
        style={{ backgroundColor: "#111b22", height: "100vh" }}
      >
        <Container className=" justify-content-center align-items-center d-flex pt-5 pb-5">
          <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
            <Col lg={{ span: 12 }}>
              <h1 className="Dyamic py-5 text-center">lAZY lOADER</h1>
              <div className=" d-flex align-content-center justify-content-center">
                <Button onClick={showlazy}>Click Show Component</Button>
                {buttondata && (
                  <Suspense fallback={<div>...loading</div>}>
                    <LazySComponent />
                  </Suspense>
                )}
              </div>
              <div className="list pt-3"></div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}

export default LazyComponent;
