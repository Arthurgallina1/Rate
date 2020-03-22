import React, { useState, useEffect } from 'react'
import { Box } from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { followRequest, unfollowRequest } from '../../store/modules/friends/actions';


export default function RateBox({ rateInfo }) {
    
    const [label, setLabel] = useState(false)
    const [rate, setRate] = useState(false)
    const userId = useSelector(state => state.user.profile._id);



        return (
        <Box>
            <img src=" https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
            <div>
                <p>{rateInfo.user.name}</p>
                <h5>{rateInfo.user.username}</h5>
                <span>{rateInfo.comment}</span>
                <h5>{rateInfo.rate}</h5>
            </div>
            
        </Box>
    )
}
