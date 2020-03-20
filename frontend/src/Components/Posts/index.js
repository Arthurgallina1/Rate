import React from 'react'
import { Container } from './styles';
import {differenceInHours, differenceInMinutes } from 'date-fns'
import { Link } from 'react-router-dom';

export default function Posts({duration, title, description, postId}) {

    const minLeft = differenceInMinutes(new Date(duration), new Date());
    const hourLeft = differenceInHours(new Date(duration), new Date());
    const minLefFormatted = minLeft % 60;
    return (
        <Container>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
            <div className="post-box">
                <h3>{title}</h3>
                <h5>{description}</h5>
                <br/><p>Time Left: {`${hourLeft}h${minLefFormatted}m`}</p>
            </div>
            <Link to={`/rate/${postId}`}><button>RATE IT</button></Link>
            
        </Container>
    )
}
