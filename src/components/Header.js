import React from 'react'
import { Link } from 'react-router-dom'
import constants from '../constants';

function Header(props) {
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
                                <button
                                    className="btn btn-default"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        localStorage.removeItem(constants.AUTH_TOKEN)
                                        if (process.env.NODE_ENV === 'development') {
                                            window.location.href = '/';
                                        } else {
                                            window.location.href = '/cc-gh-pages';
                                        }
                                    }}>Logout</button>
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
