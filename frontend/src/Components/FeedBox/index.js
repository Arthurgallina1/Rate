import React, { useState }from 'react'
import { MainFeedBox, Cont }  from './styles';
import { Link } from 'react-router-dom';
import { differenceInHours, differenceInMinutes } from 'date-fns'
import Logo from '../../assets/letra-r.svg';

export default function FeedBox( { post, color }) {
    
    const minLeft = differenceInMinutes(new Date(post.duration), new Date());
    const hourLeft = differenceInHours(new Date(post.duration), new Date());
    const minLefFormatted = minLeft % 60;

    return (
        <MainFeedBox color={color}>
                <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
                  <div>
                    <h3>{post.title}</h3>
                    <h5>{post.description}</h5>
                   <big> {`${hourLeft}h${minLefFormatted}m left`}</big><br/>
                  </div>
                <Link to={`/rate/${post._id}`}><img src={Logo} alt=""/></Link>
        </MainFeedBox>
    )
}
