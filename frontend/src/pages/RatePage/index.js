import React, { useState, useEffect } from 'react'
import { Container, Box, Comments } from './styles';
import Comment from '../../Components/Comment'
import FriendBox from '../../Components/FriendBox'
import api from '../../utils/api';
import RatingBar from '../../Components/RatingBar';


export default function RatePage({match}) {
    console.log(match)
    const [post, setPost] = useState({});
    const [rate, setRate] = useState(0);
    // const { postid } = params;
    const friendSimulator = {
        name: 'teste',
        username: 'username'
    }

    useEffect(() => {
        (async () => {
            const response =  await api.get('/post/show/5e72c8b049194c5121a5985f');
            setPost(response.data);
            response.data.votes.length > 1 ? setRate(response.data.votes.reduce((acc, v) => acc+v)) : setRate(0);
        })();


        
    }, [])

    return (
        <Container>
            <Box>
                <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
                <h2>{post.userId}</h2>
                <h5>{post.file}</h5>
                <div>{rate}</div>
                <RatingBar />
                <Comments>
                    <FriendBox  friend={friendSimulator} rate={rate} friendship={'rate'}/>
                    <FriendBox friend={friendSimulator} rate={rate} friendship={'rate'}/>
                    <FriendBox friend={friendSimulator} rate={rate} friendship={'rate'} />
                </Comments>

            </Box>
        </Container>
    )
}
