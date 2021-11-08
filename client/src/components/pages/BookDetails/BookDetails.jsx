import React, { Component } from 'react'
import BookService from '../../../services/book.service';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import AuthorService from '../../../services/author.service';


export default class BookDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: {},
            author: {},
        }

        this.bookService = new BookService();
        this.authorService = new AuthorService();
    }

    componentDidMount() {
        const { id } = this.props.match.params;


        this.bookService.getOneBook(id)
            .then(res => {
                this.setState({
                    ...this.state,
                    books: res.data.book
                })
                this.authorService.getOneAuthor(res.data.book.author).then((res) => {
                    this.setState({
                        author: res.data.author,
                    })
                })
            })
            .catch(err => console.error(err))

    }

    render() {



        return (
            <div>

                <h2>Name: {this.state.books.name}</h2>

                <h3>ISBN: {this.state.books.isbn}</h3>

                <h3>Author: {this.state.author.firstName} {this.state.author.lastName}</h3>

                <Link to="/books">
                    <Button> Back </Button>
                </Link>

            </div>
        )
    }
}