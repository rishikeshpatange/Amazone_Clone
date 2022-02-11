import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Login.css'
import { auth } from './firebase';

function Login() {

    const history = useNavigate();
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            // history.push('/Checkout')
            history('/')
        })
        .catch(error => alert(error.message))

        // some fancy fire base login
    }
    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                // history.push('/Checkout')
                history('/')
            }
        })
        .catch(error => alert(error.message))
        // fancy fire base register
    }

    return (
        <div className='login' >    

        <Link to='/'>
        <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"  />
        </Link>
        <div className="login__container">
            <h1>Sign-in</h1>
            
            <form>
                <h5>E-mail</h5>
                <input  type="text" value={email} onChange={e => setemail(e.target.value)} />

                <h5>Password</h5>
                <input type="Password" value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' className='login__signInButton' onClick={signIn} >Sign in</button>
            </form>
            <p>By sigining-in you agree to the AMZON FAKE CLONE of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest based ads Notice</p>

            <button  className='Login__RegisterButton' onClick={register}>Create your Amazon account</button>
        </div>

        </div>
    )
}

export default Login
