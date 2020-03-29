import React, { useState, useEffect } from 'react'
import { Container, Box, Comments, RatingDiv, UpperContainer } from './styles';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import api from '../../utils/api';
import { toast } from 'react-toastify'
import Comment from '../../Components/Comment'
import RateBox from '../../Components/FriendBox'
import { Link } from 'react-router-dom';
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
    const [allVotes, setAllVotes] = useState([]);
    const [hasVoted, setHasVoted] = useState(false);

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
            const votesArray = response.data.votes;
            //full array
            const allVotesArray = await Promise.all(
                votesArray.map( async vote => {
                    let response = await api.get(`user/info/${vote.userId}`);
                    const PostInfo = {...vote, ...response.data};
                    if(userId === PostInfo.user._id){
                        setHasVoted(true);
                    }
                    return PostInfo;
                })
            )
            setAllVotes(allVotesArray);

            //votação
            votesArray.length > 0 ? await setVote(votesArray) : console.log(votesArray.length)
            const avgRate = Number(votesArray.reduce((acc, vote) => acc+vote.rate, 0) / votesArray.length)
            setRate(avgRate)

            console.log(allVotesArray);


            
            
        };
        getVotes();
        
        
    }, [render])

    return (
        <Container>
            <Box>
                <UpperContainer>
                    <div className="">
                        <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="profile_pic"/>
                        <h2>{post.title}</h2>
                        <h5>{post.description}</h5>
                        <div><Rating stop={10} initialRating={rate} readonly={true} quiet={true} 
                        emptySymbol={<img src={SVGIcon} className="icon" />}
                        fullSymbol={<img src={SVGIconFull} className="icon-full" />}/></div>
                    </div>

                    <div className="">
                        <Link to="/dashboard">
                            <button> BACK</button>
                        </Link>
                    </div>
                </UpperContainer>
                <br/>
               {
                   hasVoted ? (
                       <h3>You already have rated this post!</h3>  ) : 
                   (
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
                <Comments>
                    {
                        allVotes.map(vote => (
                            <RateBox key={vote.comment} rateInfo={vote} rate={vote.rate} />
                        ))
                    }
                </Comments>

            </Box>
        </Container>
    )
}
