import React, { useState } from 'react';
import { MainFeedBox } from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/letra-r.svg';
import timeleft_formatted from '../../utils/dates';
import { parseISO, formatDistance } from 'date-fns';
import { FaBell } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import history from '../../utils/history';
export default function FeedBox({ post, color }) {
  const userId = useSelector((state) => state.user.profile.id);

  const hasVoted = post.votes.find((vote) => vote.userId == userId);
  const timeDistance = formatDistance(parseISO(post.duration), new Date());
  function handleClick(id) {
    history.push(`/rate/${id}`);
  }
  // const dayLeftFormatted = dayLeft % 24
  return (
    <MainFeedBox color={color} onClick={() => handleClick(post._id)}>
      <img
        src={
          post.path || 'https://api.adorable.io/avatars/50/abott@adorable.png'
        }
        alt=""
      />
      <div className="post-info-box">
        <h3>{post.title}</h3>
        <span>{timeDistance}</span>
        <br />
        <h5>Tap to open.</h5>
      </div>
      <big> {!hasVoted ? <FaBell color={'red'} size={20} /> : ''}</big>
      {/* <img src={Logo} alt="" /> */}
    </MainFeedBox>
  );
}
