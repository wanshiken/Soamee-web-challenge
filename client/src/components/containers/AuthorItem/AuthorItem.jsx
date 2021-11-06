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
        this.authorService.getAuthors(this.props.author).then((resp) => {
            this.setState({ author: resp.data.author });
        })
    }

    render() {
        
        const { author } = this.state;
        return (
            <div>
                
                <span>{author.firstName} {author.lastName}</span>
                
            </div>

        )
    }
}