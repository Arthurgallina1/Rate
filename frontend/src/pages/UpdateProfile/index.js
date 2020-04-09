import React from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import AvatarInput from '../Create/AvatarInput';

export default function UpdateProfile() {
  const profile = useSelector((state) => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="username" placeholder="Username" />
        <Input name="email" type="email" placeholder="E-mail" />

        <hr />
        <Input
          name="oldpassword"
          type="password"
          placeholder="Current password"
        />
        <Input name="password" type="password" placeholder="New password" />
        <Input
          name="confirmpassword"
          type="password"
          placeholder="Confirm password"
        />
        <AvatarInput />
        <Link to="/profile">
          <button>Update profile</button>
        </Link>
      </Form>
    </Container>
  );
}
