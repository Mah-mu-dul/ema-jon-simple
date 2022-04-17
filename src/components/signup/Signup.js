import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import auth from '../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigte = useNavigate()

    const emailOnBlur = event => {
        setEmail(event.target.value)
    }
    const passwordOnBlur = event => {
        setPassword(event.target.value)
    }
    const confirmPassOnBlur = event => {
        setConfirmPass(event.target.value)
    }
    const createUser = event => {
        event.preventDefault();
        if (password !== confirmPass) {
            setError('password did not match ')
            return
        }
        if (password.length < 6) {
            setError('password must be minimum 6 cherecters ')
        }
        if (user) {
            navigte('/shop')

        }
        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title' >sign up  </h2>

                <form onSubmit={createUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label><br />
                        <input onBlur={emailOnBlur} type="email" required name="" id="signup-email " />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label><br />
                        <input onBlur={passwordOnBlur} type="password" required name="" id="" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="confirm">confirm password</label><br />
                        <input onBlur={confirmPassOnBlur} type="password" required name="" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>

                    <input className='submit-btn' type="submit" value="Sign up" />

                </form>
                <p>
                    Already have an account? <Link className='form-link' to='/signin'>Sign in</Link>
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

export default Signup;