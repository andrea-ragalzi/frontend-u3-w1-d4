import { Component } from "react";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook";

class BookList extends Component {
    render() {
        return (
            <Row className="justify-content-center align-items-center mx-0" >
                {
                    this.props.books.map(book => {
                        return (
                            <SingleBook key={book.asin} book={book} />
                        )
                    })
                }
            </Row>
        )
    }
}

export default BookList;