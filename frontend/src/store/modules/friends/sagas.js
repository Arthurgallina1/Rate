import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../utils/api';
import { toast } from 'react-toastify';

import {
  followSuccess,
  followFailure,
  unfollowSuccess,
  unfollowFailure,
} from './actions';
import Friends from '../../../pages/Followers';

export function* assignFollow({ payload }) {
  try {
    const { followed_id, following_id } = payload;

    yield call(api.post, 'friendship/add', {
      followed_id,
      following_id,
    });
    toast.success('User followed');
    yield put(followSuccess(followed_id));
  } catch (err) {
    toast.error('Error on following user.');
    console.log(err);
    yield put(followFailure());
  }
}

export function* assignUnfollow({ payload }) {
  try {
    const { followed_id, following_id } = payload;

    yield call(api.post, 'friendship/remove', {
      followed_id,
      following_id,
    });
    toast.success('User unfollowed');
    yield put(unfollowSuccess(followed_id));
  } catch (err) {
    console.log(err);
    toast.error("Couldn't unfollow");
    yield put(unfollowFailure());
  }
}

export default all([
  takeLatest('@follow/FOLLOW_REQUEST', assignFollow),
  takeLatest('@follow/UNFOLLOW_REQUEST', assignUnfollow),
]);
