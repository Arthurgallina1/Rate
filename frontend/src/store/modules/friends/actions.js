export function followRequest(followId, currentUserId) {
    return  { 
        type: '@follow/FOLLOW_REQUEST',
        payload: { followId, currentUserId }
    }
}

export function followSuccess(followId) {
    return  { 
        type: '@follow/FOLLOW_SUCCESS',
        payload: { followId }
    }
}

export function followFailure() {
    return  { 
        type: '@follow/FOLLOW_FAILURE'
    }
}


export function unfollowRequest(followId, currentUserId) {
    return  { 
        type: '@follow/UNFOLLOW_REQUEST',
        payload: { followId, currentUserId }
    }
}

export function unfollowSuccess(followId) {
    return  { 
        type: '@follow/UNFOLLOW_SUCCESS',
        payload: { followId }
    }
}

export function unfollowFailure() {
    return  { 
        type: '@follow/UNFOLLOW_FAILURE'
    }
}