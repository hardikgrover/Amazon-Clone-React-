import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { auth } from './firebase'
import { AddAlertTwoTone } from '@material-ui/icons';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/')
            })
            .catch(error => { alert(error.message) })
    }
    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => { alert(error.message) })

    }



    return (
        <div className="login">
            <Link to='/'>
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}

                    />

                    <h5>Password</h5>
                    <input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="login_signInButton"
                        type="submit"
                        onClick={signIn}

                    >Sign In</button>
                </form>
                <p>By signing-in here, you agree to Adam's Fake Amazon Page Terms & Conditions</p>
                <button
                    onClick={register}
                    className="login_registerButton">Create your amazon account</button>
            </div>

        </div>
    )
}

export default Login
