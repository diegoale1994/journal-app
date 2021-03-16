import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { setError, unSetError } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const { msgError, loading } = useSelector(state => state.ui);

    const [formValues, handleInputChange, reset] = useForm({
        email: 'diegoale18@outlook.es',
        password: '123456'
    });

    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startLoginEmailPassword(email, password));
        }
    }

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    }

    const isFormValid = () => {

        if (!validator.isEmail(email)) {
            dispatch(setError('El email debe ser valido'));
            return false;
        }

        if (password < 5) {
            dispatch(setError('Los passwords deben coincidir'));
            return false;
        }

        dispatch(unSetError());
        return true;
        
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>
            <br />
            <form onSubmit={handleLogin}>
                {msgError && <div className="auth__alert-error">{msgError}</div>}
                <input className="auth__input" type="text" placeholder="Email" name="email" autoComplete="off" value={email} onChange={handleInputChange} />
                <input className="auth__input" type="password" placeholder="Password" name="password" value={password} onChange={handleInputChange} />
                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>Ingresar</button>
                <hr />
                <div className="auth__social-network">
                    <p>Login With Social Networks</p>
                    <div className="google-btn" onClick={handleGoogleLogin}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link">
                    Create New Account
                </Link>
            </form>
        </>
    )
}
