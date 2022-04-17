import React, { useState } from 'react';
import './Signin.css'
import '../signup/Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Signin = () => {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()

    const handleEmailOnBlur = event => {
        setEmail(event.target.value)
    }
    const handlePassOnBlur = event => {
        setpassword(event.target.value)
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
        if (user) {
            navigate('/shop')
        }
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title' >sign in  </h2>

                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label><br />
                        <input onBlur={handleEmailOnBlur} type="email" required name="" id="signup-email " />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label><br />
                        <input onBlur={handlePassOnBlur} type="password" required name="" id="" />
                    </div>
                    <p>{error?.message}</p>
                    {
                        loading && <p>Loading... </p>
                    }

                    <input className='submit-btn' type="submit" value="Sign in" />

                </form>
                <p>
                    New to Ema-john ? <Link className='form-link' to='/signup'>Sign up</Link>
                </p>
                <div className='optional-line'>
                    <div className="line"></div>
                    <span className='or'>or</span>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    );
};

export default Signin;