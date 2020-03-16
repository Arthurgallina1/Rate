import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import api from '../../utils/api'
import { toast, ToastType } from 'react-toastify'
const schema = Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string().email('E-mail is not valid!').required('E-mail is required'),
    password: Yup.string().required('Password is required!').min(6, 'Password muts have at least 6 characters.'),
    user: Yup.string().required('Username is required.')
})

export default function SignUp() {

    const [status, setStatus] = useState('');
    async function handleSubmit({email, password, name, user}){
        try { 
            await api.post('/user/register', {
                email,
                password,
                user,
                name
            })
            toast.success('User created!')
            // setStatus('Account created succesfully, you will be redirect to login page in a few seconds.')
        } catch (err) {
            // setStatus('Error on creating account!')
            toast.error('Error on creating account.')
        }
        
    }
    
    return (
        <>
            <img src="" alt="Rate"/>
            <span> {status} </span>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="name" type="name" placeholder="Your name"/>
                <Input name="user" type="name" placeholder="Your username"/>   
                <Input name="email" type="email" placeholder="Email"/>
                <Input name="password" type="password" placeholder="Password"/>

                <button type="submit">Create account</button>
                <Link to="/">Already have an account?</Link>
            </Form>
        </>
    )
}
