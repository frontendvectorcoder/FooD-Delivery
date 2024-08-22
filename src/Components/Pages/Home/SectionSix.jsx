import React from 'react'
import { Container, Row, Carousel } from "react-bootstrap";
import user from "../../../assets/blog/review-author-1.jpg"
import user1 from "../../../assets/blog/review-author-2.jpg"
import user2 from "../../../assets/blog/review-author-3.jpg"
import user3 from "../../../assets/blog/review-author-5.jpg"


function SectionSix() {
    return (
        <>
            <section className='review_people overflow-hidden'>
                <Container>
                    <Row>
                        <Carousel>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="brand_img">
                                        <img src={user} className=" img-fluid" alt="Beands" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda quo at quas illum officia
                                        distinctio dolores magnam minima debitis eos amet nobis deserunt, doloremque explicabo possimus ut quidem libero?</p>
                                    <div className="item_rating mb-2">
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>Lorem ipsum dolor sit.</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="brand_img">
                                        <img src={user1} className=" img-fluid" alt="Beands" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda quo at quas illum officia
                                        distinctio dolores magnam minima debitis eos amet nobis deserunt, doloremque explicabo possimus ut quidem libero?</p>
                                    <div className="item_rating mb-2">
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>Lorem ipsum dolor sit.</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="brand_img">
                                        <img src={user2} className=" img-fluid" alt="Beands" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda quo at quas illum officia
                                        distinctio dolores magnam minima debitis eos amet nobis deserunt, doloremque explicabo possimus ut quidem libero?</p>
                                    <div className="item_rating mb-2">
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>Lorem ipsum dolor sit.</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Carousel.Caption>
                                    <div className="brand_img">
                                        <img src={user3} className=" img-fluid" alt="Beands" />
                                    </div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda quo at quas illum officia
                                        distinctio dolores magnam minima debitis eos amet nobis deserunt, doloremque explicabo possimus ut quidem libero?</p>
                                    <div className="item_rating mb-2">
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                        <i className='bi bi-star-fill'></i>
                                    </div>
                                    <h5>Lorem ipsum dolor sit.</h5>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default SectionSix