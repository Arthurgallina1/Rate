import produce from 'immer';
const INITIAL_STATE = { 
    profile: null
}
// Escuta action do sign in success e armazena o user
export default function auth(state = INITIAL_STATE, action) {
    switch(action.type){
        case '@auth/SIGN_IN_SUCCESS':
            return produce(state, draft => {
                draft.profile = action.payload.user;
            });
        default:
            return state;
    }
}