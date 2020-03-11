import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn/Login';
import SignUp from '../pages/SignUp/SignUp';
import Dashboard from '../pages/Dashboard/Dashboard';
// import SignUp from '../pages/SignUp';



export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/register" exact component={SignUp} />
                <Route path="/dashboard" exact component={Dashboard} isPrivate />
                <Route path="/profile" exact component={Dashboard} isPrivate />

                <Route path="/" component={() => <h1>404</h1>}/>
            </Switch>            
        </div>
    )
}
