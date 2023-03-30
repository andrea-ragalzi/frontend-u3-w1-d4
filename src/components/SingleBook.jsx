import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Component } from "react";

const truncateString = (str, num) => {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}

class SingleBook extends Component {
  state = {
    book: this.props.book,
    selected: false
  };

  handleCardClick = () => {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    const { book } = this.props;
    const cardClassName = this.state.selected ? 'selected-card' : '';

    return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2} className="p-0 mx-1 mb-5">
        <Card className={cardClassName}>
          <Card.Img variant="top" src={book.img} onClick={this.handleCardClick} />
          <Card.Body>
            <Card.Title>{truncateString(book.title, 45)}</Card.Title>
            <Card.Text>{book.price}</Card.Text>
            <Button variant="dark">Buy Now</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;