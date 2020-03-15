import { combineReducers } from 'redux';
import auth from './auth/reducer';
import user from './user/reducer';
import friends from './friends/reducer';


export default combineReducers({
    auth,
    user,
    friends
})