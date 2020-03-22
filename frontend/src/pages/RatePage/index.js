import React, { useState, useEffect } from 'react'
import { Container, Box, Comments } from './styles';
import Comment from '../../Components/Comment'
import FriendBox from '../../Components/FriendBox'
import api from '../../utils/api';
import RatingBar from '../../Components/RatingBar';
import Rating from 'react-rating';


export default function RatePage({match}) {
    
    const [post, setPost] = useState({});
    const [rate, setRate] = useState(0);
    const [vote, setVote] = useState([]);
    const friendSimulator = {
        name: 'teste',
        username: 'username'
    }

    useEffect(() => {
        async function getVotes(){
            const response =  await api.get(`/post/show/${match.params.id}`);
            await setPost(response.data);
            response.data.votes.length > 1 ? await setVote(response.data.votes) : console.log(response.data.votes.length)
            // setRate(response.data.votes.reduce((acc, v) => acc+v));
            const avgRate = Number(response.data.votes.reduce((acc, vote) => acc+vote.rate, 0) / response.data.votes.length)
            setRate(avgRate)
            
            
        };
        getVotes();
        
        
    }, [])

    return (
        <Container>
            <Box>
                <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
                <h2>{post.title}</h2>
                <h5>{post.description}</h5>
                <div><Rating stop={10} initialRating={rate} readonly={true} quiet={true} /></div>
                <RatingBar />
                <Comments>
                    {
                        vote.map(vote => (
                            <FriendBox key={vote.comment} friend={{name: vote.userId, username: 'fck', comment: vote.comment}} rate={vote.rate} friendship={'rate'}/>
                        ))
                        // post.votes.map(pos => (
                        //    
                        // ))
                    }
                    {/* <FriendBox  friend={friendSimulator} rate={rate} friendship={'rate'}/> */}
                </Comments>

            </Box>
        </Container>
    )
}
