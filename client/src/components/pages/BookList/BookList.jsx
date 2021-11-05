import React, { Component } from 'react'
import BookService from '../../../services/book.service';
import HomePage from '../HomePage/HomePage';

export default class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            showItem: false,
        }
        this.bookService = new BookService();
    }

    componentDidMount() {
        this.refreshBooks();
    }

    refreshBooks = () => {
        this.bookService.getBooks()
            .then(res => {
                console.log(res.data)
                this.setState({
                    ...this.state,
                    books: res.data
                })
            })
            .catch(err => console.error(err))
    }

    displayBooks = () => {

                        return (
                            <Component refreshBooks={this.refreshBooks} /> //key={books._id} {...books}//
                        )
                    
                
                }
            



    render() {


        return (
            <div>
                <HomePage />
                
                    {/* // bookInfo=
                    // {{ _id: this.props._id, name: this.props.name, isbn: this.props.isbn, author: this.props.author }} */}
                    {
                        this.displayBooks()
                    }

                
            </div>

        )
    }
}