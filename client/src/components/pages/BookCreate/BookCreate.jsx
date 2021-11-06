import React from 'react';
import { Input, Button, Form, Select } from 'antd';
import BookService from '../../../services/book.service';
const { Option } = Select;


export default class BookCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isbn: '',
            author:{}
        }
        this.bookService = new BookService();
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit() {
        console.log(this.state)
        if (this.state.name && this.state.isbn && this.state.author) {
            this.authorService.createBook(this.state);
        }
    }

    render() {
        return <div>
            <h1>BookCreate</h1>
            <Form onFinish={this.onSubmit}>
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
                    >
                        <Option value="author">{this.state.author}</Option>

                    </Select>
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    }
}