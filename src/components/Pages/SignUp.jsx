import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { startSignUp } from '../../stateManagement/actions/authActions';
import { useForm } from "../../Hooks/useForm";

import logo from '../../assets/images/logo.png';

export const SignUp = (props) => {

    const initialForm = {
        name: '',
        email: '',
        password: '',
    };

    const dispatch = useDispatch();
    const { error } = useSelector(state => state.auth);
    const { errors } = useSelector(state => state.auth);

    const { nameError, passError, emailError } = errors;
    

    const [ formValues, handleInputChange ]  = useForm(initialForm);

    const { name, email, password } = formValues;

    const handleSignup = (e) => {
        e.preventDefault();

        
        const { history } = props;

        dispatch(startSignUp(name, email, password, history));


    }


    return (
        <div className="signup">
            <div className="logo">
                <img src={ logo } alt="Logo" />
            </div>
            <form onSubmit={ handleSignup} className="form">
                <div className="form-group"> 
                    <small style={{color:'red'}}>{error}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={ name }
                        onChange={ handleInputChange}
                    />
                    <small style={{color:'red'}}>{nameError}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={ email }
                        onChange={ handleInputChange}
                    />
                    <small style={{color:'red'}}>{emailError}</small>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={ password }
                        onChange={ handleInputChange}
                    />
                    <small style={{color:'red'}}>{passError}</small>
                </div>
                <div className="form-button">
                    <button className="btn btn-primary btn-lg btn-block">Create account</button>
                </div>
                <div className="form-link">
                    <span>Have an Account?</span> <Link to="/signin">Sign In</Link>
                </div>
            </form>
        </div>
    )
}
