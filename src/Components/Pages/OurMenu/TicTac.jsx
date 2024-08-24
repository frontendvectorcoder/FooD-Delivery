import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Circle from "../../../assets/tictac/circle.png";
import Cross from "../../../assets/tictac/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

function TicTac() {
  let [number, setnumber] = useState(0);
  let [lock, setlock] = useState(false);
  let clear = useRef([]);
  let namee = useRef();

  const ticClick = (e, i) => {
    if (lock) return 0;
    else if (number % 2 === 0) {
      e.target.innerHTML = `<img src="${Circle}" className=" img-fluid" alt="" />`;
      number = number + 1;
      setnumber(number);
      data[i] = "circle";
    } else {
      e.target.innerHTML = `<img src='${Cross}' className=" img-fluid" />`;
      number = number + 1;
      setnumber(number);
      data[i] = "cross";
    }
    checkwin();
  };

  // Check win

  const checkwin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[5] === data[2] && data[2] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    }
  };

  //  win

  const won = (data) => {
    setlock(true);
    if (data === "circle") {
      namee.current.innerHTML = `Congratulation <img src="${Circle}" className=" img-fluid" alt="" /> win`;
      console.log("ssssssss");
    } else {
      namee.current.innerHTML = `Congratulation <img src="${Cross}" className=" img-fluid" alt="" /> win`;
      console.log("eeeee");
    }
  };

  // RESET
  const reset = () => {
    console.log("first", clear);
    setnumber(0);
    setlock(false);
    data.fill("");
    namee.current.innerHTML = "Game Tic Tac React";
    clear.current.forEach((e) => {
      e.innerHTML = "";
    });
  };

  const boxrannder = () => {
    let boxes = [];
    for (let i = 0; i < 9; i++) {
      boxes.push(
        <div
          className="box"
          ref={(el) => (clear.current[i] = el)}
          key={i}
          onClick={(e) => {
            ticClick(e, i);
          }}
        ></div>
      );
    }
    return boxes;
  };

  return (
    <>
      <section className=" pb-5" style={{ backgroundColor: "#111b22" }}>
        <Container>
          <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5">
            <Col lg={{ span: 4 }} className="pt-5">
              <div className=" BOXCOLOR text-center">
                <h1 ref={namee}>Game Tic Tac React</h1>
                <div className="bord">
                  <div className="row1">{boxrannder()}</div>
                </div>
                <button className="reset btn btn_red" onClick={reset}>
                  RESET
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default TicTac;
