import React, { useState, useEffect } from 'react';
import { Container, PageContainer, Feed } from './styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import api from '../../utils/api';
import FeedBox from '../../Components/FeedBox';
import { isBefore } from 'date-fns';


export default function Dashboard() {
  const followerList = useSelector(state => state.user.profile.following);
  const [ posts, setPosts ] = useState([]);
  useEffect(() => {
      try {
            async function getFeedPosts(){
              const response =  await api.post('/rate/index', { followerList });
              await setPosts(response.data)
          }
          getFeedPosts();

      } catch (err) {
          console.log(err);
      }
  }, [])

  return (
        <Container>
          <PageContainer>
                {/* <Link to="/createpost"><button type="button">CREATE POST</button></Link> */}
                <Feed>
                  <div className="post-bg">
                    { 
                      posts.map(post => (
                        isBefore(new Date(), new Date(post.duration)) ? ( <FeedBox key={post._id} post={post} />) : ''
                      ))
                    }
                  </div>
                </Feed>
          </PageContainer>
        </Container>
    )
}
