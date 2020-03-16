import React, { useState } from 'react'
import { Container } from './styles'
import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    title: Yup.string().required('Title is required!'),
    duration: Yup.string().required('Duration is required'),
    description: Yup.string().required('Description is required!')
})



export default function CreatePost() {
    const options = [
            { id: '15', title: '15 Minutes' },
            { id: '60', title: '1 Hour' },
            { id: '2400', title: '24 Hours' },
        ];
    
    function handleSubmit(data){
        console.log(data);
    }


    return (
        <Container>
            <Form onSubmit={handleSubmit} schema={schema}>
                <Input name="title" type="text" placeholder="Post title" />
                <Select name="duration" options={options} placeholder="Duration" />
                <Input name="description" multiline type="text" placeholder="Description..."/>

                <button type="submit">Create post</button>
            </Form>

        </Container>
    )
}
