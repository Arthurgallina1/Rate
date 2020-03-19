import React from 'react'
import { Container } from './styles';
import {differenceInHours, differenceInMinutes } from 'date-fns'


export default function Posts({duration, }) {


    
    const minLeft = differenceInMinutes(new Date(duration), new Date());
    const hourLeft = differenceInHours(new Date(duration), new Date());
    
    

    return (
        <Container>
            <img src="" alt=""/>
            <div className="post-box">
                <h3>Titulo post</h3>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, repudiandae!</span>
                <br/><p>Time Left: 20h29m</p>
            </div>
            <button>RATE IT</button>
            
        </Container>
    )
}
