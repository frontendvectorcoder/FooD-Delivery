import React, { useState } from "react";
import { useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Searchbar() {
  let [searchvalue, setsearchvalue] = useState("");

  let list = useMemo(() => ["Apple", "Banana", "Orange", "Date"], []);

  let findsearch = (e) => {
    console.log(e.target.value);
    setsearchvalue(e.target.value);
  };

  let checkkey = list.filter((item) => {
    return item.toLowerCase().includes(searchvalue.toLowerCase());
  });

  return (
    <>
      <section className=" pb-5" style={{ backgroundColor: "#111b22" }}>
        <Container>
          <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
            <Col lg={{ span: 12 }} className="pt-5">
              <input type="text" value={searchvalue} onChange={findsearch} />
              <ul>
                {
                  checkkey.map((item , key)=>(
                    <li key={key} >{item}</li>
                  ))
                }
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Searchbar;
