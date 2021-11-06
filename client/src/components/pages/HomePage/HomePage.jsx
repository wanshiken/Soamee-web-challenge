import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../../../App.css";

export default class HomePage extends Component {

  render() {
    return (

      <div>
        <h1> Books and authors </h1>
        <Link to="/books">Books</Link>
        <Link to="/authors">Authors</Link>
      </div>

    )
  }
}
