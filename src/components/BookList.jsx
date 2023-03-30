import { Component } from "react";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

class BookList extends Component {
    state = {
        selectedAsin: null
    }

    handleBookSelect = (asin) => {
        if (asin !== this.state.selectedAsin) {
            this.setState({ selectedAsin: asin });
        } else {
            this.setState({ selectedAsin: null });
        }
    }

    render() {
        const { selectedAsin } = this.state;
        return (
            <Row className="justify-content-center align-items-center mx-0" >
                {
                    this.props.books.map(book => {
                        return (
                            <SingleBook
                                key={book.asin}
                                book={book}
                                selected={selectedAsin === book.asin}
                                onSelect={this.handleBookSelect}
                            />
                        )
                    })
                }
            </Row>
        ) 
    }
}

export default BookList;
