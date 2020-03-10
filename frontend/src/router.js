import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard/:id" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
        </Switch>
    
    </BrowserRouter>
)


export default Router;