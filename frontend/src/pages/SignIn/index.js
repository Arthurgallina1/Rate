import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInRequest } from '../../store/modules/auth/actions';
import  history from '../../utils/history'

const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required!')
})

export default function SignIn() {

    const dispatch = useDispatch();

    function handleSubmit({ username, password }){
        dispatch(signInRequest(username ,password))
        
    }

    return (
        <>
            <img src="" alt="Rate"/>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="username" type="username" placeholder="Username"/>
                <Input name="password" type="password" placeholder="Password"/>

                <button type="submit">Login</button>
                <Link to="/register">Create account.</Link>
            </Form>
        </>
    )
}
