import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const displayName = useSelector(state => state.auth.displayName);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Solicitudes App
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Acerca de
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contacto
                            </a>
                        </li>
                    </ul>
                    <span className="navbar-text ms-auto">
                        {displayName ? `Bienvenido, ${displayName}` : ''}
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;