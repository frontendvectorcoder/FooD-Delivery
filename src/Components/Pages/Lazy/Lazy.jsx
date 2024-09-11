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





// import React, { useState, useEffect } from "react";

// function Home() {
//   const [data, setData] = useState([]);
//   const [render, setrender] = useState(false);

//   useEffect(() => {
//     console.log("first");
//     // This code runs when the component is mounted (initial load)
//     fetch("https://jsonplaceholder.typicode.com/posts/") // Replace with your API endpoint
//       .then((response) => response.json())
//       .then((result) => {
//         setData(result); 
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });

//       return () =>{
//         console.log("Unmonted")
//       }
//   }, [render]); // Empty dependency array ensures this effect runs only once on mount

//   return (
//     <div>
//       <button onClick={() => setrender(!render)}>Toggle</button>
//       <h1>Data from API:</h1>
//       {data.length > 0 ? (
//         data.map((item) => <p key={item.id}>{item.title}</p>)
//       ) : (
//         <p>No data available.</p>
//       )}
//     </div>
//   );
// }

// export default Home;