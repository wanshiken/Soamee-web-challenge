import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';



const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={(props) => <HomePage {...props} />} />
        </Switch>
    )
}

export default Routes