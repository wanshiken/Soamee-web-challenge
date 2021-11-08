import React, { Component } from 'react'
import BookService from '../../../services/book.service';
import BookItem from '../../containers/BookItem/BookItem';
import { Link } from 'react-router-dom';
import { Table, Button, Space, List, Avatar } from 'antd';
import AuthorItem from '../../containers/AuthorItem/AuthorItem';


export default class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            showItem: false,
            books: [],
            authors: []
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

        const { authors } = this.state

        return (
            <div className='booklist'>
                <h1>Books</h1>
                <List
                    itemLayout="horizontal"
                    dataSource={books}
                    renderItem={item => (
                        <List.Item className='booklistitem'>
                            <BookItem key={item._id} author={item.author} isbn={item.isbn} id={item._id} name={item.name} />
                        </List.Item>
                    )}
                />,
            <div className='button-bottom'>

                <Link to="/books/create">
                        <p > <Button className='createbutton' >Create</Button> </p>
                </Link>

                <Link to="/">
                    <p className='backbutton'> <Button> Back </Button> </p>
                </Link>
            </div>

            </div>

        )
    }
}