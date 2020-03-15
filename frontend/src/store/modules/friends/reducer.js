// import produce from 'immer';
// const INITIAL_STATE = { 
//     profile: null
// }
// // Escuta action do sign in success e armazena o user
// export default function follow(state = INITIAL_STATE, action) {
//     switch(action.type){
//         case '@follow/FOLLOW_SUCCESS':
//             console.log(action.payload)
//             return produce(state, draft => {
//                 // draft.profile.following.push(action.payload.followId);
//                 console.log(action.payload.followId)
//             });
//         default:
//             return state;
//     }
// }