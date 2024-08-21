import React from 'react'
import { Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Cards({ image, title, paragraph, rating, price , pricerating }) {
    return (
        <>
            <Col sm={6} lg={4} xl={3}>
                <Card className="overflow-hidden mb-4">
                    <div className=" card-image-top overflow-hidden">
                        <Card.Img variant="top" src={image} />
                    </div>
                    <Card.Body>
                        <div className=" d-flex align-items-center justify-content-between">
                            <div className="rating">Rating: {pricerating(rating)}</div>
                            <div className="wishlist">
                                <i class="bi bi-bag-heart-fill"></i>
                            </div>
                        </div>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{paragraph}</Card.Text>
                        <div className=" d-flex align-items-center justify-content-between">
                            <div className="menu price">
                                <h5 className=" mb-0">{price}</h5>
                            </div>
                            <div className="add_to_card">
                                <Link to="/">
                                    <i class="bi bi-bag-heart-fill me-2"></i>
                                    Add To Card
                                </Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default Cards