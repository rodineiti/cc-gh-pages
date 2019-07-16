import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Mutation } from 'react-apollo'
import 'react-toastify/dist/ReactToastify.css';

import constants from '../../constants';
import Content from '../Content';

import './Login.css';
import { errorsMessage } from '../../helpers';

import { LOGIN_MUTATION } from '../../mutations';

class Login extends Component {

    componentDidMount() {
        const authToken = localStorage.getItem(constants.AUTH_TOKEN) || null;
        if (authToken) {
            if (process.env.NODE_ENV === 'development') {
                window.location.href = '/';
            } else {
                window.location.href = '/cc-gh-pages';
            }
        }
    }

    state = {
        username: '',
        password: ''
    };

    onSubmit = async data => {
        this.setDataToken(data.logIn.token);
    }

    setDataToken = token => {
        localStorage.setItem(constants.AUTH_TOKEN, token);
        this.redirect('Login realizado com sucesso.', 1000, '/');
    }

    redirect(msg, timeout, url) {
        toast.success(msg);
        setTimeout(() => {
            if (process.env.NODE_ENV === 'development') {
                window.location.href = url;
            } else {
                window.location.href = '/cc-gh-pages';
            }
        }, timeout);
    }

    render() {
        const { username, password } = this.state;
        return (
            <Content>
                <div className="form-signin text-center">
                    <img className="mb-4" src="https://via.placeholder.com/75" alt="img" />
                    <h1 className="h3 mb-3 font-weight-normal">Login - Civil Cultural</h1>
                    <div className="form-group">
                        <label htmlFor="username" className="sr-only">E-mail ou Usuário</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-envelope-square"></i></div>
                            </div>
                            <input type="text" id="username" name="username" className="form-control" placeholder="E-mail ou Username" required onChange={e => this.setState({ username: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="sr-only">Senha</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-unlock-alt"></i></div>
                            </div>
                            <input type="password" id="password" name="password" className="form-control" placeholder="Senha" required onChange={e => this.setState({ password: e.target.value })} />
                        </div>
                    </div>
                    <Mutation
                        mutation={LOGIN_MUTATION}
                        variables={{ username, password }}
                        onCompleted={data => this.onSubmit(data)}
                        onError={error => errorsMessage(error)}
                    >
                        {mutation => (
                            <button
                                className="btn btn-lg btn-primary btn-block"
                                type="button"
                                onClick={mutation}
                                disabled={!username || !password}>Entrar <i className="fas fa-sign-in-alt"></i></button>
                        )}
                    </Mutation>
                </div>
            </Content>
        )
    };
}

export default Login;