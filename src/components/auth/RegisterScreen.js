import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';
import { setError, unSetError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const dispatch = useDispatch();

    const { msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange, reset] = useForm({
        name: 'Diego Alejandro',
        email: 'diegoale18@outlook.es',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {

        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name))
        }

    }

    const isFormValid = () => {

        if (name.trim().length === 0) {
            dispatch(setError('El nombre no puede ser vacio'));
            return false;
        }

        if (!validator.isEmail(email)) {
            dispatch(setError('El email debe ser valido'));
            return false;
        }

        if (password !== password2 || password.length < 5) {
            dispatch(setError('Los passwords deben coincidir'));
            return false;
        }

        dispatch(unSetError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <br />
            <form onSubmit={handleRegister} className="animate__animated animate__fadeIn">
                {msgError && <div className="auth__alert-error">{msgError}</div>}
                <input className="auth__input" type="text" placeholder="Name" name="name" value={name} onChange={handleInputChange} />
                <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off" value={email} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="Confirm password" name="password2" value={password2} onChange={handleInputChange} />
                <button type="submit" className="btn btn-primary btn-block mb-5">Register</button>
                <Link to="/auth/login" className="link">
                    Already Registered ?
                </Link>
            </form>
        </>
    )
}
