import React, { Component } from 'react'
import BookService from '../../../services/book.service';
import { Link } from 'react-router-dom';
import { Button } from 'antd';


export default class BookDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: {},
            
        }

        this.bookService = new BookService();
    }

    componentDidMount() {
        const { id } = this.props.match.params;


        this.bookService.getOneBook(id)
            .then(res => {
                this.setState({
                    ...this.state,
                    books: res.data.book
                })
            })
            .catch(err => console.error(err))

    }

    render() {

        

        return (
            <div>

            <h2>Name: {this.state.books.name}</h2>

            <h3>ISBN: {this.state.books.isbn}</h3>
            
            <h3>Author: {this.state.books.author}</h3>

                <Link to="/books">
                    <Button> Back </Button>
                </Link>
                
            </div>
        )
    }
}