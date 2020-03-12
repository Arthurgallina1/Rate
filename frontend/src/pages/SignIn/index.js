import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

export default function SignIn() {

    function handleSubmit(data){
        console.log(data)
    }

    return (
        <>
            <img src="" alt="Rate"/>
            <Form onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Email"/>
                <Input name="password" type="password" placeholder="Password"/>

                <button type="submit">Login</button>
                <Link to="/register">Create account.</Link>
            </Form>
        </>
    )
}
