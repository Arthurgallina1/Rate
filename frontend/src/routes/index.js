import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import UpdateProfile from '../pages/UpdateProfile';
import CreatePost from '../pages/Create';
// import SignUp from '../pages/SignUp';



export default function Routes() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/register" exact component={SignUp} />
                <Route path="/dashboard" exact component={Dashboard} isPrivate />
                <Route path="/profile" exact component={Profile} isPrivate />
                <Route path="/updateprofile" exact component={UpdateProfile} isPrivate />
                <Route path="/createpost" exact component={CreatePost} isPrivate />
                <Route path="/" component={() => <h1>404</h1>}/>
            </Switch>            
        </div>
    )
}
