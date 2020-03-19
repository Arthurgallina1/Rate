import React, { useState, useRef } from 'react'
import { Container } from './styles'
import { Form, Input, Select, } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import api from '../../utils/api'
import AvatarInput from './AvatarInput';
import { format, addMinutes, parseISO } from 'date-fns'
import {toast} from 'react-toastify'

// const schema = Yup.object().shape({
//     title: Yup.string().required('Title is required!'),
//     duration: Yup.string().required('Duration is required'),
//     description: Yup.string().required('Description is required!')
// })



export default function CreatePost() {
    // const formRef = useRef(null);
    const userId = useSelector(state => state.user.profile._id);
    const options = [
            { id: '15', title: '15 Minutes' },
            { id: '60', title: '1 Hour' },
            { id: '2400', title: '24 Hours' },
        ];
    
    async function handleSubmit(data){
        console.log(data.title)
        const file = data.avatar_file
        let result = addMinutes(new Date(), Number(data.duration))
        try {
            const response = await api.post('/post/create', {
                file,
                userId,
                file: data.avatar_file.name,
                path: data.avatar_file.name,
                duration: result,
                title: data.title,
                description: data.description
                
            });

            toast.success(`Post created! Duration: ${response.data.duration}`);


        } catch (err) {
            
        }

    }


    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                {/* <label htmlFor="title">Post title</label> */}
                <Input name="title" type="text" placeholder="Post title" />
                <Select name="duration" options={options} placeholder="Duration" />
                <Input name="description" multiline type="text" placeholder="Description..."/>
                <AvatarInput name="avatar_file" />
                
                <button type="submit">Create post</button>
            </Form>

        </Container>
    )
}
