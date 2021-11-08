import React from 'react'
import { Switch, Route } from 'react-router-dom';
import BookList from '../pages/BookList/BookList';
import AuthorList from '../pages/AuthorList/AuthorList';
import HomePage from '../pages/HomePage/HomePage';
import AuthorCreate from '../pages/AuthorCreate/AuthorCreate';
import BookCreate from '../pages/BookCreate/BookCreate';
import BookDetails from '../pages/BookDetails/BookDetails';
import BookUpdate from '../pages/BookUpdate/BookUpdate';



const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={(props) => <HomePage {...props} />} />
            <Route exact path="/books" render={(props) => <BookList {...props} />} />
            <Route exact path="/authors" render={(props) => <AuthorList {...props} />} />
            <Route path="/authors/create" render={(props) => <AuthorCreate {...props} />} />
            <Route path="/books/create" render={(props) => <BookCreate {...props} />} />
            <Route exact path="/books/:id" render={(props) => <BookDetails {...props} />} />
            <Route exact path="/books/:id/edit" render={(props) => <BookUpdate {...props} />} />
        </Switch>
    )
}

export default Routes