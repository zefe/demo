import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { startLogout } from '../../stateManagement/actions/authActions';

import Logo from '../../assets/images/Alephsoft.png';
import IconCustomers from '../../assets/icons/Customers.svg';
import IconMenu from '../../assets/icons/Menu.svg';
import IconLogOut  from '../../assets/icons/Logout.svg';

export const Sidebar = () => {

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch( startLogout() );
    }

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3 className="brand">
                    <img src={ Logo } alt=""/>
                </h3>
                <label htmlFor="sidebar-toggle" className="sidebar-icon-menu">
                    <img src={ IconMenu } alt="" />
                </label>
            </div>
            <div className="sidebar-menu">
                <ul >
                    <li>
                        <a href="" >
                            <span className="ti-layout-grid2"></span>
                            <span>Dashboard</span>
                        </a>
                    </li>
                </ul>
                <ul className="active">
                    <li>
                        <a href="">
                            <img src={ IconCustomers } alt="customers icon" />
                            <span>Customers</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sidebar-footer">
                <a onClick={ handleLogout }>
                    <img src={ IconLogOut } alt="log out" />
                    <span>Log out</span>
                </a>
            </div>   
        </div>
    )
}
