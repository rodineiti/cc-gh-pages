import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import constants from './constants';
import { ToastContainer } from 'react-toastify';

const httpLink = createHttpLink({
    uri: constants.API_URL
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
        <ToastContainer />
    </ApolloProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
