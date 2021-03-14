import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {


    const [formValues, handleInputChange, reset] = useForm({
        name: 'Diego Alejandro',
        email: 'diegoale18@outlook.es',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        

        console.log(name, email, password2, password)
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <br />
            <form onSubmit={handleRegister}>
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
