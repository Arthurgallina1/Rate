import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { parseISO, formatDistance } from 'date-fns';
import timeleft_formatted from '../../utils/dates';

export default function Posts({ duration, title, path, description, postId }) {
  const isoDuration = parseISO(duration);
  const timeLeft = formatDistance(isoDuration, new Date(), {
    addSuffix: true,
  });
  return (
    <Container>
      <img
        src={path || 'https://api.adorable.io/avatars/50/abott@adorable.png'}
        alt=""
      />
      <div className="post-box">
        <h3>{title}</h3>
        <h5>{description}</h5>
        <br />
        <p>Expires {timeLeft}</p>
      </div>
      <Link to={`/rate/${postId}`}>
        <button>RATE IT</button>
      </Link>
    </Container>
  );
}
