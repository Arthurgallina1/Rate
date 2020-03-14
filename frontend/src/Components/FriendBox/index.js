import React, { useState } from 'react'
import { Box } from './styles'
import api from '../../utils/api'
import { useSelector } from 'react-redux';

export default function FriendBox({ friend }) {
    
    const [friendship, setFriendship] = useState(false)
    const userId = useSelector(state => state.user.profile._id);

    async function handleAdd(){
        const response = await api.post('/add', {
            currentUserId: userId,
            userToBeAddId: friend._id
        })
        setFriendship(true)
        console.log(response.data);
    
    }
    const buttonLabel = friendship ? 'UNFOLLOW' : 'FOLLOW';
    return (
        <Box>
            <img src=" https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
            <div>
                <p>{friend.username}</p>
                <h5>{friend.email}</h5>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, odio.</span>
            </div>
            <button onClick={() => handleAdd()}>{buttonLabel}</button>
        </Box>
    )
}
