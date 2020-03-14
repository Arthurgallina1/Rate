import React from 'react'
import { Box } from './styles'

export default function FriendBox({friend}) {

    function handleAdd(){
        console.log(friend)
    }
    let friendship = false; //mudar 
    const buttonLabel = friendship ? 'REMOVE' : 'ADD';
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
