import React from 'react'
import './TheNavBar.css'
import { Link } from 'react-router-dom'


function TheNavBar({ match }) {
    return (
        <nav> 
            <ul>
                <Link to="/profile"><li>Logo</li></Link>
                <Link to="/dashboard"><li>Home</li></Link>
                <Link to="/profile"><li>Profile</li></Link>
                <li>Logout</li>
            </ul>
        </nav>
    )
}

export default TheNavBar
