import React from 'react';
import { Link } from 'react-router-dom'

function Sidebar(props) {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>
                    <img src="https://via.placeholder.com/210x40" alt="logo" />
                </h3>
            </div>

            <ul className="list-unstyled ml-2">
                <form action="#/" method="post" className="form-inline">
                    <input type="text" name="search" id="search" className="form-control" placeholder="O que você procura" />
                </form>
            </ul>

            <ul className="list-unstyled components">
                <li className="active">
                    <Link to="/">
                        <i className="fas fa-home"></i> Home
                    </Link>
                </li>
                <li>
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fas fa-list"></i> Itens</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Item 1</a>
                        </li>
                        <li>
                            <a href="#">Item 2</a>
                        </li>
                        <li>
                            <a href="#">Item 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/about"><i className="fas fa-briefcase"></i> Sobre</Link>
                </li>
                <li>
                    <Link to="/contact"><i className="fas fa-paper-plane"></i> Contato</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Sidebar;
