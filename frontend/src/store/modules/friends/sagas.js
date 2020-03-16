import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../utils/api'
import { toast } from 'react-toastify'


import { followSuccess, followFailure, unfollowSuccess, unfollowFailure } from './actions'

export function* assignFollow({payload}) {
   try {
    const { followId, currentUserId } = payload;

    yield call(api.post, 'add', {
        userToBeAddId: followId,
        currentUserId
    })
    toast.success('User followed');
    yield put (followSuccess(followId));

   } catch(err) {
       toast.error('Error on following user.')
       console.log(err)
       yield put (followFailure())

   }

}

export function* assignUnfollow({payload}) {
    try {
     const { followId, currentUserId } = payload;
    
     yield call (api.post, 'user/remove', {
         currentUserId,
         unfollowId: followId
     })
     toast.success('User unfollowed')
     yield put (unfollowSuccess(followId));
        
    } catch( err) {
        console.log(err)
        toast.error('Couldn\'t unfollow');
        yield put (unfollowFailure())
    }

} 
 

export default all([
    takeLatest('@follow/FOLLOW_REQUEST', assignFollow),
    takeLatest('@follow/UNFOLLOW_REQUEST', assignUnfollow)
]); 