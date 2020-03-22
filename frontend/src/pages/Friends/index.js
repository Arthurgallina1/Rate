import React, { useEffect, useState } from 'react'
import FollowBox from '../../Components/FollowBox';
import { useSelector } from 'react-redux';
import api from '../../utils/api';
import { Container } from './styles';

export default function Friends() {
    const [ following, setFollowing ] = useState([]);
    const profile = useSelector(state => state.user.profile.following)
    const [ followingList, setFollowingList ] = useState([]);

   useEffect(() => {
        async function getFollowing(){
            await setFollowing(profile);

            const followList = await Promise.all(
                profile.map(async following => {
                    const res = await api.get(`user/info/${following}`)
                    res.data.user.friendship = true; 
                    return res.data
                })
            )
            setFollowingList(followList);
        }
        getFollowing();
        
   }, [])
    
    return (
        <Container>
              { 
                
                followingList.map(user => {
                    return <FollowBox key={user.user._id}
                    friend={user.user} friendship={user.user.friendship} />
                })
                }
        </Container>
    )
}
