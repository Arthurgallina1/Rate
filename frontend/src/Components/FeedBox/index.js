import React, { useState }from 'react'
import { MainFeedBox, Cont }  from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/letra-r.svg';
import timeleft_formatted from '../../utils/dates'

export default function FeedBox( { post, color }) {
    
  
   
    const timeLeft =  timeleft_formatted(post.duration);
    // const dayLeftFormatted = dayLeft % 24

    return (
        <MainFeedBox color={color}>
                <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
                  <div>
                    <h3>{post.title}</h3>
                    <h5>{post.description}</h5>
                   <big> {timeLeft}</big><br/>
                  </div>
                <Link to={`/rate/${post._id}`}><img src={Logo} alt=""/></Link>
        </MainFeedBox>
    )
}
