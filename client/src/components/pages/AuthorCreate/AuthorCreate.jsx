import React from 'react';
import { Input, Button, Form } from 'antd';
import AuthorService from '../../../services/author.service';




export default class AuhorCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        }
        this.authorService = new AuthorService();
        this.onSubmit = this.onSubmit.bind(this);
    }


    onSubmit() {
        console.log(this.state)
        if (this.state.firstName && this.state.lastName) {
            this.authorService.createAuthor(this.state);
        }
    }

    render() {
        return <div>
            <h1>AuthorCreate</h1>
            <Form onFinish={this.onSubmit}>
                <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[{ required: true, message: 'Please input your First Name!' }]}
                >
                    <Input name="firstName" placeholder="First Name" type="text" onChange={(event) => {
                        this.setState({ firstName: event.target.value })
                    }} />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[{ required: true, message: 'Please input your Last Name!' }]}
                >
                    <Input name="lastName" placeholder="Last Name" type="text" onChange={(event) => {
                        this.setState({ lastName: event.target.value })
                    }} />
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