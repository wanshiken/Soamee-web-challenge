import React from 'react';
import { Input, Button, Form, Select } from 'antd';
import BookService from '../../../services/book.service';
import AuthorService from '../../../services/author.service';
import { Link } from 'react-router-dom'
const { Option } = Select;


export default class BookCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isbn: '',
            authors: []
        }
        this.bookService = new BookService();
        this.authorService = new AuthorService();
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.authorService.getAuthors().then((resp) => {
            this.setState({ authors: resp.data });
        })
    }

    onSubmit() {
        console.log(this.state)
        if (this.state.name && this.state.isbn && this.state.author) {
            const { name, isbn, author } = this.state;
            this.bookService.createBook({ name, isbn, author });
        }
    }

    render() {


        return <div>
            <h1>BookCreate</h1>

            <Form className='bookformcreate' onFinish={this.onSubmit}>
                <Form.Item
                    label="name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your First Name!' }]}
                >
                    <Input name="name" placeholder="Name" type="text" onChange={(event) => {
                        this.setState({ name: event.target.value })
                    }} />
                </Form.Item>

                <Form.Item
                    label="isbn"
                    name="isbn"
                    rules={[{ required: true, message: 'Please input your !isbn' }]}
                >
                    <Input name="isbn" placeholder="isbn" type="text" onChange={(event) => {
                        this.setState({ isbn: event.target.value })
                    }} />
                </Form.Item>



                <Form.Item
                    name="author"
                    label="Author"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select an author"
                        allowClear
                        onChange={(value) => this.setState({ author: value })}
                    >


                        {this.state.authors.map(author => <Option value={author._id}>{author.firstName} {author.lastName}</Option>)}

                    </Select>

                    

                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    
                </Form.Item>

                <Button className='submitbuttoncreate'type="primary" htmlType="submit">
                    Submit
                </Button>

                <Link to="/books">
                    <Button> Back </Button>
                </Link>

            </Form>
        </div>
    }
}