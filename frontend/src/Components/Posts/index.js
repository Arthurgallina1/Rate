import React from 'react';
import { Box } from './styles';
import { Link } from 'react-router-dom';
import { parseISO, formatDistance } from 'date-fns';
import timeleft_formatted from '../../utils/dates';

export default function Posts({ post }) {
  const isoDuration = parseISO(post.duration);
  const timeLeft = formatDistance(isoDuration, new Date(), {
    addSuffix: true,
  });

  return (
    <Box>
      <div className="img-box">
        <img
          src={
            post.path ||
            ' https://api.adorable.io/avatars/50/abott@adorable.png'
          }
          alt=""
        />
      </div>
      <div className="follow-box-info">
        <strong>{post.title}</strong>
        <h5>{post.description}</h5>
        <span>Expires in {timeLeft}</span>
      </div>
      <Link to={`/rate/${post._id}`}>
        <button>RATE IT</button>
      </Link>
    </Box>
  );
}

//      <Link to={`/rate/${postId}`}>
