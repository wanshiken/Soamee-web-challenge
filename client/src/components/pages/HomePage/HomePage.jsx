import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../../../App.css";

export default class HomePage extends Component {

  render() {
    return (

      <div>
        <h1> Soamee Web Challenge </h1>
        <h2><Link to="/books">Books </Link>
        
          <Link to="/authors">Authors</Link>
        

        </h2>
      </div>

    )
  }
}
