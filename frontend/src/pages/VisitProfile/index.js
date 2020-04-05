import React, { useEffect, useState } from 'react';
import { VisitContainer, CardContainer } from './styles';
import { useParams } from 'react-router-dom';
import FeedBox from '../../Components/FeedBox';
import { useFetch } from '../../utils/hooks';
import api from '../../utils/api';

export default function VisitProfile({ match }) {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { id } = match.params;
  //   const followerCount = userInfo.user.followers.length;
  //   const followingCount = userInfo.user.following.length;
  useEffect(() => {
    async function getUserInfo() {
      const res = await api.get(`user/info/${id}`);
      setUserInfo(res.data);
      setLoading(false);
    }
    getUserInfo();
  }, []);

  useEffect(() => {
    async function getUserPosts() {
      const res = await api.post('post/getpost', { userId: id });
      setPosts(res.data);
    }
    getUserPosts();
  }, []);

  return (
    <VisitContainer>
      {loading ? (
        'Loading'
      ) : (
        <CardContainer>
          <img
            src="https://api.adorable.io/avatars/50/abott@adorable.png"
            alt=""
          />
          <h3>{userInfo.user.name}</h3>
          <h4>{userInfo.user.username}</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sed!
          </p>
          <div className="footer">
            <p>
              <strong>{userInfo.user.followers.length}</strong> Followers{' '}
              <strong>| {userInfo.user.following.length} </strong>
              Following <strong>| 3</strong> Posts
            </p>
          </div>
          <h2>T I M E L I N E</h2>
          <div className="posts">
            {posts.length > 0 ? (
              posts.map((post, i) => {
                let theme = i % 3;
                return <FeedBox post={post} color={theme} />;
              })
            ) : (
              <div className="no-post">
                <h2>No posts yet!</h2>
              </div>
            )}
          </div>
        </CardContainer>
      )}
    </VisitContainer>
  );
}
