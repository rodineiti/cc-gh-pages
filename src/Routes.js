import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import constants from './constants';

const authToken = localStorage.getItem(constants.AUTH_TOKEN) ? true : false;

function PrivateRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authenticated === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}

function Routes(props) {
    return (
        <Switch>
            <PrivateRoute exact path="/" authenticated={authToken} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/about" authenticated={authToken} component={About} />
            <PrivateRoute exact path="/contact" authenticated={authToken} component={Contact} />
            <Redirect from="*" to="/login" />
        </Switch>
    )
}

export default Routes;