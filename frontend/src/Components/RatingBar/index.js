import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Rating } from './styles';

export default function RatingBar() {

    function handleSubmit(data){
        console.log(data);
    }   

    return (
        <Rating>
            <Form onSubmit={handleSubmit}>
                <h3>rating bar</h3>
                <Input type="text" name="comment" />
                <button>VOTE</button> 
            </Form>
        </Rating>
    )
}
