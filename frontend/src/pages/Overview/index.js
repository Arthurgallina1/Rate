import React, { useEffect, useState, useContext } from 'react';
import { ContainerView, Container, Box, ProfileCont } from './styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdPinDrop } from 'react-icons/md';
import api from '../../utils/api';
import { UserContext } from '../../utils/userContext';

export default function Overview() {
  const user = useSelector((state) => state.user.profile);
  const context = useContext(UserContext);
  return (
    <ContainerView>
      <ProfileCont>
        <aside>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt=""
          />

          <h3>{user.name}</h3>
          <h4>{user.username}</h4>

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
              <MdPinDrop size={20} color={'#333'} /> Brazil{' '}
            </span>
          </Box>
        </aside>
        <h3>Your Profile</h3>
        <hr />
        <h4>
          Joined <strong>July 2019</strong>{' '}
        </h4>
        <h4>
          <strong>{user.following.length}</strong> Following <strong>|</strong>{' '}
          <strong>{user.followers.length}</strong> Followers
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
