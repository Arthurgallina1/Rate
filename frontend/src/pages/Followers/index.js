import React, { useEffect, useState } from 'react'
import FollowBox from '../../Components/FollowBox';
import { useSelector } from 'react-redux';
import api from '../../utils/api';
import { Container } from './styles';

import { IoMdSad } from 'react-icons/io'
export default function Friends() {
    const [ following, setFollowing ] = useState([]);
    const followers = useSelector(state => state.user.profile.followers);
    const followingCheck = useSelector(state => state.user.profile.following);
    const [ followingList, setFollowingList ] = useState([]);

   useEffect(() => {
        async function getFollowers(){
            await setFollowing(followers);

            const followList = await Promise.all(
                followers.map(async following => {
                    const res = await api.get(`user/info/${following}`)
                    followingCheck.find(following => following === res.data.user._id) ? 
                        res.data.user.friendship = true : res.data.user.friendship = false
                    return res.data
                })
            )
            console.log(followList)
            setFollowingList(followList);
        }
        getFollowers();
        
   }, [])
    
    return (
        <Container>
                { 
                    followingList.length > 0 ? 
                    (
                        followingList.map(user => {
                            return <FollowBox key={user.user._id}
                            friend={user.user} friendship={user.user.friendship} />
                        })
                    ) 
                    :
                    (
                        <div className="no-followers-msg">
                            <h3>Seems like you don't have any followers yet!</h3>
                            <IoMdSad size={20} color={'#000'}  />
                        </div>
                    )
                
                }
        </Container>
    )
}
