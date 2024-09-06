import React, { useEffect, useState, createContext } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Layout from '../../Layout/Layout'
import "../../Style/Dark.css"

export const ThemeContext = createContext();

export const Dark = ({ children }) => {

    let [thems, setthems] = useState('light');
    let [buttontext, setbuttontext] = useState('light')

    useEffect(() => {
        const savetheme = localStorage.getItem('app-theme');
        if (savetheme) {
            setthems(savetheme)
           let isclassavalibel =  document.querySelectorAll('.switch');

           if (isclassavalibel) {
            console.log(isclassavalibel , "dddd")
            isclassavalibel.className = savetheme
           }

        }
    }, [])

    const Toggletheme = () => {
        const newtheme = thems === 'light' ? 'dark' : 'light';
        setbuttontext(newtheme)
        setthems(newtheme)
        localStorage.setItem('app-theme', newtheme)
        let issclassavalibel =  document.querySelectorAll('.switch');

           if (issclassavalibel) {
            console.log(issclassavalibel , "ffff")
            issclassavalibel.className = newtheme
           }
    }

    return (
        <Layout>
            <section className="switch pb-5">
                <Container>
                    <Row className=" justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
                        <Col lg={{ span: 12 }} className="pt-5">
                            <div className="pt-5">
                                <div className="">
                                    <h1>React Theme Switcher Color</h1>
                                    <button onClick={Toggletheme} className='mt-3'>{buttontext}</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}
