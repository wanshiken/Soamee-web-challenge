import React, { Component } from 'react'
import AuthorService from '../../../services/author.service';
import { Table, Button, Space } from 'antd';



export default class BookItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            author: {},
        }

        this.authorService = new AuthorService();

    }


    componentDidMount() {
        this.authorService.getOneAuthor(this.props.author).then((resp) => {
            this.setState({ author: resp.data.author });
        })
    }

    render() {
        const { isbn, name } = this.props;
        const { author } = this.state;
        const data = [
            {
                key: '',
                name: this.props.name,
                isbn: this.props.isbn,
                author: {
                    firstName: this.props.firstName,
                    lastName: this.state.author.lastName
                }
            }];
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                
               
            },
            {
                title: 'ISBN',
                dataIndex: 'isbn',
                key: 'isbn',
               
            },
            {
                title: 'Author',
                dataIndex: 'author',
                key: 'author',
            
                
            },
        ];
        return (
            <div>
               
                

                <Space style={{ marginBottom: 16 }}>
                    
                </Space>
                <Table columns={columns} dataSource={data}  />

            </div>
            

        )
    }
}