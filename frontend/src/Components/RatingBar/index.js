import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { RatingDiv } from './styles';
import Rating from 'react-rating';

export default function RatingBar() {
    const [rateVote, setRateVote ] = useState(0);

    function handleSubmit(data){
        console.log(data, rateVote);
    }   

    return (
        <RatingDiv>
            <Form onSubmit={handleSubmit}>
                <Rating fractions={2} initialRating={rateVote} onClick={(value) => setRateVote(value)}/>
                <Input type="text" name="comment" />
                <button>VOTE</button> 
            </Form>
        </RatingDiv>
    )
}
