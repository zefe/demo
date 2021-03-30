import React from 'react';

export const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="#">
                                Home
                            </a>
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
