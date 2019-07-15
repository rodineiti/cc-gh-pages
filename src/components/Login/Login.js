import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag';

import Content from '../Content';

import './Login.css';

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
      logIn(username: $username, password: $password) {
          token
      }
  }
`;

class Login extends Component {

    state = {
        username: '',
        password: ''
    };

    onSubmit = async data => {
        console.log(data);
    }

    setDataToken = token => {
        localStorage.setItem('user-token');
    }

    render() {
        const { username, password } = this.state;
        return (
            <Content>
                <form className="form-signin text-center">
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
                    >
                        {mutation => (
                            <button className="btn btn-lg btn-primary btn-block" type="button" onClick={mutation}>Entrar <i className="fas fa-sign-in-alt"></i></button>
                        )}
                    </Mutation>
                </form>
            </Content>
        )
    };
}

export default Login;