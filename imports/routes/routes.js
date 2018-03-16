import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Dashboard from '../ui/Dashboard';
import Signup from '../ui/Signup';
import NotFound from '../ui/NotFound';
import Login from '../ui/Login';
import Applicants from '../ui/Applicants';
import Contact from '../ui/Contact';
import Sponsorship from '../ui/Sponsorship';

const unauthenticatedPages = ['/', '/signup', '/login' ];
const authenticatedPages = ['/admin', '/applicants'];

const onEnterPublicPage = () => {
  if (Meteor.userId()) {
    browserHistory.replace('/');
  }
};

const onEnterPrivatePage = () => {
  if (!Meteor.userId()) {
    browserHistory.replace('/');
  }
}

export const onAuthChange = (isAuthenticated) => {
  const pathName = browserHistory.getCurrentLocation().pathname;
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathName);
  const isAuthenticatedPage = authenticatedPages.includes(pathName);

 if (isAuthenticatedPage && !isAuthenticated) {
    browserHistory.replace('/');
  }
}

export const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Dashboard} /> 
    <Route path="/signup" component={Signup} />
    <Route path="/login" component={Login} />
    <Route path="/contact" component={Contact} />
    <Route path="/sponsorship" component={Sponsorship} />
    <Route path="/applicants" component={Applicants} onEnter={onEnterPrivatePage} />
    <Route path="*" component={NotFound} /> 
  </Router>
);

