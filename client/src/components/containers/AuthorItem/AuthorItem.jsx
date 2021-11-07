import React, { Component } from 'react'
import AuthorService from '../../../services/author.service';



export default class AuthorItem extends Component {
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
        
        const { author } = this.state;
        
        return (
            <div>
                
                <h1>{author.firstName} {author.lastName}</h1>
                
            </div>

        )
    }
}