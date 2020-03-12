import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

const schema = Yup.object().shape({
    email: Yup.string().email('E-mail is not valid!').required('E-mail is required'),
    password: Yup.string().required('Password is required!')
})

export default function SignIn() {

    function handleSubmit(data){
        console.log(data)
    }

    return (
        <>
            <img src="" alt="Rate"/>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="Email"/>
                <Input name="password" type="password" placeholder="Password"/>

                <button type="submit">Login</button>
                <Link to="/register">Create account.</Link>
            </Form>
        </>
    )
}
