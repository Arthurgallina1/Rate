import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';
import { Container, ContainerBg, ContainerUpdate } from './styles';
import { Link } from 'react-router-dom';
import AvatarInput from '../Create/AvatarInput';
import api from '../../utils/api';
import { toast } from 'react-toastify';

export default function UpdateProfile() {
  const profile = useSelector((state) => state.user.profile);
  const [file, setFile] = useState(null);
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

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  return (
    <ContainerUpdate>
      <ContainerBg></ContainerBg>
      <Container>
        <img src="http://localhost:8000/files/a1586392949075.png" alt="" />
        <Form initialData={profile} onSubmit={handleSubmit}>
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
          <input
            type="file"
            id="avatar"
            accept="image/*"
            onChange={handleChange}
          />
          {/* <AvatarInput /> */}
          <button>
            <strong>Update profile</strong>
          </button>
        </Form>
      </Container>
    </ContainerUpdate>
  );
}
