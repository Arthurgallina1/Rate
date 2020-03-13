import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../utils/api'
import { signInSuccess } from './actions';
import history from '../../../utils/history'

export function* signIn( { payload } ){
    const { username, password } = payload;

    const response = yield call(api.post, '/user/auth', {
        username,
        password
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user))

    history.push('/dashboard');
    
}


export default all([
    takeLatest('@auth/SIGN_IN_REQUEST', signIn)
])