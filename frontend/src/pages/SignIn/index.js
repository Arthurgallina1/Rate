import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { signInRequest } from '../../store/modules/auth/actions';
import Logo from '../../assets/letra-r.svg';
// import ReactLoading from 'react-loading';

const schema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required!')
})

export default function SignIn() {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading) //state.nomeReducer.estado
    function handleSubmit({ username, password }){
        dispatch(signInRequest(username ,password))
        
    }

    return (
        <>
            <img src={Logo} alt="Rate"/>
            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="username" type="username" placeholder="Username"/>
                <Input name="password" type="password" placeholder="Password"/>

                <button type="submit">{ loading ? (
                    //  <ReactLoading type={'Bars'} color={'#FFF'} height={30} width={30} /> 
                    ''
                ) : 'Login'}</button>
                <Link to="/register">Create account.</Link>
            </Form>
        </>
    )
}
