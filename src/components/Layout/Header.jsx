import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                Inicio
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="social-icons">
                    <span className="ti-bell"></span>
                    <div></div>
                </div>
            </header>
        </>
    )
}
