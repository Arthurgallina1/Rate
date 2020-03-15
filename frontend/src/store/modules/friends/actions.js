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