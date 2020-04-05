import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import UpdateProfile from '../pages/UpdateProfile';
import CreatePost from '../pages/Create';
import RatePage from '../pages/RatePage';
import ProfileVisit from '../pages/VisitProfile';
// import SignUp from '../pages/SignUp';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} isPrivate />
        <Route path="/profile" exact component={Profile} isPrivate />
        <Route path="/profile/:id" exact component={ProfileVisit} isPrivate />
        <Route
          path="/updateprofile"
          exact
          component={UpdateProfile}
          isPrivate
        />
        <Route path="/createpost" exact component={CreatePost} isPrivate />
        <Route path="/rate/:id" component={RatePage} isPrivate />
        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}
