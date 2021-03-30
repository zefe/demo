import React from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';


export const Layout = ({ children }) => {
    return (
        <div>
            <input type="checkbox" id="sidebar-toggle"></input>
            <Sidebar />
            <div className="main-content">
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
};
