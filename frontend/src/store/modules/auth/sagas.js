import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../utils/api'
import { signInSuccess, signFailure } from './actions';
import history from '../../../utils/history'
import { toast } from 'react-toastify'

export function* signIn( { payload } ){
    try {
        const { username, password } = payload;

        const response = yield call(api.post, '/user/auth', {
            username,
            password
        });

        const { token, user } = response.data;

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        yield put(signInSuccess(token, user))

        history.push('/dashboard');
    } catch (err) {
        toast.error('Login failed, please check your credentials.')
        yield put(signFailure());
    }
}

export function setToken({ payload }){
    if(!payload) return;

    const { token } = payload.auth;
    
    if(token){
        api.defaults.headers['Authorization'] = `Bearer ${token}`;
    }
}

export function signOut(){
    history.push('/');
}

export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_OUT', signIn),
    takeLatest('persist/REHYDRATE', setToken)
])