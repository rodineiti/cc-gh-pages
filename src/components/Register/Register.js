import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag';

import Content from '../Content';

import './Register.css';

const REGISTER_MUTATION = gql`
  mutation register($username: String!, $email: String!, $password: String!, $birthDate: String!) {
    signUp(input: {username: $username, email: $email, password: $password, birthDate: $birthDate, clientMutationId: $username}) {
        username,
        email,
        clientMutationId
    }
  }
`;

class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        birtdate: ''
    };

    onSubmit = async data => {
        console.log(data);
    }

    render() {
        const { username, email, password, birtdate } = this.state;

        return (
            <Content>
                <form className="form-signup text-center">
                    <img className="mb-4" src="https://via.placeholder.com/75" alt="img" />
                    <h1 className="h3 mb-3 font-weight-normal">Registro - Civil Cultural</h1>
                    <div className="form-group">
                        <label htmlFor="username" className="sr-only">Nome de usuário</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-user"></i></div>
                            </div>
                            <input type="text" id="username" name="username" className="form-control" placeholder="Nome de usuário" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="sr-only">E-mail</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-envelope-square"></i></div>
                            </div>
                            <input type="email" id="email" name="email" className="form-control" placeholder="E-mail" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="sr-only">Senha</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-unlock-alt"></i></div>
                            </div>
                            <input type="password" id="password" name="password" className="form-control" placeholder="Senha" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="birtdate" className="sr-only">Data de nascimento</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><i className="fas fa-calendar-alt"></i></div>
                            </div>
                            <input type="date" id="birtdate" name="birtdate" className="form-control" placeholder="Data de Nascimento" required />
                        </div>
                    </div>
                    <Mutation
                        mutation={REGISTER_MUTATION}
                        variables={{ username, email, password, birtdate }}
                        onCompleted={data => this.onSubmit(data)}
                    >
                        {mutation => (
                            <button className="btn btn-lg btn-primary btn-block" type="button" onClick={mutation}>Cadastrar <i className="fasfa-user-plus"></i></button>
                        )}
                    </Mutation>
                </form>
            </Content>
        )
    }
}

export default Register;