import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context'

import constants from './constants';
import { ToastContainer } from 'react-toastify';

const httpLink = createHttpLink({
    uri: constants.API_URL
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(constants.AUTH_TOKEN)
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
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
