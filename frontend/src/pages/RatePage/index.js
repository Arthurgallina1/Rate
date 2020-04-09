import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Comments,
  RatingDiv,
  UpperContainer,
  Slider,
} from './styles';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import api from '../../utils/api';
import { toast } from 'react-toastify';
import Comment from '../../Components/Comment';
import RateBox from '../../Components/FriendBox';
import { Link } from 'react-router-dom';
// import RatingForm from '../../Components/RatingBar';
import Rating from 'react-rating';
import ImageSlider from '../../Components/ImageSlider';
import SVGIcon from '../../assets/estrela.png';
import SVGIconFull from '../../assets/estrelao.png';

export default function RatePage({ match }) {
  const [rateVote, setRateVote] = useState(0);
  const userId = useSelector((state) => state.user.profile._id);

  const username = useSelector((state) => state.user.profile.username);
  const [post, setPost] = useState({});
  const [rate, setRate] = useState(0);
  const [vote, setVote] = useState([]);
  const [render, setRender] = useState();
  const [allVotes, setAllVotes] = useState([]);
  const [hasVoted, setHasVoted] = useState(false);

  async function handleSubmit(data) {
    try {
      const response = await api.post('rate/vote', {
        userId,
        comment: data.comment,
        postId: match.params.id,
        rate: rateVote,
      });
      const newRate = response.data;
      setRender(newRate);

      toast.success('Success!');
    } catch (err) {
      toast.error('Error!');
    }
  }

  useEffect(() => {
    async function getVotes() {
      const response = await api.get(`/post/show/${match.params.id}`);
      await setPost(response.data);
      const votesArray = response.data.votes;
      //full array
      const allVotesArray = await Promise.all(
        votesArray.map(async (vote) => {
          let response = await api.get(`user/info/${vote.userId}`);
          const PostInfo = { ...vote, ...response.data };
          if (userId === PostInfo.user._id) {
            setHasVoted(true);
          }
          return PostInfo;
        })
      );
      setAllVotes(allVotesArray);

      //votação
      votesArray.length > 0
        ? await setVote(votesArray)
        : console.log(votesArray.length);
      const avgRate = Number(
        votesArray.reduce((acc, vote) => acc + vote.rate, 0) / votesArray.length
      );
      setRate(avgRate);
    }
    getVotes();
  }, [render]);
  return (
    <Container>
      <Box>
        <UpperContainer>
          <div className="">
            <Slider>
              <ImageSlider
                path={[post.path]}
                slideImages={[
                  'https://api.adorable.io/avatars/50/abott@adorable.png',
                  'http://localhost:8000/files/a1586118827948.jpeg',
                  'data:image/png;base64,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',
                ]}
              ></ImageSlider>
            </Slider>
            <h2>{post.title}</h2>
            <h5>{post.description}</h5>
            <div>
              <Rating
                stop={10}
                initialRating={rate}
                readonly={true}
                quiet={true}
                emptySymbol={<img src={SVGIcon} className="icon" />}
                fullSymbol={<img src={SVGIconFull} className="icon-full" />}
              />
            </div>
          </div>

          <div className="">
            {/* <Link to="/dashboard">
              <button> BACK</button>
            </Link> */}
          </div>
        </UpperContainer>
        <br />
        {hasVoted ? (
          <h3>You already have rated this post!</h3>
        ) : (
          <RatingDiv>
            <Form onSubmit={handleSubmit}>
              <Rating
                stop={10}
                fractions={2}
                initialRating={rateVote}
                onClick={(value) => setRateVote(value)}
                emptySymbol={<img src={SVGIcon} className="icon" />}
                fullSymbol={<img src={SVGIconFull} className="icon-full" />}
              />
              <Input type="text" name="comment" />
              <button>VOTE</button>
            </Form>
          </RatingDiv>
        )}
        <Comments>
          {allVotes.map((vote) => (
            <RateBox key={vote.comment} rateInfo={vote} rate={vote.rate} />
          ))}
        </Comments>
      </Box>
    </Container>
  );
}
