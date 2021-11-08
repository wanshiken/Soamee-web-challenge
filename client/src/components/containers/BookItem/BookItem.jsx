import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthorService from '../../../services/author.service';
import { Table, Button, Space } from 'antd';
import AuthorList from '../../pages/AuthorList/AuthorList';
import BookService from '../../../services/book.service';



export default class BookItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: {},
            book:{}
        }

        this.authorService = new AuthorService();
        this.bookService = new BookService();

    }


    componentDidMount() {
        this.authorService.getOneAuthor(this.props.author).then((resp) => {
            this.setState({ author: resp.data.author });
        })
    }

    render() {
        const { isbn, name, id } = this.props;
        const { author } = this.state; 
        const {book} = this.state

        return (
            <div className='bookitem'>


                <p id='bookname'>{name}</p>
                
                {/* <p>{isbn}</p>
                <p>{author.firstName} {author.lastName}</p> */}

                <h3>
                <Link to={{ pathname: `/books/${id}` }}>
                    <Button className='detailbutton'><p>Details</p></Button>
                </Link>

                <Link to={`/books/${id}/edit`}>
                    <Button><p>Edit</p></Button>
                </Link>
                </h3>


            </div>


        )
    }
}