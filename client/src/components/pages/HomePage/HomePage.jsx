import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../../../App.css";
import AuthorList from '../AuthorList/AuthorList';
import {BookOutlined, UserOutlined} from '@ant-design/icons'


export default class HomePage extends Component {

  render() {
    return (

      <div className='homepage'>
        <h1> Soamee Web Challenge </h1>
        <div className='Icons'>

          <Link to="/books"><BookOutlined className='BookIcon' />  <h2> Books</h2></Link>
          
          
          <Link to="/authors"><UserOutlined className='AuthorIcon' /> <h2> Authors </h2> </Link>

        </div>
       
        
      </div>

    )
  }
}
