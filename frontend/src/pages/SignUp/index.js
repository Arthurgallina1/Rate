import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
    return (
        <>
            <img src="" alt="Rate"/>
            <form>
                <input type="name" placeholder="Your name"/>   
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>

                <button type="submit">Login</button>
                <Link to="/">Already have an account?</Link>
            </form>
        </>
    )
}
