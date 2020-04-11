import React, { useState, useContext, useEffect } from 'react';
import Post from '../../Components/Posts';
import { useSelector } from 'react-redux';
import api from '../../utils/api';
import { UserContext } from '../../utils/userContext';
import { Container } from './styles';

export default function MyPosts() {
  // const posts = useContext(UserContext);
  const userId = useSelector((state) => state.user.profile.id);
  const [myPosts, setMyPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const res = await api.post('/post/getpost', {
        userId,
      });
      setMyPosts(res.data);
    }
    getPosts();
  }, []);

  return (
    <Container>
      {myPosts.length > 0 ? (
        myPosts.map((post) => (
          <Post
            key={post._id}
            postId={post._id}
            duration={post.duration}
            path={post.path}
            title={post.title}
            description={post.description}
          />
        ))
      ) : (
        <div className="no-posts-msg">
          <h3>You don't have any posts yet!</h3>
          <h4>Starting posting and rating!</h4>
        </div>
      )}
    </Container>
  );
}
