import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import api from '../../../utils/api'
import { useSelector } from 'react-redux'
import { addHours } from 'date-fns'

import { Container } from './styles';
export default function AvatarInput( {duration}) {
    const { defaultValue, registerField } = useField('avatar');
    const [file, setFile ] = useState(defaultValue && defaultValue.id);
    const [preview, setPreview ] = useState(defaultValue && defaultValue.url);
    const ref = useRef();
    const userId = useSelector(state => state.user.profile._id)
    //informar o file pro unform
    useEffect(() => {  
        if(ref.current) {
            registerField({
                name: 'avatar_id',
                ref: ref.current,
                path: 'dataset.file' // onde vai buscar o valor input
            });

        }
    }, [ref, registerField]);

    async function handleChange(e) {
        const data = new FormData();
        let formatedDuration = addHours(Date.now(), duration)
        data.append('file', e.target.files[0]);
        data.append('userId', userId)
        data.append('duration', formatedDuration)

        try {
            const response = await api.post('/post/create', 
                data,
                );

        const { _id, path } = response.data;

        setFile(_id);
        setPreview(path);
        } catch (err) {
            console.log(err)
        }

    }
    
    return (
        <Container>
            <label htmlFor="avatar">
                <img src={preview || 'https://api.adorable.io/avatars/50/abott@adorable.png'} alt="" />

                <input 
                    type="file" 
                    id="avatar"
                    accept="image/*" 
                    data-file={file}
                    ref={ref}
                    onChange={handleChange} />
            </label>
        </Container>
    )
}
