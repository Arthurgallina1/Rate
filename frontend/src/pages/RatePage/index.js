import React, { useState, useEffect } from 'react'
import { Container, Box, Comments, RatingDiv } from './styles';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import api from '../../utils/api';
import { toast } from 'react-toastify'
import Comment from '../../Components/Comment'
import FriendBox from '../../Components/FriendBox'
// import RatingForm from '../../Components/RatingBar';
import Rating from 'react-rating';
import SVGIcon from '../../assets/estrela.png';
import SVGIconFull from '../../assets/estrelao.png';


export default function RatePage({match}) {
    const [rateVote, setRateVote ] = useState(0);
    const userId = useSelector(state => state.user.profile._id);

    const username = useSelector(state => state.user.profile.username)
    const [post, setPost] = useState({});
    const [rate, setRate] = useState(0);
    const [vote, setVote] = useState([]);
    const [render, setRender] = useState();

    async function handleSubmit(data){
        try {
            const response = await api.post('rate/vote', {
                userId,
                comment: data.comment,
                postId: match.params.id,
                rate: rateVote
            })
            const newRate = response.data;
            setRender(newRate);

            toast.success('Success!')
        } catch(err) {
            toast.error('Error!')
        }

    }   

    useEffect(() => {
        async function getVotes(){
            const response =  await api.get(`/post/show/${match.params.id}`);
            await setPost(response.data);
            response.data.votes.length > 0 ? await setVote(response.data.votes) : console.log(response.data.votes.length)
            // setRate(response.data.votes.reduce((acc, v) => acc+v));
            const avgRate = Number(response.data.votes.reduce((acc, vote) => acc+vote.rate, 0) / response.data.votes.length)
            setRate(avgRate)
            
            
        };
        getVotes();
        
        
    }, [render])

    return (
        <Container>
            <Box>
                <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt=""/>
                <h2>{post.title}</h2>
                <h5>{post.description}</h5>
                <div><Rating stop={10} initialRating={rate} readonly={true} quiet={true} 
                emptySymbol={<img src={SVGIcon} className="icon" />}
                fullSymbol={<img src={SVGIconFull} className="icon-full" />}/></div>
                <br/>
                <RatingDiv>
                    <Form onSubmit={handleSubmit}>
                        <Rating stop={10} fractions={2} initialRating={rateVote} onClick={(value) => setRateVote(value)}
                            emptySymbol={<img src={SVGIcon} className="icon" />}
                            fullSymbol={<img src={SVGIconFull} className="icon-full" />}/>
                        <Input type="text" name="comment" />
                        <button>VOTE</button> 
                    </Form>
                </RatingDiv>
                <Comments>
                    {
                        vote.map(vote => (
                            <FriendBox key={vote.comment} friend={{name: 'name', username: 'username', comment: vote.comment}} rate={vote.rate} friendship={'rate'}/>
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
