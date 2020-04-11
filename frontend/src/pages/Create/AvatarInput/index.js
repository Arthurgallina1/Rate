import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '../../../utils/api';
import { useSelector } from 'react-redux';
import { addHours } from 'date-fns';

import { Container } from './styles';
export default function AvatarInput({ duration, postId }) {
  const { defaultValue, registerField } = useField('avatar');
  // const [file, setFile ] = useState(defaultValue && defaultValue.id);
  const [path, setPath] = useState(null);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const ref = useRef();
  const userId = useSelector((state) => state.user.profile._id);
  //informar o file pro unform
  //API Pra conectar o input com o unform (pode set qlqr input)
  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file',
        ref: ref.current,
        path: 'files[0]', // onde vai buscar o valor input
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    data.append('info', postId);
    const file = e.target.files?.[0];
    setPath(URL.createObjectURL(file));
    // console.log(file);
    const response = await api.post('/post/store', data);
    setFile(data);
    // setFile(e.target.files[0]);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={path || 'https://api.adorable.io/avatars/50/abott@adorable.png'}
          alt=""
        />
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
