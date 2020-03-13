import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../utils/api'
const schema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string().email('E-mail is not valid!').required('E-mail is required'),
    password: Yup.string().required('Password is required!').min(6, 'Password muts have at least 6 characters.')
})

export default function SignUp() {

    const [status, setStatus] = useState('');
    async function handleSubmit({email, password, name}){
        try { 
            await api.post('/user/register', {
                email,
                password,
                username: name
            })
            setStatus('Account created succesfully, you will be redirect to login page in a few seconds.')
        } catch (err) {
            setStatus(err)
        }
        
    }
    
    return (
        <>
            <img src="" alt="Rate"/>
            <span> {status} </span>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" type="name" placeholder="Your name"/>   
                <Input name="email" type="email" placeholder="Email"/>
                <Input name="password" type="password" placeholder="Password"/>

                <button type="submit">Create account</button>
                <Link to="/">Already have an account?</Link>
            </Form>
        </>
    )
}
