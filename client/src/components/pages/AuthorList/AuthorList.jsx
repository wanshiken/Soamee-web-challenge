import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default class BookList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            showItem: false,
            authors: [],
        }
    }

    componentDidMount() {
    }

    getBooks = () => {

    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="/authors/create">
                    <Button>Create</Button>
                </Link>

            </div>

        )
    }
}