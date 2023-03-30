import { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'

const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

class AllTheBooks extends Component {
    state = {
        selectedCategory: fantasy,
        showWallCategory: true,
        showWallBook: false
    }
    showBookWall = false
    handleBookClick = (category) => {
        this.setState({
            selectedCategory: category,
            showWallCategory: !this.state.showWallCategory,
            showWallBook: !this.state.showWallBook
        });
    };
    render() {
        return (
            <Container fluid className="p-0 mb-5">
                {
                    this.state.showWallCategory && (
                        <Row className="justify-content-center align-items-center mt-5 mx-0">
                            {
                                [fantasy, history, horror, romance, scifi].map((category, index) => {
                                    return (
                                        <Col xs={12} sm={6} md={4} lg={3} xl={2} key={index} className="p-0 mx-1 mb-5">
                                            <h2>{category[0].category.toUpperCase()}</h2>
                                            <Carousel>
                                                {
                                                    category.map(book => {
                                                        return (
                                                            <Carousel.Item key={book.asin}>
                                                                <img
                                                                    className="d-block w-100"
                                                                    src={book.img}
                                                                    alt="Book Cover"
                                                                    onClick={() => this.handleBookClick(category)}
                                                                />
                                                            </Carousel.Item>
                                                        )
                                                    })
                                                }
                                            </Carousel>
                                        </Col>

                                    )
                                })
                            }
                        </Row>
                    )}
                {this.state.showWallBook && (
                    <>
                        <Button variant="dark" className="my-5 p-4" onClick={() => this.handleBookClick(this.state.selectedCategory)}>
                            Back to Category
                        </Button>
                        <Row className="justify-content-center align-items-center mx-0">
                            {
                                this.state.selectedCategory.map(book => {
                                    return (
                                        <Col xs={12} sm={6} md={4} lg={3} xl={2} key={book.asin} className="p-0 mx-1 mb-5">
                                            <Card>
                                                <Card.Img variant="top" src={book.img} />
                                                <Card.Body>
                                                    <Card.Title>{truncateString(book.title, 45)}</Card.Title>
                                                    <Card.Text>{book.price}</Card.Text>
                                                    <Button variant="dark">Buy Now</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                        <a className="text-dark backLink" href="#root">Back To Top</a>
                    </>
                )}
            </Container>
        );
    }
}

export default AllTheBooks;