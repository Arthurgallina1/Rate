import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import { Box } from './styles';
import FriendBox from '../../Components/FriendBox';

export default function Users() {
    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await api.get('/user/show');
                await setUsers(response.data.allUsers)
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }

        }
        getUsers();
        
    }, [])
    return (
        loading ? 
        <h1>Loading </h1> : 

        users.map(user => (
            // <FriendBox key={user._id} 
            // name={user.username || 'Unkwonw'} 
            // email={user.email || ''} 
            // friend={false}
            <FriendBox key={user._id}
                friend={user} 
            />



        ))
    )
}
