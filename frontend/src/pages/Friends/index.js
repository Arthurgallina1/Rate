import React, { useEffect, useState } from 'react';
import FollowBox from '../../Components/FollowBox';
import { useSelector } from 'react-redux';
import api from '../../utils/api';
import { Container } from './styles';
import { IoMdSad } from 'react-icons/io';

export default function Friends() {
  const userId = useSelector((state) => state.user.profile.id);
  const [followingList, setFollowingList] = useState([]);
  useEffect(() => {
    async function getFollowing() {
      const res = await api.get(`friendship/index/${userId}`);
      setFollowingList(res.data);
    }
    getFollowing();
  }, []);

  return (
    <Container>
      {followingList.length > 0 ? (
        followingList.map((user) => {
          return <FollowBox key={user.id} friend={user} />;
        })
      ) : (
        <div className="no-followers-msg">
          <h3>Seems like you arent' following anyone yet!</h3>
          <IoMdSad size={20} color={'#fd0565'} />
        </div>
      )}
    </Container>
  );
}
