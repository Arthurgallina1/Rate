import React, { useState, useEffect } from 'react'
import { Box, RateBox } from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { followRequest, unfollowRequest } from '../../store/modules/friends/actions';


export default function FolowBox({ friend, friendship }) {
    
    const [label, setLabel] = useState(false)
    const userId = useSelector(state => state.user.profile._id);
    const dispatch = useDispatch();

    async function handleAdd(){
        if(friendship){
            dispatch(unfollowRequest(friend._id, userId ));
            setLabel('FOLLOW');
        }
        else {
            dispatch(followRequest(friend._id, userId ));
            setLabel('UNFOLLOW'); 
        } 
        
    }


    const buttonLabel = friendship ? 'UNFOLLOW' : 'FOLLOW'
        return (
        <Box>
            <img src=" https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
            <div>
                <p>{friend.name}</p>
                <h5>{friend.username}</h5>
                <span>{friend.comment}</span>
            </div>
            <button onClick={() => handleAdd()}>{label  || buttonLabel }</button>
        </Box>
    )
}