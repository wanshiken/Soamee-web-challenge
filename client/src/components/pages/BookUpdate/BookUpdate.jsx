import React from 'react';
import { Input, Button, Form, Select } from 'antd';
import BookService from '../../../services/book.service';
import AuthorService from '../../../services/author.service';
import { Link } from 'react-router-dom'
import Item from 'antd/lib/list/Item';
const { Option } = Select;


export default class BookUpdate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isbn: '',
            authors: []
        }
        this.bookService = new BookService();
        this.authorService = new AuthorService();

    }


    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = () => {
       

        this.bookService.editBook(this.state.location.id, this.state)
       
        .then(() => {
            this.setState({
                name:'',
                isbn:'',
                authors:[]
                })
            })
            .catch(err => console.error(err))
        }


        componentDidMount() {
            this.authorService.getAuthors().then((resp) => {
                this.setState({ authors: resp.data });
            })
        }

        render() {


            return <div>
            <h1>Edit Book</h1>

            <Form className='bookformupdate' onFinish={this.handleSubmit}>
                <Form.Item
                    label="name"
                    name="name"
                    rules={[{ required: true, message: 'Please edit your books name!' }]}
                >
                    <Input onChange={(e) => this.handleChange(e)} name="name" value={this.state.name}
                     />
                </Form.Item>

                <Form.Item
                    label="isbn"
                    name="isbn"
                    rules={[{ required: true, message: 'Please edit your !isbn' }]}
                >
                    <Input onChange={(e) => this.handleChange(e)} name="isbn" value={this.state.isbn}
                    />
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


                            {this.state.authors.map(author => <Option key={author._id} value={author._id}>{author.firstName} {author.lastName}</Option>)}

                    </Select>
                </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    
                </Form.Item>

                    <Button className='updatebutton' type="primary" htmlType="submit">
                        Submit
                    </Button>

                    <Link to="/books">
                        <Button> Back </Button>
                    </Link>
            </Form>
        </div>
    }
}