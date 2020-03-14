import React, { useEffect, useState } from 'react'
import FriendBox from '../../Components/FriendBox';
import { useSelector } from 'react-redux';
import api from '../../utils/api';
import { Container } from './styles';

export default function Friends() {
    const [ following, setFollowing ] = useState([]);
    const profile = useSelector(state => state.user.profile.following)

   useEffect(() => {
        function getFollowing(){
            setFollowing(profile)
        }
        getFollowing();
   }, [])
    
    return (
        <Container>
              { 
                following.map(follow => (
                    <h1>{console.log(follow)} {follow.username}</h1>
                    
                ))
               }
        </Container>
    )
}
