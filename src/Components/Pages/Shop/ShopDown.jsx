import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const countries = [
    {
        name: "Select",
        value: "disabled",
        disabled: "disabled",
    },
    {
        name: "USA",
        value: "usa",
        cities: ["New york", "Los Angeles"],
    },
    {
        name: "pakistan",
        value: "pk",
        cities: ["Faisalabad", "Lahore"],
    },
    {
        name: "Bangladesh",
        value: "bn",
        cities: ["Dhaka", "Chittagong"],
    },
];

function ShopDown() {

    let [disabled, setdisabled] = useState(true)
    let [selectedCountry, setSelectedCountry] = useState([]);

    let changevalue = (check) => {
        console.log(check)

        let ismatch = countries.find(item => item.value == check)
        // console.log(ismatch , "match ho gaya")
        if (ismatch && ismatch.cities) {
            setdisabled(false)
            setSelectedCountry(ismatch.cities)
        }
        else {
            setdisabled(true)
            setSelectedCountry([])
        }
    }



    return (
        <section className=" pb-5" style={{ backgroundColor: "#111b22" }}>
            <Container>
                <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
                    <Col lg={{ span: 4 }} className="pt-5">
                        <Form.Select onChange={e => changevalue(e.target.value)}>
                            {
                                countries.map((country, index) => (
                                    <option key={index} value={country.value} >{country.name}</option>
                                ))
                            }
                        </Form.Select>
                    </Col>
                    <Col lg={{ span: 4 }} className="pt-5">
                        <Form.Select disabled={disabled} aria-label="Default select example">
                            {
                                disabled ? (
                                    <option disabled>not</option>
                                ) : (
                                    selectedCountry.map((city, index) => (
                                        <option key={index} value={city}>{city}</option>
                                    )
                                    )
                                )
                            }
                        </Form.Select>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ShopDown;



// const [disable, setdisable] = useState(true);
// const [second, setsecond] = useState();

// let Selectedcity = (choice) => {
//     console.log(choice)

//     let ismatch = countries.find(item => item.value === choice)
//     console.log("first ", ismatch)

//     if (ismatch && ismatch.cities) {
//         setsecond(ismatch.cities)
//         setdisable(false)
//     } else {
//         setsecond([]);
//         setdisable(true)
//     }



//     // if (choice) {
//     //   let newvalue = countries.map((item) => item);
//     //   console.log(newvalue);
//     //     for (let index = 0; index < newvalue.length; index++) {
//     //       let secondselect = newvalue[index];
//     //       console.log(secondselect)
//     //       if (choice == secondselect[index].value) {
//     //         console.log("dddddddddddddddddddddddddddddddddddd")
//     //       }
//     //     }
//     // }
// };





// <Col lg={{ span: 4 }} className="pt-5">
//                         <Form.Select
//                             onChange={(choice) => Selectedcity(choice.target.value)}
//                         >
//                             {countries.map((country, index) => (
//                                 <option
//                                     value={country.value}
//                                     key={index}
//                                     disabled={country.disabled}
//                                 >
//                                     {country.name}
//                                 </option>
//                             ))}
//                         </Form.Select>
//                     </Col>
//                     <Col lg={{ span: 4 }} className="pt-5">
//                         <Form.Select disabled={disable} aria-label="Default select example">
//                             {disable ? (
//                                 <option disabled>not</option>
//                             ) : (
//                                 second.map((city, index) => (
//                                     <option key={index} value={city}>{city}</option>
//                                 ))
//                             )}
//                         </Form.Select>
//                     </Col>