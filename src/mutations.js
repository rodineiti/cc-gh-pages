import gql from 'graphql-tag';

export const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
      logIn(username: $username, password: $password) {
          token
      }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation register($username: String!, $email: String!, $password: String!, $birthdate: Date!) {
    signUp(input:{
        username: $username,
        password: $password,
        email: $email,
        birthDate: $birthdate,
        clientMutationId: $username
      }) {
          clientMutationId
      }
  }
`;

export const LOGOUT = gql`
  mutation logout {
    logOut(input:{}) {
          response
      }
  }
`;