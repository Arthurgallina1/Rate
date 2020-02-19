import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Login from './pages/Login'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
        </Switch>
    
    </BrowserRouter>
)


export default Router;