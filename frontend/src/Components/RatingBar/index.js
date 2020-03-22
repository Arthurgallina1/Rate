import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { RatingDiv } from './styles';
import Rating from 'react-rating';
import api from '../../utils/api';
import { toast } from 'react-toastify'
import SVGIcon from '../../assets/estrela.png';
import SVGIconFull from '../../assets/estrelao.png';

export default function RatingForm({ postId }) {
    const [rateVote, setRateVote ] = useState(0);
    const userId = useSelector(state => state.user.profile._id);

    async function handleSubmit(data){
        try {
            const response = await api.post('rate/vote', {
                userId,
                comment: data.comment,
                postId,
                rate: rateVote
            })
            toast.success('Success!')
        } catch(err) {
            toast.error('Error!')
        }

    }   

    return (
        <RatingDiv>
            <Form onSubmit={handleSubmit}>
                <Rating stop={10} fractions={2} initialRating={rateVote} onClick={(value) => setRateVote(value)}
                    emptySymbol={<img src={SVGIcon} className="icon" />}
                    fullSymbol={<img src={SVGIconFull} className="icon-full" />}/>
                <Input type="text" name="comment" />
                <button>VOTE</button> 
            </Form>
        </RatingDiv>
    )
}
