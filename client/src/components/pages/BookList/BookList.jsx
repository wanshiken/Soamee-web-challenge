import React, { Component } from 'react'
import BookService from '../../../services/book.service';
import BookItem from '../../containers/BookItem/BookItem';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            showItem: false,
            books: [],
        }
        this.bookService = new BookService();
    }

    componentDidMount() {
        this.getBooks();
    }

    getBooks = () => {
        this.bookService.getBooks()
            .then(res => {
                this.setState({
                    ...this.state,
                    books: res.data
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        const { books } = this.state

        return (
            <div>
                <h1>Books</h1>
                {books.map((book) => <BookItem key={book._id} author={book.author} isbn={book.isbn} id={book._id} name={book.name} />)}
                <Link to="/books/create">
                    <Button>Create</Button>
                </Link>

                <Link to="/">
                    <Button> Back </Button>
                </Link>

            </div>

        )
    }
}