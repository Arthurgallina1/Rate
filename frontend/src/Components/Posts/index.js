import React from 'react'
import { Container } from './styles';
import { Link } from 'react-router-dom';
import timeleft_formatted from '../../utils/dates';

export default function Posts({duration, title, description, postId}) {

    const timeLeftFormatted = timeleft_formatted(duration);
    return (
        <Container>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
            <div className="post-box">
                <h3>{title}</h3>
                <h5>{description}</h5>
                <br/><p>Time Left: {timeLeftFormatted}</p>
            </div>
            <Link to={`/rate/${postId}`}><button>RATE IT</button></Link>
            
        </Container>
    )
}
