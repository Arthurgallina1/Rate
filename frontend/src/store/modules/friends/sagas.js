import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../utils/api'
import { toast } from 'react-toastify'


import { followSuccess, followFailure } from './actions'

export function* assignFollow({payload}) {
   try {
    const { followId, currentUserId } = payload;

    const response = yield call(api.post, 'add', {
        userToBeAddId: followId,
        currentUserId
    })
    toast.success('User followed');
    yield put (followSuccess(followId));

   } catch(err) {
       toast.error('Error on following user.')
       yield put (followFailure())

   }

}

export default all([
    takeLatest('@follow/FOLLOW_REQUEST', assignFollow)
]); 