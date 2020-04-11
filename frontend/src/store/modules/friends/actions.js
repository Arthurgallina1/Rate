export function followRequest(followed_id, following_id) {
  return {
    type: '@follow/FOLLOW_REQUEST',
    payload: { following_id, followed_id },
  };
}

export function followSuccess(followed_id) {
  return {
    type: '@follow/FOLLOW_SUCCESS',
    payload: { followed_id },
  };
}

export function followFailure() {
  return {
    type: '@follow/FOLLOW_FAILURE',
  };
}

export function unfollowRequest(followed_id, following_id) {
  return {
    type: '@follow/UNFOLLOW_REQUEST',
    payload: { followed_id, following_id },
  };
}

export function unfollowSuccess(followId) {
  return {
    type: '@follow/UNFOLLOW_SUCCESS',
    payload: { followId },
  };
}

export function unfollowFailure() {
  return {
    type: '@follow/UNFOLLOW_FAILURE',
  };
}
