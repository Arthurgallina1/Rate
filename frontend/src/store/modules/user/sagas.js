import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../utils/api'
import { toast } from 'react-toastify'


import { updateProfileSuccess, updateProfileFailure} from './actions'

export function* updateProfile({payload}) {
   try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
        { name, email },
        rest.oldPassword ? rest : {}
    )

    const response = yield call(api.put, 'users', profile);
    toast.success('Profile updated!');
    yield put (updateProfileSuccess(response.data))
   } catch(err) {
       toast.error('Error on updating profile.')
       yield put (updateProfileFailure())

   }

}

export default all([
    takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)
]); 