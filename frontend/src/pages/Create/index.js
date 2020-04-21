import React, { useState, useRef } from 'react';
import { Container } from './styles';
import { Form, Input, Select } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import api from '../../utils/api';
import AvatarInput from './AvatarInput';
import { format, addMinutes, parseISO } from 'date-fns';
import { toast } from 'react-toastify';
import history from '../../utils/history';

// const schema = Yup.object().shape({
//     title: Yup.string().required('Title is required!'),
//     duration: Yup.string().required('Duration is required'),
//     description: Yup.string().required('Description is required!')
// })

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const userId = useSelector((state) => state.user.profile.id);
  const options = [
    { id: '15', title: '15 Minutes' },
    { id: '60', title: '1 Hour' },
    { id: '2400', title: '24 Hours' },
  ];

  async function handleSubmit(data) {
    const newDuration = addMinutes(new Date(), data.duration);
    const dataFile = new FormData();
    files.map((file) => dataFile.append('file', file));
    // dataFile.append('files', files);
    dataFile.append('title', data.title);
    dataFile.append('duration', newDuration);
    dataFile.append('description', data.description);
    dataFile.append('userId', userId);
    try {
      const response = await api.post('/post/storemulti', dataFile);
      toast.success(`Post created!`);
      setTimeout(() => history.push(`rate/${response.data._id}`), 500);
    } catch (err) {}
  }

  function handleChange(e) {
    const filesArray = Array.from(e.target.files);
    setFiles(filesArray);
    console.log(filesArray);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        {/* <label htmlFor="title">Post title</label> */}
        <Input name="title" type="text" placeholder="Post title" />
        <Select
          name="duration"
          options={options}
          className="custom-select"
          placeholder="Duration"
        />
        <Input
          name="description"
          multiline
          type="text"
          placeholder="Description..."
        />
        {files.length > 0 ? (
          <div className="combo-box">
            <h3>Images</h3>
            {files.map((file) => file.name)}
          </div>
        ) : (
          ''
        )}
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
          multiple
        />
        {/* <AvatarInput name="avatar_file" /> */}

        <button type="submit">Create post</button>
      </Form>
    </Container>
  );
}
