import React, { Component } from 'react'
import AuthorService from '../../../services/author.service';



export default class BookItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: {}
        }

        this.authorService = new AuthorService();

    }


    componentDidMount() {
        this.authorService.getOneAuthor(this.props.author).then((resp) => {
            this.setState({ author: resp.data.author });
        })
    }

    render() {
        const { isbn, id, name } = this.props;
        const { author } = this.state;
        return (
            <div>
                <span>{id}</span>
                <h3>Author:</h3>
                <span>{author.firstName} {author.lastName}</span>
                <h3>Name:</h3>
                <span>{name}</span>
                <h4>isbn:</h4>
                <span>{isbn}</span>
            </div>

        )
    }
}