import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../utils/api';
import { toast } from 'react-toastify';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { data } = payload.data;
    console.log(payload.data);
    const response = yield call(api.post, '/user/update', data);
    // const profile = Object.assign(
    //     { name, email },
    //     rest.oldPassword ? rest : {}
    //     );
    console.log(response.data);
    toast.success('Profile updated!');
    // const response = yield call(api.put, 'users', profile);
    // toast.success('Profile updated!');
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Error on updating profile.');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
