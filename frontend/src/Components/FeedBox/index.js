import React, { useState }from 'react'
import { MainFeedBox, Cont }  from './styles';
import { Link } from 'react-router-dom';
import { differenceInHours, differenceInMinutes } from 'date-fns'


export default function FeedBox( { post, theme }) {
    
    const minLeft = differenceInMinutes(new Date(post.duration), new Date());
    const hourLeft = differenceInHours(new Date(post.duration), new Date());
    const minLefFormatted = minLeft % 60;

    return (
        <MainFeedBox>
                <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
                  <div>
                    <h3>{post.title}</h3>
                        <h5>{post.description}</h5>
                        Time Left: {`${hourLeft}h${minLefFormatted}`}
                        {theme}
                  </div>
                <Link to={`/rate/${post._id}`}><button>RATE IT</button></Link>
        </MainFeedBox>
    )
}
