import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import AuthorItem from '../../containers/AuthorItem/AuthorItem';
import AuthorService from '../../../services/author.service';

export default class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            showItem: false,
            authors: [],
        }

        this.authorService = new AuthorService();
    }

    componentDidMount() {
        this.getAuthors()
    }

    getAuthors = () => {
        this.authorService.getAuthors()
            .then(res => {
                this.setState({
                    ...this.state,
                    authors: res.data
                })
            })
            .catch(err => console.error(err))
    }

    render() {

        const {authors} = this.state
        return (
            <div>
                <h1>Authors</h1>
                {authors.map((author) => <AuthorItem key={author._id}  firstName={author.firstName} lastName={author.lastName} />)}
                <Link to="/authors/create">
                    <Button>Create</Button>
                </Link>

                <Link to="/">
                    <Button>Back</Button>
                </Link>

            </div>

        )
    }
}