import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import { toast } from 'react-toastify';
import Content from '../Content';
import constants from '../../constants';

import './Register.css';
import { errorsMessage } from '../../helpers';

import { REGISTER_MUTATION } from '../../mutations';

class Register extends Component {

    componentDidMount() {
        const authToken = localStorage.getItem(constants.AUTH_TOKEN) || null;
        if (authToken) {
            window.location.href = '/';
        }
    }

    state = {
        username: '',
        email: '',
        password: '',
        birthdate: ''
    };

    onSubmit = async data => {
        this.redirect('Cadastro realizado com sucesso, estamos direcionando para o login', 2000, '/login');
    }

    redirect(msg, timeout, url) {
        toast.success(msg);
        setTimeout(() => {
            window.location.href = url;
        }, timeout);
    }

    render() {
        const { username, email, password, birthdate } = this.state;

        return (
            <Content>
                <div className="form-signup text-center">
                    <img className="mb-4" src="https://via.placeholder.com/75" alt="img" />
                    <h1 className="h3 mb-3 font-weight-normal">Registro - Civil Cultural</h1>
                    <div className="form-group">
                        <label htmlFor="username" className="sr-only">Nome de usuário</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-user"></i></div>
                            </div>
                            <input type="text" id="username" name="username" className="form-control" placeholder="Nome de usuário" required onChange={e => this.setState({ username: e.target.value })} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="sr-only">E-mail</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-envelope-square"></i></div>
                            </div>
                            <input type="email" id="email" name="email" className="form-control" placeholder="E-mail" required onChange={e => this.setState({ email: e.target.value })} />
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
                    <div className="form-group">
                        <label htmlFor="birthdate" className="sr-only">Data de nascimento</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-calendar-alt"></i></div>
                            </div>
                            <input type="date" id="birthdate" name="birthdate" className="form-control" placeholder="Data de Nascimento" required onChange={e => this.setState({ birthdate: e.target.value })} />
                        </div>
                    </div>
                    <Mutation
                        mutation={REGISTER_MUTATION}
                        variables={{ username, email, password, birthdate }}
                        onCompleted={data => this.onSubmit(data)}
                        onError={error => errorsMessage(error)}
                    >
                        {mutation => (
                            <button
                                className="btn btn-lg btn-primary btn-block"
                                type="button"
                                onClick={mutation}
                                disabled={!username || !email || !password || !birthdate}>Cadastrar <i className="fas fa-user-plus"></i></button>
                        )}
                    </Mutation>
                </div>
            </Content>
        )
    }
}

export default Register;