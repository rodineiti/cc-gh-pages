import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function Routes(props) {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default Routes;