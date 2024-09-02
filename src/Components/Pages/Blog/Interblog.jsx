import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Interblog() {
  let [intdata, setintdata] = useState(null);
  let [interror, setinterror] = useState(null);
  let [intloading, setintloading] = useState(false);

  useEffect(() => {
    let fetchdata = async () => {
      try {
        setintloading(true);
        let response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error(`http Error ${response.status}`);
        }

        let data = await response.json();
        setintdata(data);
      } catch (error) {
        setinterror(error);
      } finally {
        setintloading(false);
      }
    };

    fetchdata();
  }, []);

  console.log(intdata);

  return (
    <section className=" pb-5" style={{ backgroundColor: "#111b22" }}>
      <Container>
        <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
          <Col lg={{ span: 12 }} className="pt-5">
            {intloading ? (
              <div>loading....</div>
            ) : interror ? (
              <div>{interror.message}</div>
            ) : intdata ? (
              <div>
                {intdata.map((item) => (
                  <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div>No data available</div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Interblog;





// import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";

// function Interblog() {
//   let [data, setdata] = useState(null);
//   let [error, seterror] = useState(null);
//   let [load, setload] = useState(true);

//   useEffect(() => {
//     let fetchdata = async () => {
//       try {
//         setload(true);
//         let response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts"
//         );
//         if (!response.ok) {
//           throw new Error(`Error is This ${response.status}`);
//         }
//         let datais = await response.json();
//         setdata(datais);
//       } catch (error) {
//         seterror(error);
//       } finally {
//         setload(false);
//       }
//     };

//     fetchdata();
//   }, []);
//   console.log(data, "data");

//   return (
//     <section className=" pb-5" style={{ backgroundColor: "#111b22" }}>
//       <Container>
//         <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
//           <Col lg={{ span: 4 }} className="pt-5">
//             {load ? (
//               <div>loading......</div>
//             ) : error ? (
//               <div>{error.message}</div>
//             ) : data ? (
//               <div>
//                 {data.map((item) => (
//                   <div>{item.title}</div>
//                 ))}
//               </div>
//             ) : (
//               <div>Not Data</div>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// }

// export default Interblog;
