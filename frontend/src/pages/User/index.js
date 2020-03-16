import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import FriendBox from '../../Components/FriendBox';
import { useSelector } from 'react-redux'

export default function Users() {
    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const followingList = useSelector(state => state.user.profile.following);

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await api.get('/user/show');
                const formattedRes = response.data.allUsers;
                // console.log(response)
                formattedRes.map(user => {
                    // formattedRes.friendship = followingList.includes(user._id) ? true : false
                    if(followingList.includes(user._id)){
                        user.friendship = true;
                    } else {
                        user.friendship = false;
                    }
                })
                await setUsers(formattedRes)
                setLoading(false);
                // console.log(formattedRes)
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
            <FriendBox key={user._id}
                friend={user}
                friendship={user.friendship}
            />



        ))
    )
}
