import React, { useEffect, useState, useContext } from 'react';
import { ContainerView, Container, Box, ProfileCont } from './styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdPinDrop } from 'react-icons/md';
import api from '../../utils/api';
import { UserContext } from '../../utils/userContext';
import { parseISO, format } from 'date-fns';

export default function Overview() {
  const [userProfile, setUserProfile] = useState('');
  const user = useSelector((state) => state.user.profile);
  const [joined, setJoined] = useState('');
  const context = useContext(UserContext);
  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await api.get(`/user/info/${user.id}`);
        console.log(response.data);
        setUserProfile(response.data);
        setJoined(format(parseISO(response.data.createdAt), "MMMM',' d"));
      } catch (err) {
        console.log(err);
      }
    }
    getUserInfo();
  }, []);

  return (
    <ContainerView>
      <ProfileCont>
        <aside>
          <img
            src={
              userProfile.avatar_url ||
              'https://api.adorable.io/avatars/50/abott@adorable.png'
            }
            alt=""
          />

          <h3>{userProfile.name}</h3>
          <h4>{userProfile.username}</h4>

          <Link to="/updateprofile">
            {' '}
            <button>Edit Profile</button>
          </Link>
          <Box>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              aspernatur laboriosam obcaecati consectetur dolorem rerum enim
              facilis quo, asperiores modi.
            </p>
            <span>
              <MdPinDrop size={20} color={'#ccc'} /> Brazil{' '}
            </span>
          </Box>
        </aside>
        <h3>Your Profile</h3>
        <hr />
        <br />
        <h4>
          Joined on <strong>{joined}</strong>{' '}
        </h4>
        <h4>
          <strong>{userProfile.followedCount}</strong> Followers |{' '}
          <strong>{userProfile.followingCount}</strong> Following
        </h4>
        <h4>
          <strong>{context.post.length}</strong> Posts
        </h4>
      </ProfileCont>
      <Container>
        <h3>Your Posts</h3>
        <hr />
        <h4>
          <strong>203</strong> Total votes
        </h4>
        <h4>
          <strong>9.3 </strong>Best rating
        </h4>
      </Container>
      <Container>{/* <renderLineChart /> */}</Container>
    </ContainerView>
  );
}
