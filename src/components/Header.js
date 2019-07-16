import React from 'react'
import { Link } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import constants from '../constants';

import { LOGOUT } from '../mutations';
import { errorsMessage } from '../helpers';

function Header(props) {

    function logout(data) {
        localStorage.removeItem(constants.AUTH_TOKEN)
        window.location.href = '/';
    }

    const authToken = localStorage.getItem(constants.AUTH_TOKEN);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button type="button" id="sidebarCollapse" className="navbar-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-align-justify"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav ml-auto">
                        {authToken ? (
                            <li className="nav-item active">
                                <Mutation
                                    mutation={LOGOUT}
                                    onCompleted={data => logout(data)}
                                    onError={error => errorsMessage(error)}
                                >
                                    {mutation => (
                                        <button
                                            className="btn btn-default"
                                            onClick={mutation}>Logout</button>
                                    )}
                                </Mutation>
                            </li>
                        ) : (
                                <>
                                    <li className="nav-item active">
                                        <Link to="/login" className="nav-link" >Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Registro</Link>
                                    </li>
                                </>
                            )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
