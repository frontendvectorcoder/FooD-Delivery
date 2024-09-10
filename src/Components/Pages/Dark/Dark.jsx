// Dark.jsx
import React, { useContext } from 'react';
import { ThemesApply } from './ContentApi';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../../Layout/Layout';
import '../../Style/Dark.css';

function Dark() {
    // Use the context
    const { checklocal, themeToggle } = useContext(ThemesApply);

    if (!checklocal || !themeToggle) {
        throw new Error('Dark component must be used within a ContentProvider');
    }

    return (
        <Layout>
            <section className={`switch ${checklocal} pb-5`}>
                <Container>
                    <Row className="justify-content-center align-items-center d-flex pt-5 pb-5 text-white">
                        <Col lg={{ span: 12 }} className="pt-5">
                            <div className="pt-5">
                                <div>
                                    <h1>React Theme Switcher Color Refresh</h1>
                                    <button onClick={themeToggle}>
                                        Switch to {checklocal === 'light' ? 'Light' : 'Dark'}
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    );
}

export default Dark;