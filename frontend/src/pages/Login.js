import React, { useState } from 'react';
import './Login.css'
// import { Container } from './styles';
import { FaUserAlt, FaLock } from 'react-icons' 


export default function Login() {
    const [username, setUsername ] = useState('');
    const [password, setPassword ] = useState('');

    function handleLogin(){
        console.log(username);
        console.log(password);

    }
    
    


  return (
    <div>
        <div className="form-wrapper">
        <div className="sign-up"> <p> Signup Now</p> </div>
            <form onSubmit={handleLogin}>
                <div className="form-interior">
                    <input type="text" name="username" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} value={(e) => e.target.value}></input>
                    <input type="password" name="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} value={(e) => e.target.value}></input>
                    <button type="submit" >Login</button>
                    <p>Create an account.</p>
                </div>
            </form>
        </div>

    </div>
  );
}
