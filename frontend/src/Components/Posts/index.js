import React from 'react'
import { Container } from './styles';
import {differenceInHours, differenceInMinutes } from 'date-fns'

export default function Posts({duration, title, description}) {

    const minLeft = differenceInMinutes(new Date(duration), new Date());
    const hourLeft = differenceInHours(new Date(duration), new Date());
    const minLefFormatted = minLeft % 60;
    return (
        <Container>
            <img src="" alt=""/>
            <div className="post-box">
                <h3>{title}</h3>
                <span>{description}</span>
                <br/><p>Time Left: {`${hourLeft}h${minLefFormatted}m`}</p>
            </div>
            <button>RATE IT</button>
            
        </Container>
    )
}
