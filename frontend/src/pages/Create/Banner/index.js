import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import api from '../../../utils/api';
import { FaCamera } from 'react-icons/fa';

import { Container } from './styles';
export default function Banner({ banner_url, canBeEditted }) {
  const { defaultValue, registerField } = useField('banner');
  const [hasCover, setHasCover] = useState(false);
  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(null);
  const userId = useSelector((state) => state.user.profile.id);

  // if (banner_url) setHasCover(true);
  const ref = useRef();
  //informar o file pro unform
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
    data.append('type', 'banner_url');
    data.append('userId', userId);

    const res = await api.post('/user/update', data);
    setHasCover(true);
    setPreview(res.data.path);
  }

  return (
    <Container>
      <label htmlFor="banner">
        {banner_url || hasCover ? (
          <img src={preview || banner_url} alt="" />
        ) : (
          <FaCamera size={20} color={'#999'} />
        )}
        {canBeEditted ? (
          <input
            type="file"
            id="banner"
            accept="image/*"
            data-file={file}
            ref={ref}
            onChange={handleChange}
          />
        ) : (
          ''
        )}
      </label>
    </Container>
  );
}
