import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, RightContainer, ProfileContainer } from './styles';
import { MdPinDrop } from 'react-icons/md';
import TabSection from '../Tabs';
import { useSelector } from 'react-redux';

export default function Profile() {
  const profile = useSelector((state) => state.user.profile);
  return (
    <ProfileContainer>
      <Container>
        <RightContainer>
          <TabSection></TabSection>
        </RightContainer>

        {/* <Link to="/updateprofile"> <button >Update Profile</button></Link> */}
      </Container>
    </ProfileContainer>
  );
}
