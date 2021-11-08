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
        
        
        
        return (
            <div className='authorlist'>
                
                
                <li>{this.props.firstName} {this.props.lastName}</li>
            
                
                
            </div>

        )
    }
}