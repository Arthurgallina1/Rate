import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import history from '../../utils/history';
import FollowBox from '../../Components/FollowBox';
import api from '../../utils/api';
import { Container } from './styles';
import { IoMdSad } from 'react-icons/io';

export default function Friends() {
  const userId = useSelector((state) => state.user.profile.id);
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    async function getFollowers() {
      const res = await api.get(`friendship/indexfollowers/${userId}`);
      setFollowingList(res.data);
    }
    getFollowers();
  }, []);

  return (
    <Container>
      {followingList.length > 0 ? (
        followingList.map((user) => {
          return <FollowBox key={user.id} friend={user} />;
        })
      ) : (
        <div className="no-followers-msg">
          <h3>Seems like you don't have any followers yet!</h3>
          <IoMdSad size={20} color={'#fd0565'} />
        </div>
      )}
    </Container>
  );
}
