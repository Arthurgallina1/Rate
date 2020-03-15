import React, { useState } from 'react'
import { Box } from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { followRequest } from '../../store/modules/friends/actions';

export default function FriendBox({ friend }) {
    
    const [friendship, setFriendship] = useState(false)
    const userId = useSelector(state => state.user.profile._id);
    const dispatch = useDispatch();

    async function handleAdd(){
        dispatch(followRequest(friend._id, userId ));    
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
