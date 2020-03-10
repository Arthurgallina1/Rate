import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import api from '../utils/api'
import TheNavBar from '../Components/TheNavBar'


const Dashboard = ({ match, history }) => {
    const [loggedUser, setLoggedUser ] = useState({});

    useEffect( () => {
        async function getUserInfo(){
            
            const token = localStorage.getItem('token');
            try {
                const response = await api.get(`/dashboard/${match.params.id}`, { headers: {"Authorization" : `Bearer ${token}`} })
                setLoggedUser(response.data)

            } catch (err) {
                alert(err)
            }
        }
        getUserInfo();
    }, [])
    
    return (
        <div className="dashboard-main">
            <TheNavBar/>
            {
                <div>   
                    <h4> Welcome, { loggedUser.username} </h4>
                </div>
            }
            <h4> Timeline</h4>
            
        </div>
    )
}

export default Dashboard
