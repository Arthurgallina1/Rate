import React, { useState } from 'react';
import './Login.css'
import api from '../utils/api'
// import { Container } from './styles';
// import { FaUserAlt, FaLock } from 'react-icons' 


export default function Login( { history }) {
    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');
    const [loginFail, setLoginFail ] = useState(false);

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('/user/auth', { 
                username,
                password
            })
            const idLoggedUser = response.data.user._id;
            localStorage.setItem('token', response.data.token);
            history.push(`/dashboard/${idLoggedUser}`)
        } catch (err) {
            setLoginFail(true);
            
        }
    }


    return (
    <div>
        <div className="form-wrapper">
        <div className="error-alert">
            { loginFail ? <h1> Error on Login, please try again. </h1> : '' } 
        
        </div>
        <div className="sign-up"> <p> Signup Now</p> </div>
            <form onSubmit={handleLogin}>
                <div className="form-interior">
                    <input type="text" name="username" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} value={username}></input>
                    <input type="password" name="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={password}></input>
                    <button type="submit" >Login</button>
                    <p>Create an account.</p>
                </div>
            </form>
        </div>

    </div>
  );
}
