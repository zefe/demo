import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { startLogin } from '../../stateManagement/actions/authActions';
import { useForm } from "../../Hooks/useForm";

import logo from '../../assets/images/logo.png';



export const Login = (props) => {

    const dispatch = useDispatch();
    const { error } = useSelector(state => state.auth);
    

    const initialForm = {
        email: '',
        password: '',
    }

    const [ formValues, handleInputChange ] = useForm( initialForm );

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        const { history } = props;

        dispatch(startLogin(email, password, history));
    }

    return (
        <div className="login">
            <div className="logo">
                <img src={ logo } alt="Logo" />
            </div>
            <form onSubmit={ handleLogin } className="form">
                <div className="form-group"> 
                    <small style={{color:'red'}}>{error}</small>
                </div>

                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder=""
                        value={ email }
                        onChange={ handleInputChange }
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder=""
                        value={ password }
                        onChange={ handleInputChange }
                        required
                    />
                </div>
                <div className="form-button">
                    <button className="btn btn-primary btn-lg btn-block">Log in</button>
                </div>
            </form>
        </div>
    )
}
