import React, { useState, useEffect } from 'react';
import { Box, RateBox } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import history from '../../utils/history';
import {
  followRequest,
  unfollowRequest,
} from '../../store/modules/friends/actions';

export default function FolowBox({ friend }) {
  const [label, setLabel] = useState(false);
  const userId = useSelector((state) => state.user.profile.id);
  const dispatch = useDispatch();
  async function handleAdd() {
    if (friend.friendship) {
      dispatch(unfollowRequest(friend.id, userId));
      setLabel('FOLLOW');
    } else {
      dispatch(followRequest(friend.id, userId));
      setLabel('UNFOLLOW');
    }
  }

  function toProfile(id) {
    history.push(`profile/${id}`);
  }

  const buttonLabel = friend.friendship ? 'UNFOLLOW' : 'FOLLOW';
  return (
    <Box>
      <div className="img-box">
        <img
          src={
            friend.avatar_url ||
            ' https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt=""
        />
      </div>
      <div className="follow-box-info">
        <p onClick={() => toProfile(friend.id)}>
          <strong>{friend.name}</strong>
        </p>
        <h5>{friend.username}</h5>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
          reprehenderit ipsa repudiandae?
        </span>
      </div>
      <div className="button-box">
        <button onClick={() => handleAdd()}>
          <strong>{label || buttonLabel}</strong>
        </button>
      </div>
    </Box>
  );
}
