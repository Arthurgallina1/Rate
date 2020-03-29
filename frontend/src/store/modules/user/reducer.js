import produce from 'immer';
const INITIAL_STATE = { 
    profile: null,
}
// Escuta action do sign in success e armazena o user
export default function auth(state = INITIAL_STATE, action) {
    switch(action.type){
        case '@auth/SIGN_IN_SUCCESS':
            return produce(state, draft => {
                draft.profile = action.payload.user;
            });

        case '@follow/FOLLOW_SUCCESS':
            let followId = action.payload.followId;
            return produce(state, draft => {
                draft.profile.following.push(followId)
            });

        case '@follow/UNFOLLOW_SUCCESS':
            return produce(state, draft => {
                let followId = action.payload.followId;
                let followersList = draft.profile.following.filter(id => {     
                    return id !== followId;
                })
                draft.profile.following = followersList
                // console.log(followersList)
                
            });
        case '@auth/SIGN_OUT': {
            return produce(state, draft => {
                draft.token = null;
                draft.signed = false;
            })
        }


        default:
            return state;
    }
}
