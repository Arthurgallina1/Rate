import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { Container, ContainerBg, ContainerUpdate } from './styles';
import { Link } from 'react-router-dom';
import Banner from '../Create/Banner';
import AvatarInput from '../Create/AvatarInput';
import api from '../../utils/api';
import { toast } from 'react-toastify';

export default function UpdateProfile() {
  const profile = useSelector((state) => state.user.profile);
  const [userProfile, setUserProfile] = useState('');
  const [file, setFile] = useState(null);
  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await api.get(`/user/info/${profile.id}`);
        setUserProfile(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getUserInfo();
  }, []);

  async function handleSubmit(data) {
    const dataFile = new FormData();
    dataFile.append('file', file);
    dataFile.append('userId', profile.id);
    try {
      const userId = profile.id;
      const response = await api.post('/user/update', { dataFile, userId });
      toast.success('Profile updated!');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ContainerUpdate>
      <ContainerBg>
        <Banner banner_url={userProfile.bg_url} canBeEditted={true} />
      </ContainerBg>
      <Container>
        <AvatarInput avatar_url={userProfile.avatar_url} />
        <Form initialData={userProfile} onSubmit={handleSubmit}>
          <Input name="username" placeholder="Username" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Textarea name="bio" type="bio" placeholder="Add your bio" />

          {/* <hr /> */}
          {/* <Input
          name="oldpassword"
          type="password"
          placeholder="Current password"
        />
        <Input name="password" type="password" placeholder="New password" />
        <Input
          name="confirmpassword"
          type="password"
          placeholder="Confirm password"
        /> */}

          <button>
            <strong>Update profile</strong>
          </button>
        </Form>
      </Container>
    </ContainerUpdate>
  );
}
