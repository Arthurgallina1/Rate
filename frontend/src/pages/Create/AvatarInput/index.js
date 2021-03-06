import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '../../../utils/api';
import { useSelector } from 'react-redux';

import { Container } from './styles';
export default function AvatarInput({ avatar_url }) {
  const { defaultValue, registerField } = useField('avatar');
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [hasCover, setHasCover] = useState(false);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const userId = useSelector((state) => state.user.profile.id);

  const ref = useRef();
  //informar o file pro unform
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file', // onde vai buscar o valor input
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    data.append('type', 'avatar');
    data.append('userId', userId);

    const res = await api.post('/user/update', data);
    setHasCover(true);
    setPreview(res.data.path);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        {avatar_url || hasCover ? (
          <img src={preview || avatar_url} alt="" />
        ) : (
          <img
            src={'https://api.adorable.io/avatars/50/abott@adorable.png'}
            alt=""
          />
        )}

        <input
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          ref={ref}
          onChange={handleChange}
        />
      </label>
    </Container>
  );
}
