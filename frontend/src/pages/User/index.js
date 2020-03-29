import React, { useEffect, useState } from 'react'
import api from '../../utils/api'
import FollowBox from '../../Components/FollowBox';
import { useSelector } from 'react-redux'

export default function Users() {
    const [ users, setUsers ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const followingList = useSelector(state => state.user.profile.following);
    const userId = useSelector(state => state.user.profile._id);

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await api.get('/user/show');
                const formattedRes = response.data.allUsers;
                // console.log(response)
                formattedRes.map(user => {
                    user.friendship = followingList.includes(user._id) ? true : false
                })
                const userLists = formattedRes.filter(user => user._id !== userId)
                await setUsers(userLists)
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
            <FollowBox key={user._id}
                friend={user}
                friendship={user.friendship}
            />



        ))
    )
}
